import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export default function ContactsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 relative">
        {/* Contact Hero Section */}
        <section className="relative py-44">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-white animate-fade-up">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-up"
              style={{ animationDelay: "0.2s" }}>
              Get in touch with our team for inquiries, support, or partnership opportunities.
            </p>

            {/* CTA Button */}
            <a
              href="#contactForm"
              className="inline-block px-8 py-4 bg-accent text-white font-medium rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Send a Message
            </a>
          </div>
        </section>


        {/* Contact Section */}
        <section className="py-32">
          <div id="contactForm" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm />
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Find Us on the Map</h2>
            <div className="w-full h-96 bg-muted rounded-lg border border-border overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3149999999998!2d69.2797!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b57b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1234567890"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
