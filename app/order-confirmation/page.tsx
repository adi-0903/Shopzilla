"use client"

import Link from "next/link"
import { CheckCircle, Package, Truck, Home } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function OrderConfirmationPage() {
  const orderNumber = `SS${Date.now().toString().slice(-6)}`
  const estimatedDelivery = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your purchase. Your order has been successfully placed.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Order Number:</span>
                <span className="font-bold text-pink-600">#{orderNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Estimated Delivery:</span>
                <span className="font-bold">{estimatedDelivery}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Order Status:</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Confirmed
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Order Tracking Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Track Your Order</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mb-2">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Order Placed</span>
                </div>
                <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                    <Package className="h-6 w-6 text-gray-500" />
                  </div>
                  <span className="text-sm text-gray-500">Processing</span>
                </div>
                <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                    <Truck className="h-6 w-6 text-gray-500" />
                  </div>
                  <span className="text-sm text-gray-500">Shipped</span>
                </div>
                <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                    <Home className="h-6 w-6 text-gray-500" />
                  </div>
                  <span className="text-sm text-gray-500">Delivered</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <p className="text-gray-600">
              We'll send you shipping confirmation and tracking information to your email address.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/orders">
                <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                  View Order Details
                </Button>
              </Link>
              <Link href="/">
                <Button className="bg-pink-500 hover:bg-pink-600 w-full sm:w-auto">Continue Shopping</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
