"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Welcome to SHOPZILLA",
      subtitle: "Big, bold, and unstoppable.",
      description: "Discover amazing products at unbeatable prices. Your one-stop destination for everything you need.",
      cta: "Shop Now",
      link: "/collections",
      bgGradient: "from-purple-600 via-blue-600 to-cyan-500",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Fashion Forward",
      subtitle: "Style that speaks volumes",
      description: "Discover the latest trends in men's and women's fashion. From casual wear to formal attire.",
      cta: "Explore Fashion",
      link: "/collections",
      bgGradient: "from-pink-500 via-red-500 to-yellow-500",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "Home & Living",
      subtitle: "Transform your space",
      description: "Beautiful furniture, decor, and essentials to make your house a home.",
      cta: "Shop Home",
      link: "/category/home-living",
      bgGradient: "from-green-500 via-teal-500 to-blue-500",
      textColor: "text-white",
    },
    {
      id: 4,
      title: "Studio Equipment",
      subtitle: "Create without limits",
      description: "Professional cameras, lighting, and audio equipment for content creators.",
      cta: "Explore Studio",
      link: "/category/studio",
      bgGradient: "from-indigo-600 via-purple-600 to-pink-600",
      textColor: "text-white",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className={`h-full bg-gradient-to-r ${slide.bgGradient} flex items-center justify-center`}>
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto space-y-6">
                <h1 className={`text-5xl md:text-7xl font-black ${slide.textColor} mb-4`}>{slide.title}</h1>
                <p className={`text-xl md:text-2xl font-semibold ${slide.textColor} mb-2`}>{slide.subtitle}</p>
                <p className={`text-lg md:text-xl ${slide.textColor} opacity-90 mb-8 max-w-2xl mx-auto`}>
                  {slide.description}
                </p>
                <Link href={slide.link}>
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
                  >
                    {slide.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
