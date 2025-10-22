"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PRODUCTS } from "@/lib/constants"
import { Search, Download } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function ProductsPage() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "pumps", "conveyors", "hydraulics", "automation"]

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-background">
        {/* HERO */}
        <section className="relative overflow-hidden pt-24 text-center">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl text-white sm:text-6xl font-extrabold mb-6">
              {t("products.title")}
            </h1>
            <p className="text-xl text-gray-300 mb-10"
              style={{ animationDelay: "0.2s" }}>
              {t("products.subtitle")}
            </p>
          </div>
        </section>
        {/* Fancy Search & Filter Section */}
        <section className="relative py-16">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-5 top-4 w-5 h-5 text-black" />
                <input
                  type="text"
                  placeholder={t("products.search")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-3xl bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm text-gray-900 dark:text-gray-100 shadow-md focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out border-2 ${selectedCategory === category
                      ? "bg-accent text-white border-accent shadow-lg"
                      : "bg-white/70 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border-transparent hover:bg-white/90 dark:hover:bg-gray-700/70"
                      } backdrop-blur-sm`}
                  >
                    {t(`products.${category}`)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="relative flex flex-col h-full rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group py-0"
                  >

                    {/* Product Image */}
                    <div className="relative w-full h-60 overflow-hidden rounded-t-2xl">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      />
                      {/* Overlay for readability (optional) */}
                      <div className="absolute inset-0 bg-white/10 dark:bg-black/10"></div>
                    </div>

                    {/* Product Details */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="text-gray-900 dark:text-white font-bold text-xl">{product.name}</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
                          {product.description}
                        </p>

                        {/* Technical Specs */}
                        <div className="mt-3 space-y-1">
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">{t("products.technicalSpecs")}</p>
                          <ul className="space-y-1">
                            {product.specs.map((spec, idx) => (
                              <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                                <span className="text-accent font-bold">•</span>
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Price & CTA */}
                      <div className="mt-6 flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
                          {t("common.requestQuote")}
                        </Button>
                      </div>
                    </div>

                    {/* Decorative floating gradient */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/20 dark:bg-accent/10 rounded-full pointer-events-none"></div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">{t("products.noProducts")}</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
