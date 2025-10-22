"use client"

import type { ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "@/lib/i18n"
import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </ThemeProvider>
  )
}
