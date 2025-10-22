"use client"

import { useTranslation } from "react-i18next"
import { Card } from "@/components/ui/card"
import { Zap, Shield, TrendingUp, Users } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function AdvantagesSection() {
  const { t } = useTranslation()

  const advantages = [
    {
      icon: Zap,
      titleKey: "home.advantage1Title",
      descKey: "home.advantage1Desc",
    },
    {
      icon: Shield,
      titleKey: "home.advantage3Title",
      descKey: "home.advantage3Desc",
    },
    {
      icon: TrendingUp,
      titleKey: "home.advantage1Title",
      descKey: "home.advantage1Desc",
    },
    {
      icon: Users,
      titleKey: "home.advantage2Title",
      descKey: "home.advantage2Desc",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t("home.advantagesTitle")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver excellence through innovation, quality, and customer commitment
            </p>
          </div>
        </ScrollAnimation>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, idx) => {
            const Icon = advantage.icon
            return (
              <ScrollAnimation key={idx} delay={idx * 100}>
                <Card className="relative p-6 text-center group h-full overflow-hidden rounded-2xl shadow-lg bg-background/80 dark:bg-background/70 backdrop-blur-md transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl">
                  {/* Floating Gradient Circle */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-tr from-accent/30 to-primary/30 blur-3xl pointer-events-none"></div>

                  {/* Icon */}
                  <div className="flex justify-center mb-5 relative z-10">
                    <div className="p-4 bg-accent/10 dark:bg-accent/20 rounded-xl inline-flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-7 h-7 text-accent dark:text-accent/90" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3 relative z-10">
                    {t(advantage.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground relative z-10">
                    {t(advantage.descKey)}
                  </p>

                  {/* Decorative Underline / Accent */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-all duration-300 pointer-events-none"></div>
                </Card>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    </section>
  )
}
