"use client"

import Link from "next/link"
import { Heart, ShoppingBag, ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useWishlist } from "@/contexts/wishlist-context"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (product: any) => {
    addToCart(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    })
  }

  const handleRemoveFromWishlist = (product: any) => {
    removeFromWishlist(product.id)
    toast({
      title: "Removed from wishlist",
      description: `${product.name} has been removed from your wishlist`,
    })
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Your wishlist is empty</h1>
            <p className="text-gray-600 mb-8">Save your favorite items to your wishlist.</p>
            <Link href="/">
              <Button className="bg-pink-500 hover:bg-pink-600">Start Shopping</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
          <h1 className="text-2xl font-bold">My Wishlist ({items.length} items)</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.discount && (
                    <Badge className="absolute top-2 left-2 bg-red-500">{product.discount}% OFF</Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveFromWishlist(product)}
                  >
                    <Heart className="h-5 w-5 fill-current" />
                  </Button>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.brand}</p>

                  <div className="flex items-center space-x-2 mb-3">
                    <span className="font-bold text-lg">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
                    )}
                  </div>

                  <Button className="w-full bg-pink-500 hover:bg-pink-600" onClick={() => handleAddToCart(product)}>
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
