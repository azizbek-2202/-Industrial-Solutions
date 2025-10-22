"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { NEWS } from "@/lib/constants"
import { ArrowRight, Calendar } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useRouter } from "next/navigation"

export function NewsPreview() {
  const { t } = useTranslation()
  const latestNews = NEWS.slice(0, 3)
  const router = useRouter()

  const handleClick = (id: string | number) => {
    router.push(`/new/${id}`)
  }
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t("home.latestNewsTitle")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("home.latestNewsSubtitle")}</p>
          </div>
        </ScrollAnimation>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {latestNews.map((article, idx) => (
            <ScrollAnimation key={article.id} delay={idx * 100}>
              <Card
                onClick={() => { handleClick(article.id) }}
                className="overflow-hidden card-hover group flex flex-col h-full py-0 cursor-pointer">
                {/* Article Image */}
                <div className="relative w-full h-56 bg-muted overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
                  />
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>

                  <h3 className="text-xl font-bold text-foreground">{article.title}</h3>
                  <p className="text-muted-foreground text-sm flex-1">{article.excerpt}</p>

                  {/* Read More Link */}
                  <Link
                    href={`/news/${article.id}`}
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-all duration-300 ease-in-out mt-auto"
                  >
                    {t("common.readMore")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA Button */}
        <ScrollAnimation>
          <div className="text-center">
            <Link href="/news">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 transition-all hover:scale-105"
              >
                {t("home.viewAllNews")}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
