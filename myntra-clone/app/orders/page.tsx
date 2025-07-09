"use client"

import { useState } from "react"
import Link from "next/link"
import { Package, Truck, CheckCircle, ArrowLeft, Eye } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/contexts/auth-context"

// Mock orders data
const mockOrders = [
  {
    id: "SS123456",
    date: "2024-01-15",
    status: "delivered",
    total: 2499,
    items: [
      {
        id: 1,
        name: "Premium Cotton T-Shirt",
        brand: "StyleCraft",
        image: "/placeholder.svg?height=80&width=80",
        quantity: 2,
        price: 899,
      },
      {
        id: 2,
        name: "Classic Denim Jeans",
        brand: "DenimCo",
        image: "/placeholder.svg?height=80&width=80",
        quantity: 1,
        price: 1299,
      },
    ],
  },
  {
    id: "SS123457",
    date: "2024-01-20",
    status: "shipped",
    total: 1599,
    items: [
      {
        id: 3,
        name: "Elegant Summer Dress",
        brand: "FashionForward",
        image: "/placeholder.svg?height=80&width=80",
        quantity: 1,
        price: 1599,
      },
    ],
  },
  {
    id: "SS123458",
    date: "2024-01-22",
    status: "processing",
    total: 799,
    items: [
      {
        id: 4,
        name: "Floral Print Blouse",
        brand: "BloomStyle",
        image: "/placeholder.svg?height=80&width=80",
        quantity: 1,
        price: 799,
      },
    ],
  },
]

export default function OrdersPage() {
  const { user } = useAuth()
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Please sign in</h1>
            <p className="text-gray-600 mb-8">You need to be signed in to view your orders.</p>
            <Link href="/auth/signin">
              <Button className="bg-pink-500 hover:bg-pink-600">Sign In</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "shipped":
        return <Truck className="h-5 w-5 text-blue-500" />
      case "processing":
        return <Package className="h-5 w-5 text-orange-500" />
      default:
        return <Package className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "processing":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">My Orders</h1>

        {mockOrders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No orders yet</h2>
            <p className="text-gray-600 mb-8">When you place your first order, it will appear here.</p>
            <Link href="/">
              <Button className="bg-pink-500 hover:bg-pink-600">Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {mockOrders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        {getStatusIcon(order.status)}
                        <span>Order #{order.id}</span>
                      </CardTitle>
                      <p className="text-gray-600 mt-1">
                        Placed on{" "}
                        {new Date(order.date).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                      <Badge className={getStatusColor(order.status)}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                      <span className="font-bold text-lg">₹{order.total}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-gray-600 text-sm">{item.brand}</p>
                          <p className="text-sm">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₹{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 mt-6 pt-4 border-t">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    {order.status === "delivered" && (
                      <Button variant="outline" size="sm">
                        Write Review
                      </Button>
                    )}
                    {order.status !== "delivered" && (
                      <Button variant="outline" size="sm">
                        Track Order
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      Download Invoice
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
