import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-lg font-black text-white">SZ</span>
              </div>
              <div>
                <h3 className="text-2xl font-black">SHOPZILLA</h3>
                <p className="text-sm text-gray-400 font-semibold">Big, bold, and unstoppable.</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate shopping destination for fashion, electronics, home essentials, and more. Experience the
              bold difference with Shopzilla.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/collections" className="text-gray-400 hover:text-white transition-colors">
                  All Collections
                </Link>
              </li>
              <li>
                <Link href="/category/men" className="text-gray-400 hover:text-white transition-colors">
                  Men's Fashion
                </Link>
              </li>
              <li>
                <Link href="/category/women" className="text-gray-400 hover:text-white transition-colors">
                  Women's Fashion
                </Link>
              </li>
              <li>
                <Link href="/category/kids" className="text-gray-400 hover:text-white transition-colors">
                  Kids Wear
                </Link>
              </li>
              <li>
                <Link href="/category/home-living" className="text-gray-400 hover:text-white transition-colors">
                  Home & Living
                </Link>
              </li>
              <li>
                <Link href="/category/beauty" className="text-gray-400 hover:text-white transition-colors">
                  Beauty
                </Link>
              </li>
              <li>
                <Link href="/category/studio" className="text-gray-400 hover:text-white transition-colors">
                  Studio Equipment
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-400 hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-400 hover:text-white transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-r-none border-gray-600 bg-gray-800 text-white"
                />
                <Button className="rounded-l-none bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="h-4 w-4" />
                <span>support@shopzilla.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4" />
                <span>123 Shopping St, Commerce City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Shopzilla. All rights reserved. Big, bold, and unstoppable.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
