"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PRODUCTS } from "@/lib/constants"
import { ArrowRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useRouter } from "next/navigation"

export function FeaturedProducts() {
  const { t } = useTranslation()
  const featuredProducts = PRODUCTS.slice(0, 3)
  const router = useRouter()

  const handleClick = (id:any) => {
    router.push(`/products/${id}`)
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-extrabold leading-tight text-balance 
                text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 
                drop-shadow-lg animate-in fade-in slide-in-from-top-4 duration-700 delay-100"
            >
              {t("home.featuredProductsTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("home.featuredProductsSubtitle")}</p>
          </div>
        </ScrollAnimation>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, idx) => (
            <ScrollAnimation key={product.id} delay={idx * 100}>
              <Card
                onClick={() => { handleClick(product.id) }}
                className="overflow-hidden card-hover group h-full flex flex-col py-0 cursor-pointer">
                {/* Product Image */}
                <div className="relative w-full h-56 bg-muted overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
                  />
                </div>

                {/* Product Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <h3
                    className="text-xl font-bold mb-3 relative z-10 
                    text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500
                    drop-shadow-md tracking-wide animate-in fade-in slide-in-from-left-2 duration-700 delay-200"
                  >
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-1">{product.description}</p>

                  {/* Specs */}
                  <ul className="space-y-2">
                    {product.specs.slice(0, 2).map((spec, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Link href={`/products/${product.id}`}>
                      <Button size="sm" variant="ghost" className="text-accent hover:text-white gap-1 cursor-pointer">
                        {t("common.learnMore")}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA Button */}
        <ScrollAnimation>
          <div className="text-center">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 transition-all hover:scale-105"
              >
                {t("home.viewAllProducts")}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
