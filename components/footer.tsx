// components/footer.tsx
"use client"

import { useTranslation } from "react-i18next"
import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"
import { COMPANY } from "@/lib/constants"

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear() // endi faqat clientda render bo'ladi

  return (
    <footer className="text-white transition-all duration-300 ease-in-out relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{COMPANY.name}</h3>
            <p className="text-sm opacity-90 mb-4">
              Leading industrial manufacturing solutions for global markets.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-accent transition-all duration-300 ease-in-out">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-all duration-300 ease-in-out">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-all duration-300 ease-in-out">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white hover:text-accent transition-all duration-300 ease-in-out">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-accent transition-all duration-300 ease-in-out">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white hover:text-accent transition-all duration-300 ease-in-out">
                  {t("nav.products")}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white hover:text-accent transition-all duration-300 ease-in-out">
                  {t("nav.news")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="text-white hover:text-accent transition-all duration-300 ease-in-out">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="text-white hover:text-accent transition-all duration-300 ease-in-out">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm opacity-90 mb-3">Subscribe for updates and news</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded bg-primary-foreground text-primary text-sm placeholder-muted-foreground"
              />
              <button className="px-3 py-2 bg-accent text-white rounded font-medium hover:opacity-90 transition-all duration-300 ease-in-out cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; {currentYear} {COMPANY.name}. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-white hover:text-accent transition-all duration-300 ease-in-out">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white hover:text-accent transition-all duration-300 ease-in-out">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
