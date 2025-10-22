"use client"

import { Card } from "@/components/ui/card"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

export function StatsSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    })

    return (
        <div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
        >
            <Card
                className="p-8 text-center transition-all duration-500 rounded-2xl
                   bg-gradient-to-br from-white via-gray-50 to-gray-100
                   dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                   border border-gray-200 dark:border-gray-700
                   shadow-sm hover:shadow-xl hover:-translate-y-1
                   backdrop-blur-lg"
            >
                <p className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 drop-shadow-sm">
                    {inView ? <CountUp start={0} end={500} duration={2.5} /> : "0"}+
                </p>
                <p className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400 mt-1">
                    Clients
                </p>
            </Card>

            <Card
                className="p-8 text-center transition-all duration-500 rounded-2xl
                   bg-gradient-to-br from-white via-gray-50 to-gray-100
                   dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                   border border-gray-200 dark:border-gray-700
                   shadow-sm hover:shadow-xl hover:-translate-y-1
                   backdrop-blur-lg"
            >
                <p className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 drop-shadow-sm">
                    {inView ? <CountUp start={0} end={30} duration={2.5} /> : "0"}+
                </p>
                <p className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400 mt-1">
                    Countries
                </p>
            </Card>
        </div>
    )
}
