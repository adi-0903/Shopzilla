"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface WishlistItem {
  id: number
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  discount?: number
}

interface WishlistContextType {
  items: WishlistItem[]
  addToWishlist: (product: any) => void
  removeFromWishlist: (id: number) => void
  isInWishlist: (id: number) => boolean
  clearWishlist: () => void
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([])

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist")
    if (storedWishlist) {
      setItems(JSON.parse(storedWishlist))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(items))
  }, [items])

  const addToWishlist = (product: any) => {
    setItems((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        return prev
      }
      return [...prev, product]
    })
  }

  const removeFromWishlist = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const isInWishlist = (id: number) => {
    return items.some((item) => item.id === id)
  }

  const clearWishlist = () => {
    setItems([])
  }

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
