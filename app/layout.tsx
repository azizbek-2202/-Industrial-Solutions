// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"
// import { Providers } from "@/components/providers"
// import { BackgroundAnimation } from "@/components/background-animation"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Industrial Solutions - Manufacturing Excellence",
//   description:
//     "Leading industrial manufacturing company providing innovative solutions for global markets. Trusted by 500+ clients across 30 countries.",
//   keywords: [
//     "industrial equipment",
//     "manufacturing solutions",
//     "hydraulic systems",
//     "conveyor systems",
//     "automation",
//     "industrial pumps",
//   ],
//   authors: [{ name: "Industrial Solutions" }],
//   creator: "Industrial Solutions",
//   publisher: "Industrial Solutions",
//   formatDetection: {
//     email: false,
//     telephone: false,
//     address: false,
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://industrial-solutions.com",
//     siteName: "Industrial Solutions",
//     title: "Industrial Solutions - Manufacturing Excellence",
//     description: "Leading industrial manufacturing company providing innovative solutions for global markets.",
//     images: [
//       {
//         url: "https://industrial-solutions.com/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Industrial Solutions",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Industrial Solutions - Manufacturing Excellence",
//     description: "Leading industrial manufacturing company providing innovative solutions.",
//     images: ["https://industrial-solutions.com/og-image.jpg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   alternates: {
//     canonical: "https://industrial-solutions.com",
//     languages: {
//       en: "https://industrial-solutions.com/en",
//       uz: "https://industrial-solutions.com/uz",
//       ru: "https://industrial-solutions.com/ru",
//     },
//   },
//     generator: 'v0.app'
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="theme-color" content="#1A2C59" />
//         <meta name="apple-mobile-web-app-capable" content="yes" />
//         <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
//         <link rel="manifest" href="/manifest.json" />
//       </head>
//       <body className={`${inter.className} font-sans antialiased`}>
//         <BackgroundAnimation />
//         <Providers>{children}</Providers>
//         <Analytics />
//       </body>
//     </html>
//   )
// }
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Providers } from "@/components/providers"
import { BackgroundAnimation } from "@/components/background-animation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Industrial Solutions - Manufacturing Excellence",
  description:
    "Leading industrial manufacturing company providing innovative solutions for global markets. Trusted by 500+ clients across 30 countries.",
  keywords: [
    "industrial equipment",
    "manufacturing solutions",
    "hydraulic systems",
    "conveyor systems",
    "automation",
    "industrial pumps",
  ],
  authors: [{ name: "Industrial Solutions" }],
  creator: "Industrial Solutions",
  publisher: "Industrial Solutions",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://industrial-solutions.com",
    siteName: "Industrial Solutions",
    title: "Industrial Solutions - Manufacturing Excellence",
    description:
      "Leading industrial manufacturing company providing innovative solutions for global markets.",
    images: [
      {
        url: "https://industrial-solutions.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Solutions - Manufacturing Excellence",
    description:
      "Leading industrial manufacturing company providing innovative solutions.",
    images: ["https://industrial-solutions.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://industrial-solutions.com",
    languages: {
      en: "https://industrial-solutions.com/en",
      uz: "https://industrial-solutions.com/uz",
      ru: "https://industrial-solutions.com/ru",
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Correct meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1A2C59" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.className} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        {/* 🔹 Background Animation (client-side) */}
        <BackgroundAnimation />

        {/* 🔹 Context Providers */}
        <Providers>{children}</Providers>

        {/* 🔹 Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
