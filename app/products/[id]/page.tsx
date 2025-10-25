"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Factory, Wrench, Ruler, Weight } from "lucide-react"
import { PRODUCTS } from "@/lib/constants" // Sizning mahsulotlar ro‘yxatingiz

interface Product {
    id: number
    name: string
    description: string
    image: string
    material: string
    size: string
    weight: string
    category: string
    madeIn: string
}

export default function ProductDetail() {
    const { t } = useTranslation()
    const { id } = useParams()
    const [product, setProduct] = useState<Product | null>(null)
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([])

    useEffect(() => {
        if (!id) return

        const foundProduct = PRODUCTS.find((item) => item.id.toString() === id)
        setProduct(foundProduct || null)

        if (foundProduct) {
            const related = PRODUCTS.filter(
                (item) => item.category === foundProduct.category
            ).slice(0, 3)
            setRelatedProducts(related)
        }
    }, [id])

    if (!product)
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-400 text-lg">
                Mahsulot yuklanmoqda...
            </div>
        )

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100">
            {/* Breadcrumb */}
            <div className="max-w-6xl mx-auto px-4 py-6">
                <Link
                    href="/products"
                    className="flex items-center text-gray-400 hover:text-white transition"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Orqaga
                </Link>
            </div>

            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center py-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-2xl object-cover w-full"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl font-extrabold mb-4">{product.name}</h1>
                    <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <Card className="bg-gray-800/50 border-gray-700">
                            <CardContent className="p-4 flex items-center space-x-3">
                                <Wrench className="text-primary" />
                                <div>
                                    <p className="text-xs text-gray-400">Material</p>
                                    <p className="font-semibold">{product.material}</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-800/50 border-gray-700">
                            <CardContent className="p-4 flex items-center space-x-3">
                                <Ruler className="text-primary" />
                                <div>
                                    <p className="text-xs text-gray-400">O‘lcham</p>
                                    <p className="font-semibold">{product.size}</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-800/50 border-gray-700">
                            <CardContent className="p-4 flex items-center space-x-3">
                                <Weight className="text-primary" />
                                <div>
                                    <p className="text-xs text-gray-400">Og‘irlik</p>
                                    <p className="font-semibold">{product.weight}</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-800/50 border-gray-700">
                            <CardContent className="p-4 flex items-center space-x-3">
                                <Factory className="text-primary" />
                                <div>
                                    <p className="text-xs text-gray-400">Ishlab chiqarilgan joy</p>
                                    <p className="font-semibold">{product.madeIn}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <Button
                        size="lg"
                        className="rounded-xl text-lg px-8 bg-primary hover:bg-primary/80 transition"
                    >
                        Buyurtma berish
                    </Button>
                </motion.div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="max-w-6xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold mb-6">O‘xshash mahsulotlar</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {relatedProducts.map((item) => (
                            <Link key={item.id} href={`/products/${item.id}`}>
                                <Card className="bg-gray-800/60 border-gray-700 hover:shadow-xl hover:-translate-y-1 transition">
                                    <CardContent className="p-4">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={400}
                                            height={300}
                                            className="rounded-xl mb-3 object-cover w-full h-48"
                                        />
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-gray-400">{item.material}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}
