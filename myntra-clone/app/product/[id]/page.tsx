"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Heart, Star, Truck, Shield, RotateCcw, Plus, Minus } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { products } from "@/lib/mock-data"

export default function ProductPage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)
  const product = products.find((p) => p.id === productId)

  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  if (!product) {
    return <div>Product not found</div>
  }

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-white rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-pink-500"
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-600 text-lg">{product.brand}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 font-semibold">{product.rating}</span>
                <span className="text-gray-500 ml-1">({product.reviews} reviews)</span>
              </div>
              <Badge variant="secondary">Bestseller</Badge>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold">₹{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                  <Badge className="bg-red-500">{product.discount}% OFF</Badge>
                </>
              )}
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">Select Size</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className="w-12 h-12"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 text-lg">Add to Cart</Button>
              <Button
                variant="outline"
                className={`w-full py-3 text-lg ${isWishlisted ? "text-red-500 border-red-500" : ""}`}
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart className={`h-5 w-5 mr-2 ${isWishlisted ? "fill-current" : ""}`} />
                {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <Truck className="h-5 w-5 text-green-500" />
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <RotateCcw className="h-5 w-5 text-blue-500" />
                <span>Easy Returns</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-5 w-5 text-purple-500" />
                <span>Secure Payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Product Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This premium quality {product.name.toLowerCase()} is crafted with attention to detail and comfort.
                    Made from high-quality materials, it offers durability and style that lasts. Perfect for everyday
                    wear or special occasions, this piece combines contemporary design with classic appeal.
                  </p>
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Premium quality materials</li>
                      <li>Comfortable fit</li>
                      <li>Easy care instructions</li>
                      <li>Available in multiple sizes</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Customer Reviews</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border-b pb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="font-semibold">Customer {i}</span>
                        </div>
                        <p className="text-gray-700">
                          Great quality product! Exactly as described and fits perfectly. Would definitely recommend to
                          others.
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Shipping & Returns</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Shipping Information</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Free shipping on orders above ₹999</li>
                        <li>Standard delivery: 3-5 business days</li>
                        <li>Express delivery: 1-2 business days (additional charges apply)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Return Policy</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>30-day return policy</li>
                        <li>Items must be in original condition</li>
                        <li>Free returns for defective items</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  )
}
