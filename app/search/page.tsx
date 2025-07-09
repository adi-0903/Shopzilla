"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Filter, Grid3X3, List, Search } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { products } from "@/lib/mock-data"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const [searchQuery, setSearchQuery] = useState(query)
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("relevance")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const searchResults = useMemo(() => {
    let filtered = products

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by price range
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Filter by brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) => selectedBrands.includes(product.brand))
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) => selectedCategories.includes(product.category))
    }

    // Sort results
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
        // relevance - keep original order
        break
    }

    return filtered
  }, [searchQuery, priceRange, selectedBrands, selectedCategories, sortBy])

  const brands = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.brand)))
  }, [])

  const categories = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.category)))
  }, [])

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands((prev) => [...prev, brand])
    } else {
      setSelectedBrands((prev) => prev.filter((b) => b !== brand))
    }
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, category])
    } else {
      setSelectedCategories((prev) => prev.filter((c) => c !== category))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-6">
        {/* Search Header */}
        <div className="mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search for products, brands and more"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          {query && (
            <p className="text-gray-600">
              Showing results for "<span className="font-semibold">{query}</span>"
            </p>
          )}
        </div>

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

                {/* Categories */}
                <div>
                  <h3 className="font-semibold mb-3">Categories</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                        />
                        <label htmlFor={`category-${category}`} className="text-sm capitalize">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h3 className="font-semibold mb-3">Brands</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={`brand-${brand}`}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                        />
                        <label htmlFor={`brand-${brand}`} className="text-sm">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search Results */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h1 className="text-2xl font-bold">Search Results</h1>
                <p className="text-gray-600">{searchResults.length} products found</p>
              </div>

              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
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

            {/* Results */}
            {searchResults.length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-24 w-24 text-gray-300 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-gray-800 mb-4">No results found</h2>
                <p className="text-gray-600 mb-8">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </div>
            ) : (
              <ProductGrid products={searchResults} />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
