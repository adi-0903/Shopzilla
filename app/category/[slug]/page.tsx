"use client"

import { useState, useMemo } from "react"
import { useParams } from "next/navigation"
import { Filter, Grid3X3, List } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { products } from "@/lib/mock-data"

export default function CategoryPage() {
  const params = useParams()
  const categorySlug = params.slug as string

  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("popularity")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const categoryProducts = useMemo(() => {
    return products.filter((product) => product.category === categorySlug)
  }, [categorySlug])

  const brands = useMemo(() => {
    return Array.from(new Set(categoryProducts.map((p) => p.brand)))
  }, [categoryProducts])

  const filteredProducts = useMemo(() => {
    const filtered = categoryProducts.filter((product) => {
      const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1]
      const inSelectedBrands = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      return inPriceRange && inSelectedBrands
    })

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        filtered.sort((a, b) => b.id - a.id)
        break
      default:
        // popularity - keep original order
        break
    }

    return filtered
  }, [categoryProducts, priceRange, selectedBrands, sortBy])

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands((prev) => [...prev, brand])
    } else {
      setSelectedBrands((prev) => prev.filter((b) => b !== brand))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-3">Price Range</h3>
                  <Slider value={priceRange} onValueChange={setPriceRange} max={5000} step={100} className="mb-2" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h3 className="font-semibold mb-3">Brands</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={brand}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                        />
                        <label htmlFor={brand} className="text-sm">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Section */}
          <div className="lg:w-3/4">
            {/* Header with sorting and view options */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h1 className="text-2xl font-bold capitalize">{categorySlug} Collection</h1>
                <p className="text-gray-600">{filteredProducts.length} products found</p>
              </div>

              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Customer Rating</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
