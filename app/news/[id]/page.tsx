"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { NEWS } from "@/lib/constants"

interface NewsItem {
    id: number
    title: string
    date: string
    image: string
    category: string
    excerpt: string
    content: string
}

export default function NewsDetail() {
    const { t } = useTranslation()
    const { id } = useParams()
    const [news, setNews] = useState<NewsItem | null>(null)
    const [relatedNews, setRelatedNews] = useState<NewsItem[]>([])

    useEffect(() => {
        if (!id) return

        const foundNews = NEWS.find((item) => item.id.toString() === id)
        setNews(foundNews || null)

        if (foundNews) {
            const related = NEWS.filter(
                (item) => item.category === foundNews.category && item.id !== foundNews.id
            ).slice(0, 3)
            setRelatedNews(related)
        }
    }, [id])

    if (!news)
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-400 text-lg">
                Yangilik yuklanmoqda...
            </div>
        )

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100">
            {/* Breadcrumb */}
            <div className="max-w-6xl mx-auto px-4 py-6">
                <Link
                    href="/news"
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
                        src={news.image}
                        alt={news.title}
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
                    <h1 className="text-4xl font-extrabold mb-4">{news.title}</h1>

                    <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{news.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Tag className="w-4 h-4 text-primary" />
                            <span>{news.category}</span>
                        </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{news.excerpt}</p>
                    <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                        {news.content}
                    </p>
                </motion.div>
            </section>

            {/* Related News Section */}
            {relatedNews.length > 0 && (
                <section className="max-w-6xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold mb-6">O‘xshash yangiliklar</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {relatedNews.map((item) => (
                            <Link key={item.id} href={`/news/${item.id}`}>
                                <Card className="bg-gray-800/60 border-gray-700 hover:shadow-xl hover:-translate-y-1 transition">
                                    <CardContent className="p-4">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={400}
                                            height={250}
                                            className="rounded-xl mb-3 object-cover w-full h-48"
                                        />
                                        <p className="font-semibold">{item.title}</p>
                                        <p className="text-sm text-gray-400 mt-1">{item.date}</p>
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
