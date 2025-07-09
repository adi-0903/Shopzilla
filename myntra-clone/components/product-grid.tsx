"use client"

import { useState } from "react"
import { Heart, Star, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { useWishlist } from "@/contexts/wishlist-context"
import { useToast } from "@/hooks/use-toast"

interface Product {
  id: number
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  discount?: number
  isWishlisted?: boolean
}

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { toast } = useToast()
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist`,
      })
    } else {
      addToWishlist(product)
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist`,
      })
    }
  }

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <div className="relative overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {product.discount && <Badge className="absolute top-2 left-2 bg-red-500">{product.discount}% OFF</Badge>}
              <Button
                variant="ghost"
                size="icon"
                className={`absolute top-2 right-2 ${
                  isInWishlist(product.id) ? "text-red-500" : "text-gray-400"
                } hover:text-red-500`}
                onClick={() => toggleWishlist(product)}
              >
                <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
              </Button>

              {/* Quick actions on hover */}
              <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  className="w-full bg-black text-white hover:bg-gray-800"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-sm mb-1 line-clamp-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.brand}</p>

              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm ml-1">{product.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
