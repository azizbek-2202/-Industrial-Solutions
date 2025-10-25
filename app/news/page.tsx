"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { NEWS } from "@/lib/constants"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { useRouter } from "next/navigation"

export default function NewsPage() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const routs = useRouter()

  const categories = ["all", "announcements", "innovations", "events"]

  const years = ["all", ...new Set(NEWS.map((article) => new Date(article.date).getFullYear().toString()))]

  const filteredNews = NEWS.filter((article) => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    const articleYear = new Date(article.date).getFullYear().toString()
    const matchesYear = selectedYear === "all" || articleYear === selectedYear
    return matchesCategory && matchesYear
  })

  const handleClick = (id: any) => {
    routs.push(`/news/${id}`)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="relative py-44 text-center">
          {/* 🔹 Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white dark:text-white animate-fade-up">
              {t("news.title")}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-up opacity-90" style={{ animationDelay: "0.2s" }}>
              {t("news.subtitle")}
            </p>

            {/* 🔹 Optional CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <a href="#latest" className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-all duration-300">
                Latest News
              </a>
              <a href="#categories" className="px-6 py-3 rounded-full border border-accent text-accent font-medium hover:bg-accent/10 transition-all duration-300">
                Categories
              </a>
            </div>
          </div>
        </section>

        {/* News Filter Section */}
        <section id="categories" className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10 xl:flex items-start justify-between">
            {/* Category Filter */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">{t("news.filterByCategory")}</h3>
              <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ease-in-out shadow-md hover:shadow-xl hover:scale-105 ${selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-muted text-foreground dark:bg-gray-700 dark:text-gray-200 hover:bg-muted/80"
                      }`}
                  >
                    {t(`news.${category}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">{t("news.filterByDate")}</h3>
              <div className="flex flex-wrap gap-4">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ease-in-out shadow-md hover:shadow-xl hover:scale-105 ${selectedYear === year
                      ? "bg-primary text-white"
                      : "bg-muted text-foreground dark:bg-gray-700 dark:text-gray-200 hover:bg-muted/80"
                      }`}
                  >
                    {year === "all" ? t("news.all") : year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section id="latest" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((article) => (
                  <Card
                    key={article.id}
                    onClick={() => { handleClick(article.id) }}
                    className="relative flex flex-col h-full rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl py-0 cursor-pointer"
                  >
                    {/* Article Image */}
                    <div className="relative w-full h-56 overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 dark:bg-white/10 pointer-events-none"></div>
                    </div>

                    {/* Article Content */}
                    <div className="p-6 flex flex-col flex-1 space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-foreground line-clamp-2">{article.title}</h3>
                      <p className="text-sm text-muted-foreground flex-1 line-clamp-3">{article.excerpt}</p>

                      {/* Read More Link */}
                      <Link
                        href={`/news/${article.id}`}
                        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium mt-auto transition-colors duration-300"
                      >
                        {t("news.readFullArticle")}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">{t("news.noNews")}</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
