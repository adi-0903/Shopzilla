"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CategoryGrid from "@/components/category-grid"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"
import { products } from "@/lib/mock-data"

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState(products.slice(0, 8))

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
            <ProductGrid products={featuredProducts} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
