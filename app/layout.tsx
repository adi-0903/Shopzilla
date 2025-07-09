import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/auth-context"
import { CartProvider } from "@/contexts/cart-context"
import { WishlistProvider } from "@/contexts/wishlist-context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shopzilla – Big, bold, and unstoppable.",
  description:
    "Discover amazing products at unbeatable prices. From fashion to electronics, home essentials to beauty products - find everything you need at Shopzilla. Big, bold, and unstoppable shopping experience.",
  keywords: "online shopping, fashion, electronics, home, beauty, kids wear, studio equipment, deals, discounts",
  authors: [{ name: "Shopzilla Team" }],
  creator: "Shopzilla",
  publisher: "Shopzilla",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shopzilla.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shopzilla – Big, bold, and unstoppable.",
    description:
      "Discover amazing products at unbeatable prices. Your one-stop destination for fashion, electronics, home essentials, and more.",
    url: "https://shopzilla.com",
    siteName: "Shopzilla",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shopzilla - Big, bold, and unstoppable",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopzilla – Big, bold, and unstoppable.",
    description:
      "Discover amazing products at unbeatable prices. Your one-stop destination for all your shopping needs.",
    images: ["/twitter-image.jpg"],
    creator: "@shopzilla",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              {children}
              <Toaster />
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
