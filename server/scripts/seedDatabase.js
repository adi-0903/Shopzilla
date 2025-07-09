const mongoose = require("mongoose")
const Product = require("../models/Product")
const User = require("../models/User")
require("dotenv").config()

// Sample products data
const sampleProducts = [
  {
    name: "Men's Cotton T-Shirt",
    description:
      "Comfortable cotton t-shirt perfect for casual wear. Made from 100% premium cotton with a relaxed fit.",
    price: 599,
    originalPrice: 799,
    discount: 25,
    brand: "StyleCraft",
    category: "men",
    subcategory: "t-shirts",
    images: [{ url: "https://via.placeholder.com/400x400/059669/FFFFFF?text=Cotton+Tee" }],
    colors: ["Black", "White", "Blue", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 50,
    inStock: true,
    rating: 4.2,
    numReviews: 125,
    features: ["100% Cotton", "Machine Washable", "Comfortable Fit", "Breathable Fabric"],
    tags: ["casual", "cotton", "comfortable", "everyday"],
  },
  {
    name: "Women's Summer Dress",
    description: "Elegant summer dress perfect for any occasion. Lightweight fabric with beautiful floral patterns.",
    price: 1299,
    originalPrice: 1799,
    discount: 28,
    brand: "FashionForward",
    category: "women",
    subcategory: "dresses",
    images: [{ url: "https://via.placeholder.com/400x400/EC4899/FFFFFF?text=Summer+Dress" }],
    colors: ["Red", "Blue", "Yellow", "Green"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 30,
    inStock: true,
    rating: 4.5,
    numReviews: 89,
    features: ["Breathable Fabric", "Elegant Design", "Perfect Fit", "Easy Care"],
    tags: ["summer", "elegant", "dress", "floral"],
  },
  {
    name: "Kids Play Set",
    description: "Fun and educational play set for children. Safe, non-toxic materials with bright colors.",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    brand: "KidZone",
    category: "kids",
    subcategory: "toys",
    images: [{ url: "https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=Play+Set" }],
    colors: ["Multicolor"],
    sizes: ["One Size"],
    stock: 25,
    inStock: true,
    rating: 4.7,
    numReviews: 156,
    features: ["Safe Materials", "Educational", "Age Appropriate", "Durable"],
    tags: ["kids", "educational", "safe", "toys"],
  },
  {
    name: "Home Decor Vase",
    description: "Beautiful decorative vase for your home. Made from premium ceramic with elegant finish.",
    price: 1599,
    originalPrice: 2199,
    discount: 27,
    brand: "HomeDecor",
    category: "home-living",
    subcategory: "decor",
    images: [{ url: "https://via.placeholder.com/400x400/7C3AED/FFFFFF?text=Decorative+Vase" }],
    colors: ["White", "Blue", "Green", "Gold"],
    sizes: ["Small", "Medium", "Large"],
    stock: 15,
    inStock: true,
    rating: 4.3,
    numReviews: 67,
    features: ["Premium Quality", "Elegant Design", "Durable", "Easy to Clean"],
    tags: ["home", "decor", "elegant", "ceramic"],
  },
  {
    name: "Beauty Face Cream",
    description: "Nourishing face cream for all skin types. Enriched with natural ingredients for healthy skin.",
    price: 799,
    originalPrice: 999,
    discount: 20,
    brand: "GlowBeauty",
    category: "beauty",
    subcategory: "skincare",
    images: [{ url: "https://via.placeholder.com/400x400/EC4899/FFFFFF?text=Face+Cream" }],
    colors: ["Natural"],
    sizes: ["50ml", "100ml"],
    stock: 40,
    inStock: true,
    rating: 4.4,
    numReviews: 203,
    features: ["All Skin Types", "Natural Ingredients", "Moisturizing", "Anti-Aging"],
    tags: ["beauty", "skincare", "natural", "moisturizer"],
  },
]

// Sample admin user
const adminUser = {
  name: "Admin User",
  email: "admin@myntraclone.com",
  password: "admin123",
  role: "admin",
  isVerified: true,
}

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/myntra-clone")
    console.log("✅ Connected to MongoDB")

    // Clear existing data
    await Product.deleteMany({})
    await User.deleteMany({})
    console.log("🗑️ Cleared existing data")

    // Create admin user
    const admin = await User.create(adminUser)
    console.log("👤 Admin user created")

    // Insert sample products
    const products = await Product.insertMany(
      sampleProducts.map((product) => ({
        ...product,
        createdBy: admin._id,
      })),
    )
    console.log(`📦 ${products.length} sample products inserted`)

    console.log("🎉 Database seeded successfully!")
    console.log("📧 Admin Email: admin@myntraclone.com")
    console.log("🔑 Admin Password: admin123")

    process.exit(0)
  } catch (error) {
    console.error("❌ Error seeding database:", error)
    process.exit(1)
  }
}

seedDatabase()
