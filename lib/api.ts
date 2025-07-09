const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

class ApiService {
  private getAuthHeaders() {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null
    return {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    }
  }

  // Auth endpoints
  async register(userData: { name: string; email: string; password: string }) {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(userData),
    })
    return response.json()
  }

  async login(credentials: { email: string; password: string }) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(credentials),
    })
    return response.json()
  }

  async getCurrentUser() {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: this.getAuthHeaders(),
    })
    return response.json()
  }

  async updateProfile(data: { name?: string; phone?: string; preferences?: any }) {
    const response = await fetch(`${API_BASE_URL}/auth/profile`, {
      method: "PUT",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data),
    })
    return response.json()
  }

  // Product endpoints
  async getProducts(params?: {
    category?: string
    brand?: string
    search?: string
    minPrice?: number
    maxPrice?: number
    page?: number
    limit?: number
    sort?: string
    order?: string
  }) {
    const queryParams = new URLSearchParams()
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          queryParams.append(key, value.toString())
        }
      })
    }

    const response = await fetch(`${API_BASE_URL}/products?${queryParams}`)
    return response.json()
  }

  async getProduct(id: string) {
    const response = await fetch(`${API_BASE_URL}/products/${id}`)
    return response.json()
  }

  async getProductsByCategory(category: string, params?: { page?: number; limit?: number }) {
    const queryParams = new URLSearchParams()
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) queryParams.append(key, value.toString())
      })
    }

    const response = await fetch(`${API_BASE_URL}/products/category/${category}?${queryParams}`)
    return response.json()
  }

  // Cart endpoints
  async getCart() {
    const response = await fetch(`${API_BASE_URL}/cart`, {
      headers: this.getAuthHeaders(),
    })
    return response.json()
  }

  async addToCart(data: {
    productId: string
    quantity: number
    size?: string
    color?: string
  }) {
    const response = await fetch(`${API_BASE_URL}/cart/add`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data),
    })
    return response.json()
  }

  async updateCartItem(itemId: string, quantity: number) {
    const response = await fetch(`${API_BASE_URL}/cart/update/${itemId}`, {
      method: "PUT",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ quantity }),
    })
    return response.json()
  }

  async removeFromCart(itemId: string) {
    const response = await fetch(`${API_BASE_URL}/cart/remove/${itemId}`, {
      method: "DELETE",
      headers: this.getAuthHeaders(),
    })
    return response.json()
  }

  async clearCart() {
    const response = await fetch(`${API_BASE_URL}/cart/clear`, {
      method: "DELETE",
      headers: this.getAuthHeaders(),
    })
    return response.json()
  }

  // Order endpoints
  async createOrder(orderData: {
    items: any[]
    shippingAddress: any
    paymentMethod: string
    itemsPrice: number
    taxPrice: number
    shippingPrice: number
    totalPrice: number
    couponCode?: string
  }) {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(orderData),
    })
    return response.json()
  }

  async getOrders(page = 1) {
    const response = await fetch(`${API_BASE_URL}/orders?page=${page}`, {
      headers: this.getAuthHeaders(),
    })
    return response.json()
  }

  async getOrder(id: string) {
    const response = await fetch(`${API_BASE_URL}/orders/${id}`, {
      headers: this.getAuthHeaders(),
    })
    return response.json()
  }

  async updateOrderPayment(id: string, paymentResult: any) {
    const response = await fetch(`${API_BASE_URL}/orders/${id}/pay`, {
      method: "PUT",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(paymentResult),
    })
    return response.json()
  }

  // Wishlist endpoints
  async getWishlist() {
    const response = await fetch(`${API_BASE_URL}/wishlist`, {
      headers: this.getAuthHeaders(),
    })
    return response.json()
  }

  async addToWishlist(productId: string) {
    const response = await fetch(`${API_BASE_URL}/wishlist/add`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ productId }),
    })
    return response.json()
  }

  async removeFromWishlist(productId: string) {
    const response = await fetch(`${API_BASE_URL}/wishlist/remove/${productId}`, {
      method: "DELETE",
      headers: this.getAuthHeaders(),
    })
    return response.json()
  }

  // Review endpoints
  async getProductReviews(productId: string, params?: { page?: number; limit?: number }) {
    const queryParams = new URLSearchParams()
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) queryParams.append(key, value.toString())
      })
    }

    const response = await fetch(`${API_BASE_URL}/reviews/product/${productId}?${queryParams}`)
    return response.json()
  }

  async createReview(data: {
    product: string
    rating: number
    title: string
    comment: string
  }) {
    const response = await fetch(`${API_BASE_URL}/reviews`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data),
    })
    return response.json()
  }

  async updateReview(
    id: string,
    data: {
      rating?: number
      title?: string
      comment?: string
    },
  ) {
    const response = await fetch(`${API_BASE_URL}/reviews/${id}`, {
      method: "PUT",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data),
    })
    return response.json()
  }

  async deleteReview(id: string) {
    const response = await fetch(`${API_BASE_URL}/reviews/${id}`, {
      method: "DELETE",
      headers: this.getAuthHeaders(),
    })
    return response.json()
  }

  // User endpoints
  async addAddress(addressData: {
    fullName: string
    phone: string
    address: string
    city: string
    state: string
    pincode: string
    type?: string
    isDefault?: boolean
  }) {
    const response = await fetch(`${API_BASE_URL}/users/address`, {
      method: "PUT",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(addressData),
    })
    return response.json()
  }

  async updateAddress(addressId: string, addressData: any) {
    const response = await fetch(`${API_BASE_URL}/users/address/${addressId}`, {
      method: "PUT",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(addressData),
    })
    return response.json()
  }

  async deleteAddress(addressId: string) {
    const response = await fetch(`${API_BASE_URL}/users/address/${addressId}`, {
      method: "DELETE",
      headers: this.getAuthHeaders(),
    })
    return response.json()
  }
}

export const apiService = new ApiService()
