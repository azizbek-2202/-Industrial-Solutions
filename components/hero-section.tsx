"use client";

import { useTranslation } from "react-i18next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollAnimation>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-full border border-accent/40 animate-in fade-in slide-in-from-left-4 duration-700">
                <span className="text-accent font-semibold text-sm">{t("home.yearsInBusiness")} 1995</span>
              </div>

              <h1 className="text-5xl text-white lg:text-6xl font-bold leading-tight text-balance animate-in fade-in slide-in-from-left-4 duration-700 delay-100 text-foreground">
                {t("home.heroTitle")}
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg text-balance animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
                {t("home.heroSubtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 w-full sm:w-auto transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  >
                    {t("home.heroCtaButton")}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contacts">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-foreground text-white hover:text-white hover:bg-foreground/10 font-semibold w-full sm:w-auto bg-transparent transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  >
                    {t("common.contactUs")}
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-foreground/20 animate-in fade-in slide-in-from-left-4 duration-700 delay-400">
                <div>
                  <p className="text-3xl font-bold text-accent">500+</p>
                  <p className="text-sm text-muted-foreground">{t("home.satisfiedClients")}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">30+</p>
                  <p className="text-sm text-muted-foreground">{t("home.productsDelivered")}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">29</p>
                  <p className="text-sm text-muted-foreground">{t("home.expertTeam")}</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
