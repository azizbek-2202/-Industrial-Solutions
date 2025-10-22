"use server"

export async function sendTelegramMessage(data: {
  name: string
  email: string
  phone: string
  message: string
  subject?: string
}) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.error("Telegram credentials not configured")
    return { success: false, error: "Telegram not configured" }
  }

  const text = `
📧 New Contact Form Submission

👤 Name: ${data.name}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
${data.subject ? `📌 Subject: ${data.subject}` : ""}

💬 Message:
${data.message}
  `.trim()

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send message")
    }

    return { success: true }
  } catch (error) {
    console.error("Telegram error:", error)
    return { success: false, error: "Failed to send message" }
  }
}
