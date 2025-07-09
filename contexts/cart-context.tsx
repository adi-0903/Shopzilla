"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface CartItem {
  id: number
  name: string
  brand: string
  price: number
  image: string
  quantity: number
  size?: string
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: any, size?: string) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setItems(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addToCart = (product: any, size?: string) => {
    setItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id && item.size === size)
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id && item.size === size ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          brand: product.brand,
          price: product.price,
          image: product.image,
          quantity: 1,
          size,
        },
      ]
    })
  }

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
