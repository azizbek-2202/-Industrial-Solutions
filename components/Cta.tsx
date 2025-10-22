export default function CTA() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
                <p className="text-lg mb-8 opacity-90">
                    Join hundreds of leading companies that trust TechCorp for their industrial solutions.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-3 bg-background text-foreground rounded-full font-semibold hover:opacity-90 transition">
                        Start Free Trial
                    </button>
                    <button className="px-8 py-3 border-2 border-background text-background rounded-full font-semibold hover:bg-background/10 transition">
                        Schedule Demo
                    </button>
                </div>
            </div>
        </section>
    )
}
