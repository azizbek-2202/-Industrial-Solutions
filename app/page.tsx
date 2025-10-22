"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";
import { AdvantagesSection } from "@/components/advantages-section";
import { NewsPreview } from "@/components/news-preview";
import Testimonials from "@/components/testimonial";
import Products from "@/components/Swiper";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <Products/>
        <AdvantagesSection />
        <Testimonials/>
        <FeaturedProducts />
        <NewsPreview />
      </main>
      <Footer />
    </div>
  );
}
