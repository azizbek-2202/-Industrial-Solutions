"use client"

import { useTranslation } from "react-i18next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-[1]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse-slower"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 py-24 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="text-yellow-400 font-semibold text-sm tracking-wide">
              {t("home.yearsInBusiness")} 1995
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-balance animate-in fade-in slide-in-from-top-4 duration-700 delay-100">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-lg">
              {t("home.heroTitle")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-balance animate-in fade-in slide-in-from-top-4 duration-700 delay-200">
            {t("home.heroSubtitle")}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
            <Link href="/products">
              <Button
                size="lg"
                className="relative overflow-hidden px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-[0_0_25px_rgba(255,180,70,0.5)] hover:scale-105 transition-all cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t("home.heroCtaButton")}
                  <ArrowRight className="w-5 h-5" />
                </span>
                <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
              </Button>
            </Link>

            <Link href="/contacts">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 rounded-full border border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold hover:scale-105 transition-all backdrop-blur-sm cursor-pointer"
              >
                {t("common.contactUs")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}