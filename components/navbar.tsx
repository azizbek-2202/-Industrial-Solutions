"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { useTheme } from "next-themes"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useTheme()

  // ✅ Prevent hydration mismatch (client-only rendering)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <nav className="h-16 flex items-center justify-center bg-background border-b">
        <div className="animate-pulse text-muted-foreground text-sm">Loading navbar...</div>
      </nav>
    )
  }

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.products"), href: "/products" },
    { label: t("nav.news"), href: "/news" },
    { label: t("nav.contacts"), href: "/contacts" },
  ]

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 🔹 Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-primary font-bold">
              IS
            </div>
            <span className="hidden sm:inline">Industrial Solutions</span>
          </Link>

          {/* 🔹 Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-all duration-300 ease-in-out font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* 🔹 Right Controls */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="hidden sm:flex gap-2">
              {["en", "uz", "ru"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => toggleLanguage(lang)}
                  className={`px-2 py-1 text-sm font-medium rounded transition-all duration-300 ease-in-out ${
                    i18n.language === lang
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-all duration-300 ease-in-out"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 🔹 Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-all duration-300 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Language Buttons */}
            <div className="px-4 py-2 flex gap-2">
              {["en", "uz", "ru"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    toggleLanguage(lang)
                    setIsOpen(false)
                  }}
                  className={`px-2 py-1 text-sm font-medium rounded transition-all duration-300 ease-in-out ${
                    i18n.language === lang
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
