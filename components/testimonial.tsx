"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO, Manufacturing Inc",
        content:
            "TechCorp transformed our operations. We saw a 40% increase in efficiency within the first quarter. Their support team is exceptional.",
        image: "/professional-woman.png",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Operations Director, Global Tech",
        content:
            "The scalability and reliability of their platform exceeded our expectations. Best investment we made this year.",
        image: "/professional-man.png",
        rating: 5,
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        role: "CTO, Innovation Labs",
        content: "Outstanding technical implementation and customer service. They truly understand enterprise needs.",
        image: "/professional-woman-2.png",
        rating: 5,
    },
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    return (
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl text-white sm:text-5xl font-bold mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Trusted by leading companies worldwide for innovation and reliability.
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div className="relative max-w-3xl mx-auto">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-muted/50 rounded-lg p-8 md:p-12 text-center">
                                        <div className="flex justify-center gap-1 mb-6">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <Star key={i} size={20} className="fill-foreground text-foreground" />
                                            ))}
                                        </div>
                                        <p className="text-lg md:text-xl mb-8 leading-relaxed">"{testimonial.content}"</p>
                                        <div className="flex flex-col items-center">
                                            <div
                                                className="w-16 h-16 rounded-full mb-4 bg-muted"
                                                style={{
                                                    backgroundImage: `url(${testimonial.image})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                }}
                                            />
                                            <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                                            <p className="text-muted-foreground">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-2 hover:bg-muted rounded-full transition cursor-pointer text-white hover:text-black dark:border-2 border-white"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-2 hover:bg-muted rounded-full transition cursor-pointer text-white hover:text-black dark:border-2 border-white"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all ${index === currentIndex ? "bg-foreground w-8" : "bg-border w-2"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
