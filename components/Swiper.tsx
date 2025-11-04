"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"

const products = [
    {
        id: 1,
        title: "Industrial Suite Pro",
        description: "Complete automation and monitoring solution for large-scale operations.",
        image: "/industrial-product-1.jpg",
        category: "Enterprise",
    },
    {
        id: 2,
        title: "Smart Analytics",
        description: "Real-time data analysis and predictive insights for better decisions.",
        image: "/industrial-product-2.jpg",
        category: "Analytics",
    },
    {
        id: 3,
        title: "Cloud Integration",
        description: "Seamless cloud connectivity and hybrid infrastructure management.",
        image: "/industrial-product-3.jpg",
        category: "Cloud",
    },
    {
        id: 4,
        title: "IoT Platform",
        description: "Connect and manage thousands of IoT devices with ease.",
        image: "/industrial-product-4.jpg",
        category: "IoT",
    },
]

export default function Products() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlay, setIsAutoPlay] = useState(true)
    const autoPlayRef = useRef<number>()

    useEffect(() => {
        if (!isAutoPlay) return

        autoPlayRef.current = window.setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % products.length)
        }, 5000)

        return () => clearInterval(autoPlayRef.current)
    }, [isAutoPlay])

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
        setIsAutoPlay(false)
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length)
        setIsAutoPlay(false)
    }

    return (
        <section id="products" className="pb-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Our Products</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore our comprehensive range of industrial solutions designed for modern enterprises.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {products.map((product) => (
                                <div key={product.id} className="w-full flex-shrink-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                        {/* Image */}
                                        <div
                                            className="h-96 rounded-xl overflow-hidden relative"
                                            style={{
                                                backgroundImage: `url(${product.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 dark:from-black/50"></div>
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <p className="text-sm font-medium uppercase tracking-wider mb-2 text-accent">
                                                {product.category}
                                            </p>
                                            <h3
                                                className="text-3xl md:text-4xl font-extrabold mb-4 
                                                    text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-300 
                                                    drop-shadow-[0_0_15px_rgba(255,180,70,0.4)] tracking-tight leading-snug 
                                                    animate-in fade-in slide-in-from-bottom-2 duration-700"
                                            >
                                                {product.title}
                                            </h3>
                                            <p className="text-lg text-muted-foreground mb-6">{product.description}</p>
                                            <Link href={`/products`} className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-full font-semibold hover:bg-accent/90 dark:hover:bg-accent/80 transition group">
                                                Learn More
                                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-background/80 dark:bg-background/70 hover:bg-background/90 dark:hover:bg-background/90 rounded-full shadow-md transition"
                        aria-label="Previous product"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-background/80 dark:bg-background/70 hover:bg-background/90 dark:hover:bg-background/90 rounded-full shadow-md transition"
                        aria-label="Next product"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {products.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentIndex(index)
                                    setIsAutoPlay(false)
                                }}
                                className={`h-2 rounded-full transition-all ${index === currentIndex ? "bg-accent w-8" : "bg-border w-2"
                                    }`}
                                aria-label={`Go to product ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
