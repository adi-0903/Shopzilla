"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Grid, List } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { products } from "@/lib/mock-data"

const categories = [
  {
    name: "Men's Fashion",
    slug: "men",
    image: "https://via.placeholder.com/400x300/1E40AF/FFFFFF?text=Men's+Fashion",
    description: "Discover the latest trends in men's clothing, footwear, and accessories",
    color: "bg-blue-100",
    textColor: "text-blue-800",
    count: products.filter((p) => p.category === "men").length,
  },
  {
    name: "Women's Fashion",
    slug: "women",
    image: "https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Women's+Fashion",
    description: "Elegant dresses, ethnic wear, and trendy accessories for women",
    color: "bg-pink-100",
    textColor: "text-pink-800",
    count: products.filter((p) => p.category === "women").length,
  },
  {
    name: "Kids Wear",
    slug: "kids",
    image: "https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Kids+Wear",
    description: "Comfortable and stylish clothing for boys, girls, and babies",
    color: "bg-yellow-100",
    textColor: "text-yellow-800",
    count: products.filter((p) => p.category === "kids").length,
  },
  {
    name: "Home & Living",
    slug: "home-living",
    image: "https://via.placeholder.com/400x300/059669/FFFFFF?text=Home+Living",
    description: "Transform your space with furniture, decor, and home essentials",
    color: "bg-green-100",
    textColor: "text-green-800",
    count: products.filter((p) => p.category === "home").length,
  },
  {
    name: "Beauty",
    slug: "beauty",
    image: "https://via.placeholder.com/400x300/A855F7/FFFFFF?text=Beauty",
    description: "Premium skincare, makeup, and personal care products",
    color: "bg-purple-100",
    textColor: "text-purple-800",
    count: products.filter((p) => p.category === "beauty").length,
  },
  {
    name: "Electronics",
    slug: "electronics",
    image: "https://via.placeholder.com/400x300/374151/FFFFFF?text=Electronics",
    description: "Latest gadgets, smartphones, and electronic accessories",
    color: "bg-gray-100",
    textColor: "text-gray-800",
    count: products.filter((p) => p.category === "electronics").length,
  },
  {
    name: "Studio",
    slug: "studio",
    image: "https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Studio",
    description: "Professional photography, video, and audio equipment",
    color: "bg-indigo-100",
    textColor: "text-indigo-800",
    count: products.filter((p) => p.category === "studio").length,
  },
]

export default function CollectionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Collections</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our complete range of products across all categories. From fashion to electronics, find everything
            you need in one place.
          </p>
        </div>

        {/* Search and View Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search collections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Categories Grid/List */}
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
          {filteredCategories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="relative">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${category.color} ${category.textColor} border-0`}>{category.count} items</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Button className="w-full bg-pink-500 hover:bg-pink-600">Explore Collection</Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-center mb-8">Our Collection Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">
                {categories.reduce((sum, cat) => sum + cat.count, 0).toLocaleString()}
              </div>
              <div className="text-gray-600">Total Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">{categories.length}</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">100+</div>
              <div className="text-gray-600">Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
