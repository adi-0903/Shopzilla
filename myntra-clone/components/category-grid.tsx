"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/mock-data"

const categories = [
  {
    name: "Men's Fashion",
    image: "https://via.placeholder.com/200x200/1E40AF/FFFFFF?text=Men's+Fashion",
    href: "/category/men",
    color: "bg-blue-100",
    count: products.filter((p) => p.category === "men").length,
  },
  {
    name: "Women's Fashion",
    image: "https://via.placeholder.com/200x200/EC4899/FFFFFF?text=Women's+Fashion",
    href: "/category/women",
    color: "bg-pink-100",
    count: products.filter((p) => p.category === "women").length,
  },
  {
    name: "Kids Wear",
    image: "https://via.placeholder.com/200x200/F59E0B/FFFFFF?text=Kids+Wear",
    href: "/category/kids",
    color: "bg-yellow-100",
    count: products.filter((p) => p.category === "kids").length,
  },
  {
    name: "Home & Living",
    image: "https://via.placeholder.com/200x200/059669/FFFFFF?text=Home+Living",
    href: "/category/home-living",
    color: "bg-green-100",
    count: products.filter((p) => p.category === "home").length,
  },
  {
    name: "Beauty",
    image: "https://via.placeholder.com/200x200/A855F7/FFFFFF?text=Beauty",
    href: "/category/beauty",
    color: "bg-purple-100",
    count: products.filter((p) => p.category === "beauty").length,
  },
  {
    name: "Electronics",
    image: "https://via.placeholder.com/200x200/374151/FFFFFF?text=Electronics",
    href: "/category/electronics",
    color: "bg-gray-100",
    count: products.filter((p) => p.category === "electronics").length,
  },
  {
    name: "Studio",
    image: "https://via.placeholder.com/200x200/4F46E5/FFFFFF?text=Studio",
    href: "/category/studio",
    color: "bg-indigo-100",
    count: products.filter((p) => p.category === "studio").length,
  },
]

export default function CategoryGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Shop by Category</h2>
          <Link href="/collections">
            <button className="text-pink-500 hover:text-pink-600 font-medium">View All Collections →</button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-4 text-center">
                  <div
                    className={`${category.color} rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden`}
                  >
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{category.name}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}+ items
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
