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
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ProductsPage() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const routs = useRouter()

  const categories = ["all", "pumps", "conveyors", "hydraulics", "automation"]

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleClick = (id:any)=>{
    routs.push(`/products/${id}`)
  }

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
        <section className="py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    onClick={()=>{handleClick(product.id)}}
                    className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-border/40 bg-white dark:bg-gray-900 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  >
                    {/* Product Image */}
                    <div className="relative w-full h-64 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Product Info */}
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                          {product.description}
                        </p>

                        {/* Specs */}
                        <div className="space-y-1">
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">
                            {t("products.technicalSpecs")}
                          </p>
                          <ul className="space-y-1">
                            {product.specs.slice(0, 3).map((spec, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-700 dark:text-gray-400 flex items-start gap-2"
                              >
                                <span className="text-accent font-bold">•</span>
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Price + CTA */}
                      <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/50">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <Link href={`/products/${product.id}`}>
                          <Button
                            size="sm"
                            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md cursor-pointer"
                          >
                            {t("common.seeDetails")}
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Floating Accent Circle */}
                    <div className="absolute -top-10 -right-10 w-28 h-28 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">
                  {t("products.noProducts")}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
