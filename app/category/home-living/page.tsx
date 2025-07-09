"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Grid, List, Home } from "lucide-react"
import { products } from "@/lib/mock-data"

export default function HomeLivingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const [priceRange, setPriceRange] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const router = useRouter()

  const homeLivingProducts = products.filter((product) => product.category === "home")

  const filteredProducts = homeLivingProducts
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .filter((product) => {
      if (priceRange === "all") return true
      if (priceRange === "under-1000") return product.price < 1000
      if (priceRange === "1000-5000") return product.price >= 1000 && product.price <= 5000
      if (priceRange === "5000-20000") return product.price >= 5000 && product.price <= 20000
      if (priceRange === "above-20000") return product.price > 20000
      return true
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price
      if (sortBy === "price-high") return b.price - a.price
      if (sortBy === "rating") return b.rating - a.rating
      if (sortBy === "newest") return new Date(b.id).getTime() - new Date(a.id).getTime()
      return 0
    })

  const subcategories = [
    { name: "Furniture", count: 85, color: "bg-green-100 text-green-800" },
    { name: "Kitchen & Dining", count: 92, color: "bg-blue-100 text-blue-800" },
    { name: "Home Decor", count: 78, color: "bg-purple-100 text-purple-800" },
    { name: "Bedding", count: 65, color: "bg-pink-100 text-pink-800" },
    { name: "Storage", count: 45, color: "bg-yellow-100 text-yellow-800" },
    { name: "Lighting", count: 38, color: "bg-indigo-100 text-indigo-800" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Home className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Home & Living</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Transform your space with our curated collection of furniture, decor, and home essentials
          </p>
          <Badge className="mt-4 bg-white text-green-600 text-lg px-4 py-2">
            {homeLivingProducts.length}+ Products Available
          </Badge>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Subcategories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {subcategories.map((sub) => (
              <Card key={sub.name} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-sm mb-2">{sub.name}</h3>
                  <Badge className={`${sub.color} text-xs`}>{sub.count} items</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search home & living products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-1000">Under ₹1,000</SelectItem>
                <SelectItem value="1000-5000">₹1,000 - ₹5,000</SelectItem>
                <SelectItem value="5000-20000">₹5,000 - ₹20,000</SelectItem>
                <SelectItem value="above-20000">Above ₹20,000</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Home & Living Products ({filteredProducts.length})</h2>
        </div>

        <ProductGrid products={filteredProducts} />
      </main>

      <Footer />
    </div>
  )
}
