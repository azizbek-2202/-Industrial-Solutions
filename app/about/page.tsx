"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Award, Users, Zap, Globe } from "lucide-react"
import { StatsSection } from "@/components/StatsSection"
import { useTranslation } from "react-i18next"
import * as Icons from "lucide-react"

export default function AboutPage() {
  const { t } = useTranslation()
  const ValuesCards = t("about.valuesCard", { returnObjects: true }) as {
    icon: string
    title: string
    desc: string
  }[]

  const milestones = [
    {
      year: "1995",
      title: "Founded",
      description: "Company established with vision for industrial excellence.",
    },
    {
      year: "2005",
      title: "Global Expansion",
      description: "Opened offices in 10 countries across Europe and Asia.",
    },
    {
      year: "2015",
      title: "Innovation Hub",
      description: "Launched R&D center for advanced manufacturing solutions.",
    },
    {
      year: "2024",
      title: "Market Leader",
      description: "Recognized as top industrial equipment provider globally.",
    },
  ]

  const team = [
    { name: "John Smith", role: "CEO & Founder", image: "/professional-man-ceo.jpg" },
    { name: "Sarah Johnson", role: "CTO", image: "/professional-woman-engineer.jpg" },
    { name: "Michael Chen", role: "COO", image: "/professional-man-operations.jpg" },
    { name: "Emma Davis", role: "Head of Sales", image: "/professional-woman-sales.jpg" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden py-36 flex items-center justify-center text-center">
          {/* 🔹 Light / Dark fonlar */}
          <div className="absolute inset-0 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-colors duration-700" />

          {/* 🔹 Kontent */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-balance animate-in fade-in slide-in-from-top-4 duration-700 delay-100">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-lg">
                {t("about.aboutTitle")}
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed
                 animate-fade-up opacity-90"
              style={{ animationDelay: "0.2s" }}
            >
              {t("about.subTitle")}
            </p>

            {/* 🔹 CTA tugmalar (responsive) */}
            <div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#mission"
                className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-all duration-300"
              >
                {t("about.mainBtn1")}
              </a>
              <a
                href="#values"
                className="px-6 py-3 rounded-full border border-accent text-accent font-medium hover:bg-accent/10 transition-all duration-300"
              >
                {t("about.mainBtn2")}
              </a>
            </div>
          </div>

          {/* 🔹 Pattern (fon uchun) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.05)_1px,_transparent_0)] bg-[length:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.05)_1px,_transparent_0)]" />
        </section>

        {/* MISSION */}
        <section id="mission" className="py-24 relative overflow-hidden">
          {/* Dark mode uchun grid pattern */}
          <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_1px_1px,_#334155_1px,_transparent_0)] bg-[length:24px_24px] opacity-30" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="relative z-10">
              <h2
                className="text-4xl pb-2 md:text-5xl font-extrabold leading-tight text-balance 
                text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 
                drop-shadow-lg animate-in fade-in slide-in-from-top-4 duration-700 delay-100"
              >
                {t("about.mainBtn1")}
              </h2>

              <p className="text-lg text-white dark:text-gray-300 mb-6 leading-relaxed">
                {t("about.sectionDesc1")}
              </p>

              <p className="text-lg text-white dark:text-gray-300 mb-10 leading-relaxed">
                {t("about.sectionDesc2")}
              </p>

              {/* STATS */}
              <StatsSection />
            </div>

            {/* RIGHT VISUAL */}
            <div
              className="relative h-[420px] flex flex-col items-center justify-center text-center rounded-3xl overflow-hidden
                 border border-gray-200 dark:border-accent/30
                 bg-white dark:bg-gradient-to-br dark:from-accent/10 dark:via-accent/5 dark:to-transparent
                 shadow-md hover:shadow-2xl transition-all duration-700"
            >
              <div className="absolute inset-0 dark:bg-accent/10 dark:blur-3xl dark:opacity-20" />
              <Globe className="w-28 h-28 text-accent/70 mb-6 animate-pulse" />
              <p className="text-xl font-semibold text-gray-900 dark:text-black tracking-wide">
                Global Presence
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 px-6">
                Delivering solutions that reach every corner of the world.
              </p>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section id="values" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-center text-4xl pb-10 md:text-5xl font-extrabold leading-tight text-balance 
                text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 
                drop-shadow-lg animate-in fade-in slide-in-from-top-4 duration-700 delay-100"
            >
              {t("about.mainBtn2")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ValuesCards.length > 0 &&
                ValuesCards.map((value, i) => {
                  const Icon = Icons[value.icon as keyof typeof Icons]

                  return (
                    <div
                      key={i}
                      className="group relative overflow-hidden p-8 rounded-2xl bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                    >
                      {/* Yorqin nur effekti */}
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                      {/* Icon joylashuvi */}
                      <div className="relative z-10 flex justify-center items-center w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all duration-500">
                        {Icon && <Icon className="w-8 h-8 text-accent" />}
                      </div>

                      {/* Title */}
                      <h3 className="relative z-10 text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                        {value.title}
                      </h3>

                      {/* Description */}
                      <p className="relative z-10 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {value.desc}
                      </p>

                      {/* Pastki dekorativ chiziq */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[2px] bg-accent transition-all duration-500" />
                    </div>
                  )
                })}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-16 text-center">Leadership Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <Card
                  key={i}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-md hover:shadow-2xl transition-all duration-500"
                >
                  {/* Rasm qismi */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Hoverda paydo bo‘ladigan ijtimoiy tarmoq ikonlari */}
                    <div className="absolute inset-x-0 bottom-4 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-accent/80 text-white transition">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-accent/80 text-white transition">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-accent/80 text-white transition">
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>

                  {/* Ism va roli */}
                  <div className="relative z-10 p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-accent transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-16 text-center">Our Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((m, i) => (
                <Card
                  key={i}
                  className="relative p-8 rounded-xl bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
                >
                  {/* Gradient accent chiziq */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/60 rounded-t-xl"></div>

                  {/* Yil */}
                  <p className="text-4xl font-extrabold text-accent mb-4 tracking-tight">
                    {m.year}
                  </p>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                    {m.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {m.description}
                  </p>

                  {/* Hoverda dekorativ effekt */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-accent transition-opacity duration-500 rounded-xl"></div>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* <Footer /> */}
    </div>
  )
}
