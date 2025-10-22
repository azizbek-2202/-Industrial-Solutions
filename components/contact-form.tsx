"use client"

import type React from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { sendTelegramMessage } from "@/app/actions/send-message"
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { COMPANY } from "@/lib/constants"

const TELEGRAM_BOT_TOKEN = "8469535447:AAEocswvPO4FMBWUejDsOu5_pYVZ3Y0K92U"
const TELEGRAM_CHAT_ID = "@MashNamangan"

export function ContactForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Telegramga jo'natish funksiyasi
  const sendTelegramMessage = async (data: typeof formData) => {
    try {
      const message = `
        *New Contact Form Submission*
        *Name:* ${data.name}
        *Email:* ${data.email}
        *Phone:* ${data.phone}
        *Subject:* ${data.subject}
        *Message:* ${data.message}
      `
      const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      })
      const result = await res.json()
      return result.ok ? { success: true } : { success: false, error: result.description }
    } catch (error) {
      return { success: false, error: "Failed to send message" }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus("idle")

    try {
      const result = await sendTelegramMessage(formData)
      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
        setErrorMessage(result.error || "Failed to send message")
      }
    } catch {
      setSubmitStatus("error")
      setErrorMessage("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }


  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Info Section */}
      <div className="space-y-6">
        {[{
          icon: Mail,
          title: "Email",
          content: COMPANY.email,
          href: `mailto:${COMPANY.email}`
        }, {
          icon: Phone,
          title: "Phone",
          content: COMPANY.phone,
          href: `tel:${COMPANY.phone}`
        }, {
          icon: MapPin,
          title: "Address",
          content: COMPANY.address,
        }].map((item, idx) => (
          <Card
            key={idx}
            className="p-6 bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex gap-4 items-start">
              <item.icon className="w-6 h-6 text-accent mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-accent hover:text-accent/80 transition">
                    {item.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.content}</p>
                )}
              </div>
            </div>
          </Card>
        ))}

        {/* Business Hours */}
        <Card className="p-6 bg-muted/40 dark:bg-muted/20 border-border/50 backdrop-blur-sm">
          <h3 className="font-bold text-foreground mb-4">Business Hours</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Mon–Fri: 9:00 AM – 6:00 PM</p>
            <p>Saturday: 10:00 AM – 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </Card>
      </div>

      {/* Form */}
      <div className="lg:col-span-2">
        <Card className="p-8 border-border/50 bg-card/80 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

          {submitStatus === "success" && (
            <div className="mb-6 flex items-start gap-3 p-4 rounded-lg border border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Message Sent Successfully!</p>
                <p className="text-sm opacity-90">We will get back to you soon.</p>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 flex items-start gap-3 p-4 rounded-lg border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Error Sending Message</p>
                <p className="text-sm opacity-90">{errorMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "name", label: "Name *", type: "text", placeholder: "Your name" },
                { name: "email", label: "Email *", type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-foreground mb-2">{field.label}</label>
                  <input
                    {...field}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border/60 bg-background/80 dark:bg-gray-900/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "phone", label: "Phone *", type: "tel", placeholder: "+998 88 466 2209" },
                { name: "subject", label: "Subject", type: "text", placeholder: "Subject of inquiry" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-foreground mb-2">{field.label}</label>
                  <input
                    {...field}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border/60 bg-background/80 dark:bg-gray-900/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              ))}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border/60 bg-background/80 dark:bg-gray-900/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your inquiry..."
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 gap-2 bg-accent text-white hover:bg-accent/90 dark:hover:bg-accent/80 font-semibold shadow-md transition-all duration-300"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-2">
              We typically respond within 24 hours during business days.
            </p>
          </form>
        </Card>
      </div>
    </div>
  )
}
