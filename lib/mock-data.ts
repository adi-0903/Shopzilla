export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  brand: string
  category: string
  description: string
  colors?: string[]
  sizes?: string[]
  inStock: boolean
  discount?: number
}

// Generate comprehensive product data with working images
const generateProducts = (): Product[] => {
  const products: Product[] = []

  // Men's Fashion Products (300+)
  const menCategories = [
    {
      type: "Shirts",
      brands: ["Arrow", "Van Heusen", "Peter England", "Allen Solly", "Louis Philippe"],
      priceRange: [800, 3500],
      images: [
        "https://via.placeholder.com/400x400/1E40AF/FFFFFF?text=Formal+Shirt",
        "https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=Casual+Shirt",
        "https://via.placeholder.com/400x400/1D4ED8/FFFFFF?text=Business+Shirt",
        "https://via.placeholder.com/400x400/2563EB/FFFFFF?text=Cotton+Shirt",
        "https://via.placeholder.com/400x400/1E3A8A/FFFFFF?text=Linen+Shirt",
      ],
    },
    {
      type: "T-Shirts",
      brands: ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"],
      priceRange: [500, 2500],
      images: [
        "https://via.placeholder.com/400x400/059669/FFFFFF?text=Cotton+Tee",
        "https://via.placeholder.com/400x400/10B981/FFFFFF?text=Sports+Tee",
        "https://via.placeholder.com/400x400/047857/FFFFFF?text=Graphic+Tee",
        "https://via.placeholder.com/400x400/065F46/FFFFFF?text=V-Neck+Tee",
        "https://via.placeholder.com/400x400/0D9488/FFFFFF?text=Polo+Tee",
      ],
    },
    {
      type: "Jeans",
      brands: ["Levi's", "Wrangler", "Lee", "Pepe Jeans", "Flying Machine"],
      priceRange: [1200, 5000],
      images: [
        "https://via.placeholder.com/400x400/1F2937/FFFFFF?text=Slim+Jeans",
        "https://via.placeholder.com/400x400/374151/FFFFFF?text=Regular+Jeans",
        "https://via.placeholder.com/400x400/111827/FFFFFF?text=Skinny+Jeans",
        "https://via.placeholder.com/400x400/4B5563/FFFFFF?text=Straight+Jeans",
        "https://via.placeholder.com/400x400/6B7280/FFFFFF?text=Bootcut+Jeans",
      ],
    },
    {
      type: "Formal Pants",
      brands: ["Raymond", "Park Avenue", "Blackberrys", "Louis Philippe"],
      priceRange: [1500, 4500],
      images: [
        "https://via.placeholder.com/400x400/7C2D12/FFFFFF?text=Formal+Pants",
        "https://via.placeholder.com/400x400/92400E/FFFFFF?text=Office+Pants",
        "https://via.placeholder.com/400x400/A16207/FFFFFF?text=Dress+Pants",
        "https://via.placeholder.com/400x400/B45309/FFFFFF?text=Chino+Pants",
        "https://via.placeholder.com/400x400/C2410C/FFFFFF?text=Trouser",
      ],
    },
    {
      type: "Shoes",
      brands: ["Nike", "Adidas", "Puma", "Woodland", "Red Chief"],
      priceRange: [2000, 12000],
      images: [
        "https://via.placeholder.com/400x400/7C3AED/FFFFFF?text=Casual+Shoes",
        "https://via.placeholder.com/400x400/8B5CF6/FFFFFF?text=Sports+Shoes",
        "https://via.placeholder.com/400x400/6D28D9/FFFFFF?text=Formal+Shoes",
        "https://via.placeholder.com/400x400/A855F7/FFFFFF?text=Sneakers",
        "https://via.placeholder.com/400x400/5B21B6/FFFFFF?text=Boots",
      ],
    },
    {
      type: "Watches",
      brands: ["Titan", "Fastrack", "Casio", "Fossil", "Daniel Klein"],
      priceRange: [1500, 15000],
      images: [
        "https://via.placeholder.com/400x400/DC2626/FFFFFF?text=Analog+Watch",
        "https://via.placeholder.com/400x400/EF4444/FFFFFF?text=Digital+Watch",
        "https://via.placeholder.com/400x400/B91C1C/FFFFFF?text=Smart+Watch",
        "https://via.placeholder.com/400x400/F87171/FFFFFF?text=Sports+Watch",
        "https://via.placeholder.com/400x400/991B1B/FFFFFF?text=Luxury+Watch",
      ],
    },
  ]

  menCategories.forEach((cat) => {
    for (let i = 0; i < 50; i++) {
      const brand = cat.brands[Math.floor(Math.random() * cat.brands.length)]
      const price = Math.floor(Math.random() * (cat.priceRange[1] - cat.priceRange[0])) + cat.priceRange[0]
      const discount = Math.random() > 0.7 ? Math.floor(Math.random() * 40) + 10 : 0
      const imageIndex = Math.floor(Math.random() * cat.images.length)

      products.push({
        id: `men-${cat.type.toLowerCase().replace(" ", "-")}-${i}`,
        name: `${brand} ${cat.type} ${i + 1}`,
        price: discount ? Math.floor(price * (1 - discount / 100)) : price,
        originalPrice: discount ? price : undefined,
        image: cat.images[imageIndex],
        rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
        reviews: Math.floor(Math.random() * 500) + 50,
        brand,
        category: "men",
        description: `Premium quality ${cat.type.toLowerCase()} from ${brand}. Perfect for modern men who value style and comfort.`,
        colors: ["Black", "White", "Blue", "Gray", "Navy"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        inStock: Math.random() > 0.1,
        discount,
      })
    }
  })

  // Women's Fashion Products (300+)
  const womenCategories = [
    {
      type: "Dresses",
      brands: ["Zara", "H&M", "Forever 21", "Vero Moda", "Only"],
      priceRange: [1200, 8000],
      images: [
        "https://via.placeholder.com/400x400/EC4899/FFFFFF?text=Summer+Dress",
        "https://via.placeholder.com/400x400/F472B6/FFFFFF?text=Maxi+Dress",
        "https://via.placeholder.com/400x400/DB2777/FFFFFF?text=Party+Dress",
        "https://via.placeholder.com/400x400/BE185D/FFFFFF?text=Casual+Dress",
        "https://via.placeholder.com/400x400/9D174D/FFFFFF?text=Evening+Dress",
      ],
    },
    {
      type: "Tops",
      brands: ["AND", "Global Desi", "W", "Biba", "Fabindia"],
      priceRange: [800, 3500],
      images: [
        "https://via.placeholder.com/400x400/A855F7/FFFFFF?text=Casual+Top",
        "https://via.placeholder.com/400x400/8B5CF6/FFFFFF?text=Formal+Top",
        "https://via.placeholder.com/400x400/7C3AED/FFFFFF?text=Crop+Top",
        "https://via.placeholder.com/400x400/6D28D9/FFFFFF?text=Blouse",
        "https://via.placeholder.com/400x400/5B21B6/FFFFFF?text=Tank+Top",
      ],
    },
    {
      type: "Ethnic Wear",
      brands: ["Biba", "W", "Aurelia", "Libas", "Soch"],
      priceRange: [1500, 12000],
      images: [
        "https://via.placeholder.com/400x400/DC2626/FFFFFF?text=Kurti",
        "https://via.placeholder.com/400x400/EF4444/FFFFFF?text=Saree",
        "https://via.placeholder.com/400x400/B91C1C/FFFFFF?text=Lehenga",
        "https://via.placeholder.com/400x400/F87171/FFFFFF?text=Salwar+Suit",
        "https://via.placeholder.com/400x400/991B1B/FFFFFF?text=Anarkali",
      ],
    },
    {
      type: "Jeans",
      brands: ["Levi's", "Wrangler", "Lee", "Pepe Jeans", "Only"],
      priceRange: [1500, 6000],
      images: [
        "https://via.placeholder.com/400x400/10B981/FFFFFF?text=Skinny+Jeans",
        "https://via.placeholder.com/400x400/059669/FFFFFF?text=High+Waist",
        "https://via.placeholder.com/400x400/047857/FFFFFF?text=Bootcut+Jeans",
        "https://via.placeholder.com/400x400/065F46/FFFFFF?text=Straight+Jeans",
        "https://via.placeholder.com/400x400/0D9488/FFFFFF?text=Mom+Jeans",
      ],
    },
    {
      type: "Footwear",
      brands: ["Bata", "Metro", "Inc.5", "Catwalk", "Mochi"],
      priceRange: [800, 8000],
      images: [
        "https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=Heels",
        "https://via.placeholder.com/400x400/D97706/FFFFFF?text=Flats",
        "https://via.placeholder.com/400x400/B45309/FFFFFF?text=Sandals",
        "https://via.placeholder.com/400x400/92400E/FFFFFF?text=Boots",
        "https://via.placeholder.com/400x400/A16207/FFFFFF?text=Sneakers",
      ],
    },
    {
      type: "Handbags",
      brands: ["Baggit", "Lavie", "Caprese", "Hidesign", "Da Milano"],
      priceRange: [1200, 15000],
      images: [
        "https://via.placeholder.com/400x400/06B6D4/FFFFFF?text=Handbag",
        "https://via.placeholder.com/400x400/0891B2/FFFFFF?text=Shoulder+Bag",
        "https://via.placeholder.com/400x400/0E7490/FFFFFF?text=Tote+Bag",
        "https://via.placeholder.com/400x400/155E75/FFFFFF?text=Clutch",
        "https://via.placeholder.com/400x400/164E63/FFFFFF?text=Sling+Bag",
      ],
    },
  ]

  womenCategories.forEach((cat) => {
    for (let i = 0; i < 50; i++) {
      const brand = cat.brands[Math.floor(Math.random() * cat.brands.length)]
      const price = Math.floor(Math.random() * (cat.priceRange[1] - cat.priceRange[0])) + cat.priceRange[0]
      const discount = Math.random() > 0.6 ? Math.floor(Math.random() * 50) + 10 : 0
      const imageIndex = Math.floor(Math.random() * cat.images.length)

      products.push({
        id: `women-${cat.type.toLowerCase().replace(" ", "-")}-${i}`,
        name: `${brand} ${cat.type} ${i + 1}`,
        price: discount ? Math.floor(price * (1 - discount / 100)) : price,
        originalPrice: discount ? price : undefined,
        image: cat.images[imageIndex],
        rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
        reviews: Math.floor(Math.random() * 800) + 100,
        brand,
        category: "women",
        description: `Stylish ${cat.type.toLowerCase()} from ${brand}. Designed for the modern woman who loves fashion.`,
        colors: ["Black", "White", "Red", "Pink", "Blue", "Green"],
        sizes: ["XS", "S", "M", "L", "XL"],
        inStock: Math.random() > 0.05,
        discount,
      })
    }
  })

  // Kids Wear Products (300+)
  const kidsCategories = [
    {
      type: "Boys Clothing",
      brands: ["Mothercare", "FirstCry", "Hopscotch", "Gini & Jony", "United Colors of Benetton"],
      priceRange: [300, 2000],
      images: [
        "https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=Boys+Shirt",
        "https://via.placeholder.com/400x400/1E40AF/FFFFFF?text=Boys+Tee",
        "https://via.placeholder.com/400x400/1D4ED8/FFFFFF?text=Boys+Pants",
        "https://via.placeholder.com/400x400/2563EB/FFFFFF?text=Boys+Shorts",
        "https://via.placeholder.com/400x400/1E3A8A/FFFFFF?text=Boys+Jacket",
      ],
    },
    {
      type: "Girls Clothing",
      brands: ["Mothercare", "FirstCry", "Hopscotch", "Gini & Jony", "Nauti Nati"],
      priceRange: [300, 2500],
      images: [
        "https://via.placeholder.com/400x400/F472B6/FFFFFF?text=Girls+Dress",
        "https://via.placeholder.com/400x400/EC4899/FFFFFF?text=Girls+Top",
        "https://via.placeholder.com/400x400/DB2777/FFFFFF?text=Girls+Skirt",
        "https://via.placeholder.com/400x400/BE185D/FFFFFF?text=Girls+Pants",
        "https://via.placeholder.com/400x400/9D174D/FFFFFF?text=Girls+Jacket",
      ],
    },
    {
      type: "Baby Clothing",
      brands: ["Carter's", "Gerber", "Chicco", "Mothercare", "FirstCry"],
      priceRange: [200, 1500],
      images: [
        "https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=Baby+Romper",
        "https://via.placeholder.com/400x400/D97706/FFFFFF?text=Baby+Onesie",
        "https://via.placeholder.com/400x400/B45309/FFFFFF?text=Baby+Dress",
        "https://via.placeholder.com/400x400/92400E/FFFFFF?text=Baby+Set",
        "https://via.placeholder.com/400x400/A16207/FFFFFF?text=Baby+Sleepwear",
      ],
    },
    {
      type: "Kids Footwear",
      brands: ["Bata Kids", "Liberty", "Action", "Khadim's", "Metro"],
      priceRange: [400, 2500],
      images: [
        "https://via.placeholder.com/400x400/10B981/FFFFFF?text=Kids+Shoes",
        "https://via.placeholder.com/400x400/059669/FFFFFF?text=School+Shoes",
        "https://via.placeholder.com/400x400/047857/FFFFFF?text=Sports+Shoes",
        "https://via.placeholder.com/400x400/065F46/FFFFFF?text=Sandals",
        "https://via.placeholder.com/400x400/0D9488/FFFFFF?text=Sneakers",
      ],
    },
    {
      type: "School Supplies",
      brands: ["Classmate", "Camlin", "Faber-Castell", "Apsara", "Reynolds"],
      priceRange: [100, 800],
      images: [
        "https://via.placeholder.com/400x400/7C3AED/FFFFFF?text=School+Bag",
        "https://via.placeholder.com/400x400/8B5CF6/FFFFFF?text=Notebook",
        "https://via.placeholder.com/400x400/6D28D9/FFFFFF?text=Pencil+Box",
        "https://via.placeholder.com/400x400/A855F7/FFFFFF?text=Water+Bottle",
        "https://via.placeholder.com/400x400/5B21B6/FFFFFF?text=Lunch+Box",
      ],
    },
    {
      type: "Toys",
      brands: ["Fisher-Price", "Mattel", "Hasbro", "Lego", "Funskool"],
      priceRange: [200, 5000],
      images: [
        "https://via.placeholder.com/400x400/DC2626/FFFFFF?text=Action+Figure",
        "https://via.placeholder.com/400x400/EF4444/FFFFFF?text=Doll",
        "https://via.placeholder.com/400x400/B91C1C/FFFFFF?text=Building+Blocks",
        "https://via.placeholder.com/400x400/F87171/FFFFFF?text=Board+Game",
        "https://via.placeholder.com/400x400/991B1B/FFFFFF?text=Puzzle",
      ],
    },
  ]

  kidsCategories.forEach((cat) => {
    for (let i = 0; i < 50; i++) {
      const brand = cat.brands[Math.floor(Math.random() * cat.brands.length)]
      const price = Math.floor(Math.random() * (cat.priceRange[1] - cat.priceRange[0])) + cat.priceRange[0]
      const discount = Math.random() > 0.8 ? Math.floor(Math.random() * 30) + 5 : 0
      const imageIndex = Math.floor(Math.random() * cat.images.length)

      products.push({
        id: `kids-${cat.type.toLowerCase().replace(" ", "-")}-${i}`,
        name: `${brand} ${cat.type} ${i + 1}`,
        price: discount ? Math.floor(price * (1 - discount / 100)) : price,
        originalPrice: discount ? price : undefined,
        image: cat.images[imageIndex],
        rating: Math.round((Math.random() * 1.5 + 3.5) * 10) / 10,
        reviews: Math.floor(Math.random() * 300) + 25,
        brand,
        category: "kids",
        description: `Quality ${cat.type.toLowerCase()} from ${brand}. Safe and comfortable for children.`,
        colors: ["Red", "Blue", "Pink", "Yellow", "Green", "Purple"],
        sizes: ["0-3M", "3-6M", "6-12M", "1-2Y", "2-3Y", "3-4Y", "4-5Y"],
        inStock: Math.random() > 0.05,
        discount,
      })
    }
  })

  // Home & Living Products (500+ products)
  const homeCategories = [
    {
      type: "Living Room Furniture",
      brands: ["IKEA", "Godrej Interio", "Durian", "Urban Ladder", "Pepperfry"],
      priceRange: [5000, 80000],
      images: [
        "https://via.placeholder.com/400x400/92400E/FFFFFF?text=Sofa+Set",
        "https://via.placeholder.com/400x400/A16207/FFFFFF?text=Recliner",
        "https://via.placeholder.com/400x400/B45309/FFFFFF?text=Coffee+Table",
        "https://via.placeholder.com/400x400/C2410C/FFFFFF?text=TV+Unit",
        "https://via.placeholder.com/400x400/D97706/FFFFFF?text=Bookshelf",
      ],
    },
    {
      type: "Bedroom Furniture",
      brands: ["Godrej Interio", "Durian", "Urban Ladder", "Pepperfry", "HomeTown"],
      priceRange: [8000, 120000],
      images: [
        "https://via.placeholder.com/400x400/7C2D12/FFFFFF?text=King+Bed",
        "https://via.placeholder.com/400x400/92400E/FFFFFF?text=Queen+Bed",
        "https://via.placeholder.com/400x400/A16207/FFFFFF?text=Wardrobe",
        "https://via.placeholder.com/400x400/B45309/FFFFFF?text=Dresser",
        "https://via.placeholder.com/400x400/C2410C/FFFFFF?text=Nightstand",
      ],
    },
    {
      type: "Dining Room",
      brands: ["IKEA", "Urban Ladder", "Pepperfry", "HomeTown", "Durian"],
      priceRange: [6000, 60000],
      images: [
        "https://via.placeholder.com/400x400/059669/FFFFFF?text=Dining+Table",
        "https://via.placeholder.com/400x400/10B981/FFFFFF?text=Dining+Chairs",
        "https://via.placeholder.com/400x400/047857/FFFFFF?text=Bar+Stools",
        "https://via.placeholder.com/400x400/065F46/FFFFFF?text=Buffet+Table",
        "https://via.placeholder.com/400x400/0D9488/FFFFFF?text=China+Cabinet",
      ],
    },
    {
      type: "Kitchen Appliances",
      brands: ["Philips", "Prestige", "Hawkins", "Pigeon", "Butterfly"],
      priceRange: [500, 25000],
      images: [
        "https://via.placeholder.com/400x400/1E40AF/FFFFFF?text=Mixer+Grinder",
        "https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=Pressure+Cooker",
        "https://via.placeholder.com/400x400/1D4ED8/FFFFFF?text=Microwave",
        "https://via.placeholder.com/400x400/2563EB/FFFFFF?text=Blender",
        "https://via.placeholder.com/400x400/1E3A8A/FFFFFF?text=Toaster",
      ],
    },
    {
      type: "Kitchen Storage",
      brands: ["Milton", "Lock&Lock", "Tupperware", "Borosil", "Signoraware"],
      priceRange: [200, 5000],
      images: [
        "https://via.placeholder.com/400x400/DC2626/FFFFFF?text=Storage+Containers",
        "https://via.placeholder.com/400x400/EF4444/FFFFFF?text=Spice+Rack",
        "https://via.placeholder.com/400x400/B91C1C/FFFFFF?text=Kitchen+Jars",
        "https://via.placeholder.com/400x400/F87171/FFFFFF?text=Lunch+Boxes",
        "https://via.placeholder.com/400x400/991B1B/FFFFFF?text=Water+Bottles",
      ],
    },
    {
      type: "Home Decor",
      brands: ["Saaj", "Chumbak", "ExclusiveLane", "The Wishing Chair", "Craftsvilla"],
      priceRange: [300, 15000],
      images: [
        "https://via.placeholder.com/400x400/7C3AED/FFFFFF?text=Wall+Art",
        "https://via.placeholder.com/400x400/8B5CF6/FFFFFF?text=Decorative+Vase",
        "https://via.placeholder.com/400x400/6D28D9/FFFFFF?text=Wall+Mirror",
        "https://via.placeholder.com/400x400/A855F7/FFFFFF?text=Photo+Frames",
        "https://via.placeholder.com/400x400/5B21B6/FFFFFF?text=Candles",
      ],
    },
    {
      type: "Bedding & Bath",
      brands: ["Bombay Dyeing", "Welspun", "Trident", "Raymond Home", "Portico"],
      priceRange: [800, 8000],
      images: [
        "https://via.placeholder.com/400x400/EC4899/FFFFFF?text=Bedsheet+Set",
        "https://via.placeholder.com/400x400/F472B6/FFFFFF?text=Comforter",
        "https://via.placeholder.com/400x400/DB2777/FFFFFF?text=Pillows",
        "https://via.placeholder.com/400x400/BE185D/FFFFFF?text=Towel+Set",
        "https://via.placeholder.com/400x400/9D174D/FFFFFF?text=Bath+Mat",
      ],
    },
    {
      type: "Storage Solutions",
      brands: ["Nilkamal", "Supreme", "Cello", "IKEA", "HomeTown"],
      priceRange: [200, 8000],
      images: [
        "https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=Storage+Boxes",
        "https://via.placeholder.com/400x400/D97706/FFFFFF?text=Organizers",
        "https://via.placeholder.com/400x400/B45309/FFFFFF?text=Laundry+Basket",
        "https://via.placeholder.com/400x400/92400E/FFFFFF?text=Shoe+Rack",
        "https://via.placeholder.com/400x400/A16207/FFFFFF?text=Closet+Organizer",
      ],
    },
    {
      type: "Lighting",
      brands: ["Philips", "Havells", "Syska", "Crompton", "Orient"],
      priceRange: [300, 12000],
      images: [
        "https://via.placeholder.com/400x400/06B6D4/FFFFFF?text=Ceiling+Lights",
        "https://via.placeholder.com/400x400/0891B2/FFFFFF?text=Table+Lamps",
        "https://via.placeholder.com/400x400/0E7490/FFFFFF?text=Floor+Lamps",
        "https://via.placeholder.com/400x400/155E75/FFFFFF?text=Wall+Lights",
        "https://via.placeholder.com/400x400/164E63/FFFFFF?text=LED+Bulbs",
      ],
    },
    {
      type: "Garden & Outdoor",
      brands: ["Ugaoo", "Nurserylive", "Green Paradise", "Garden Decor", "Outdoor Living"],
      priceRange: [500, 15000],
      images: [
        "https://via.placeholder.com/400x400/10B981/FFFFFF?text=Plant+Pots",
        "https://via.placeholder.com/400x400/059669/FFFFFF?text=Garden+Tools",
        "https://via.placeholder.com/400x400/047857/FFFFFF?text=Outdoor+Chairs",
        "https://via.placeholder.com/400x400/065F46/FFFFFF?text=Garden+Decor",
        "https://via.placeholder.com/400x400/0D9488/FFFFFF?text=Planters",
      ],
    },
    {
      type: "Cleaning & Laundry",
      brands: ["Scotch-Brite", "Gala", "Surf Excel", "Ariel", "Tide"],
      priceRange: [100, 3000],
      images: [
        "https://via.placeholder.com/400x400/4F46E5/FFFFFF?text=Cleaning+Supplies",
        "https://via.placeholder.com/400x400/6366F1/FFFFFF?text=Laundry+Detergent",
        "https://via.placeholder.com/400x400/4338CA/FFFFFF?text=Vacuum+Cleaner",
        "https://via.placeholder.com/400x400/3730A3/FFFFFF?text=Mops+Brooms",
        "https://via.placeholder.com/400x400/312E81/FFFFFF?text=Air+Fresheners",
      ],
    },
    {
      type: "Smart Home",
      brands: ["Amazon", "Google", "Philips Hue", "TP-Link", "Xiaomi"],
      priceRange: [1000, 25000],
      images: [
        "https://via.placeholder.com/400x400/1F2937/FFFFFF?text=Smart+Speaker",
        "https://via.placeholder.com/400x400/374151/FFFFFF?text=Smart+Lights",
        "https://via.placeholder.com/400x400/111827/FFFFFF?text=Security+Camera",
        "https://via.placeholder.com/400x400/4B5563/FFFFFF?text=Smart+Doorbell",
        "https://via.placeholder.com/400x400/6B7280/FFFFFF?text=Smart+Plugs",
      ],
    },
  ]

  // Change the loop to generate 50 products per category instead of 50 total
  homeCategories.forEach((cat) => {
    for (let i = 0; i < 50; i++) {
      const brand = cat.brands[Math.floor(Math.random() * cat.brands.length)]
      const price = Math.floor(Math.random() * (cat.priceRange[1] - cat.priceRange[0])) + cat.priceRange[0]
      const discount = Math.random() > 0.7 ? Math.floor(Math.random() * 35) + 10 : 0
      const imageIndex = Math.floor(Math.random() * cat.images.length)

      products.push({
        id: `home-${cat.type.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${i}`,
        name: `${brand} ${cat.type} ${i + 1}`,
        price: discount ? Math.floor(price * (1 - discount / 100)) : price,
        originalPrice: discount ? price : undefined,
        image: cat.images[imageIndex],
        rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
        reviews: Math.floor(Math.random() * 400) + 30,
        brand,
        category: "home",
        description: `Premium ${cat.type.toLowerCase()} from ${brand}. Transform your home with quality products.`,
        colors: ["White", "Black", "Brown", "Beige", "Gray"],
        sizes: ["S", "M", "L", "XL"],
        inStock: Math.random() > 0.1,
        discount,
      })
    }
  })

  // Beauty Products (300+)
  const beautyCategories = [
    {
      type: "Skincare",
      brands: ["Lakme", "L'Oreal", "Olay", "Neutrogena", "The Body Shop"],
      priceRange: [200, 5000],
      images: [
        "https://via.placeholder.com/400x400/EC4899/FFFFFF?text=Face+Cream",
        "https://via.placeholder.com/400x400/F472B6/FFFFFF?text=Face+Wash",
        "https://via.placeholder.com/400x400/DB2777/FFFFFF?text=Moisturizer",
        "https://via.placeholder.com/400x400/BE185D/FFFFFF?text=Serum",
        "https://via.placeholder.com/400x400/9D174D/FFFFFF?text=Sunscreen",
      ],
    },
    {
      type: "Makeup",
      brands: ["Maybelline", "Revlon", "MAC", "Nykaa", "Sugar Cosmetics"],
      priceRange: [300, 8000],
      images: [
        "https://via.placeholder.com/400x400/A855F7/FFFFFF?text=Foundation",
        "https://via.placeholder.com/400x400/8B5CF6/FFFFFF?text=Lipstick",
        "https://via.placeholder.com/400x400/7C3AED/FFFFFF?text=Mascara",
        "https://via.placeholder.com/400x400/6D28D9/FFFFFF?text=Eyeshadow",
        "https://via.placeholder.com/400x400/5B21B6/FFFFFF?text=Blush",
      ],
    },
    {
      type: "Hair Care",
      brands: ["L'Oreal", "Pantene", "Head & Shoulders", "Tresemme", "Matrix"],
      priceRange: [150, 3000],
      images: [
        "https://via.placeholder.com/400x400/10B981/FFFFFF?text=Shampoo",
        "https://via.placeholder.com/400x400/059669/FFFFFF?text=Conditioner",
        "https://via.placeholder.com/400x400/047857/FFFFFF?text=Hair+Oil",
        "https://via.placeholder.com/400x400/065F46/FFFFFF?text=Hair+Serum",
        "https://via.placeholder.com/400x400/0D9488/FFFFFF?text=Hair+Mask",
      ],
    },
    {
      type: "Fragrances",
      brands: ["Fogg", "Wild Stone", "Axe", "Engage", "Park Avenue"],
      priceRange: [200, 4000],
      images: [
        "https://via.placeholder.com/400x400/DC2626/FFFFFF?text=Perfume",
        "https://via.placeholder.com/400x400/EF4444/FFFFFF?text=Body+Spray",
        "https://via.placeholder.com/400x400/B91C1C/FFFFFF?text=Deodorant",
        "https://via.placeholder.com/400x400/F87171/FFFFFF?text=Cologne",
        "https://via.placeholder.com/400x400/991B1B/FFFFFF?text=Mist",
      ],
    },
    {
      type: "Personal Care",
      brands: ["Nivea", "Vaseline", "Johnson's", "Dove", "Ponds"],
      priceRange: [100, 2000],
      images: [
        "https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=Body+Lotion",
        "https://via.placeholder.com/400x400/D97706/FFFFFF?text=Hand+Cream",
        "https://via.placeholder.com/400x400/B45309/FFFFFF?text=Lip+Balm",
        "https://via.placeholder.com/400x400/92400E/FFFFFF?text=Body+Wash",
        "https://via.placeholder.com/400x400/A16207/FFFFFF?text=Soap",
      ],
    },
    {
      type: "Men's Grooming",
      brands: ["Gillette", "Old Spice", "The Man Company", "Beardo", "Ustraa"],
      priceRange: [200, 3500],
      images: [
        "https://via.placeholder.com/400x400/1F2937/FFFFFF?text=Razor",
        "https://via.placeholder.com/400x400/374151/FFFFFF?text=Shaving+Cream",
        "https://via.placeholder.com/400x400/111827/FFFFFF?text=Beard+Oil",
        "https://via.placeholder.com/400x400/4B5563/FFFFFF?text=Aftershave",
        "https://via.placeholder.com/400x400/6B7280/FFFFFF?text=Face+Wash",
      ],
    },
  ]

  beautyCategories.forEach((cat) => {
    for (let i = 0; i < 50; i++) {
      const brand = cat.brands[Math.floor(Math.random() * cat.brands.length)]
      const price = Math.floor(Math.random() * (cat.priceRange[1] - cat.priceRange[0])) + cat.priceRange[0]
      const discount = Math.random() > 0.6 ? Math.floor(Math.random() * 40) + 15 : 0
      const imageIndex = Math.floor(Math.random() * cat.images.length)

      products.push({
        id: `beauty-${cat.type.toLowerCase().replace(" ", "-")}-${i}`,
        name: `${brand} ${cat.type} ${i + 1}`,
        price: discount ? Math.floor(price * (1 - discount / 100)) : price,
        originalPrice: discount ? price : undefined,
        image: cat.images[imageIndex],
        rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
        reviews: Math.floor(Math.random() * 600) + 50,
        brand,
        category: "beauty",
        description: `Premium ${cat.type.toLowerCase()} from ${brand}. Enhance your beauty routine with quality products.`,
        colors: ["Natural", "Fair", "Medium", "Dark", "Universal"],
        sizes: ["S", "M", "L", "XL"],
        inStock: Math.random() > 0.05,
        discount,
      })
    }
  })

  // Electronics Products (300+)
  const electronicsCategories = [
    {
      type: "Smartphones",
      brands: ["Samsung", "Apple", "OnePlus", "Xiaomi", "Realme"],
      priceRange: [8000, 150000],
      images: [
        "https://via.placeholder.com/400x400/1F2937/FFFFFF?text=Smartphone",
        "https://via.placeholder.com/400x400/374151/FFFFFF?text=iPhone",
        "https://via.placeholder.com/400x400/111827/FFFFFF?text=Android+Phone",
        "https://via.placeholder.com/400x400/4B5563/FFFFFF?text=5G+Phone",
        "https://via.placeholder.com/400x400/6B7280/FFFFFF?text=Gaming+Phone",
      ],
    },
    {
      type: "Laptops",
      brands: ["Dell", "HP", "Lenovo", "Asus", "Acer"],
      priceRange: [25000, 200000],
      images: [
        "https://via.placeholder.com/400x400/059669/FFFFFF?text=Laptop",
        "https://via.placeholder.com/400x400/10B981/FFFFFF?text=Gaming+Laptop",
        "https://via.placeholder.com/400x400/047857/FFFFFF?text=Business+Laptop",
        "https://via.placeholder.com/400x400/065F46/FFFFFF?text=Ultrabook",
        "https://via.placeholder.com/400x400/0D9488/FFFFFF?text=2-in-1+Laptop",
      ],
    },
    {
      type: "Headphones",
      brands: ["Sony", "JBL", "Boat", "Sennheiser", "Audio-Technica"],
      priceRange: [500, 25000],
      images: [
        "https://via.placeholder.com/400x400/7C3AED/FFFFFF?text=Headphones",
        "https://via.placeholder.com/400x400/8B5CF6/FFFFFF?text=Wireless+Headphones",
        "https://via.placeholder.com/400x400/6D28D9/FFFFFF?text=Gaming+Headset",
        "https://via.placeholder.com/400x400/A855F7/FFFFFF?text=Earbuds",
        "https://via.placeholder.com/400x400/5B21B6/FFFFFF?text=Studio+Headphones",
      ],
    },
    {
      type: "Smart Watches",
      brands: ["Apple", "Samsung", "Fitbit", "Amazfit", "Noise"],
      priceRange: [2000, 50000],
      images: [
        "https://via.placeholder.com/400x400/DC2626/FFFFFF?text=Smart+Watch",
        "https://via.placeholder.com/400x400/EF4444/FFFFFF?text=Fitness+Tracker",
        "https://via.placeholder.com/400x400/B91C1C/FFFFFF?text=Apple+Watch",
        "https://via.placeholder.com/400x400/F87171/FFFFFF?text=Sports+Watch",
        "https://via.placeholder.com/400x400/991B1B/FFFFFF?text=Health+Monitor",
      ],
    },
    {
      type: "Tablets",
      brands: ["Apple", "Samsung", "Lenovo", "Huawei", "Amazon"],
      priceRange: [8000, 80000],
      images: [
        "https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=Tablet",
        "https://via.placeholder.com/400x400/D97706/FFFFFF?text=iPad",
        "https://via.placeholder.com/400x400/B45309/FFFFFF?text=Android+Tablet",
        "https://via.placeholder.com/400x400/92400E/FFFFFF?text=2-in-1+Tablet",
        "https://via.placeholder.com/400x400/A16207/FFFFFF?text=Kids+Tablet",
      ],
    },
    {
      type: "Accessories",
      brands: ["Belkin", "Anker", "Portronics", "Zebronics", "Ambrane"],
      priceRange: [200, 8000],
      images: [
        "https://via.placeholder.com/400x400/06B6D4/FFFFFF?text=Phone+Case",
        "https://via.placeholder.com/400x400/0891B2/FFFFFF?text=Charger",
        "https://via.placeholder.com/400x400/0E7490/FFFFFF?text=Power+Bank",
        "https://via.placeholder.com/400x400/155E75/FFFFFF?text=Cable",
        "https://via.placeholder.com/400x400/164E63/FFFFFF?text=Stand",
      ],
    },
  ]

  electronicsCategories.forEach((cat) => {
    for (let i = 0; i < 50; i++) {
      const brand = cat.brands[Math.floor(Math.random() * cat.brands.length)]
      const price = Math.floor(Math.random() * (cat.priceRange[1] - cat.priceRange[0])) + cat.priceRange[0]
      const discount = Math.random() > 0.8 ? Math.floor(Math.random() * 25) + 5 : 0
      const imageIndex = Math.floor(Math.random() * cat.images.length)

      products.push({
        id: `electronics-${cat.type.toLowerCase().replace(" ", "-")}-${i}`,
        name: `${brand} ${cat.type} ${i + 1}`,
        price: discount ? Math.floor(price * (1 - discount / 100)) : price,
        originalPrice: discount ? price : undefined,
        image: cat.images[imageIndex],
        rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
        reviews: Math.floor(Math.random() * 1000) + 100,
        brand,
        category: "electronics",
        description: `Latest ${cat.type.toLowerCase()} from ${brand}. Experience cutting-edge technology.`,
        colors: ["Black", "White", "Silver", "Gold", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        inStock: Math.random() > 0.15,
        discount,
      })
    }
  })

  // Studio Equipment Products (300+)
  const studioCategories = [
    {
      type: "Cameras",
      brands: ["Canon", "Nikon", "Sony", "Fujifilm", "Panasonic"],
      priceRange: [15000, 200000],
      images: [
        "https://via.placeholder.com/400x400/4F46E5/FFFFFF?text=DSLR+Camera",
        "https://via.placeholder.com/400x400/6366F1/FFFFFF?text=Mirrorless+Camera",
        "https://via.placeholder.com/400x400/4338CA/FFFFFF?text=Action+Camera",
        "https://via.placeholder.com/400x400/3730A3/FFFFFF?text=Professional+Camera",
        "https://via.placeholder.com/400x400/312E81/FFFFFF?text=Video+Camera",
      ],
    },
    {
      type: "Lenses",
      brands: ["Canon", "Nikon", "Sony", "Sigma", "Tamron"],
      priceRange: [8000, 150000],
      images: [
        "https://via.placeholder.com/400x400/1E40AF/FFFFFF?text=Prime+Lens",
        "https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=Zoom+Lens",
        "https://via.placeholder.com/400x400/1D4ED8/FFFFFF?text=Macro+Lens",
        "https://via.placeholder.com/400x400/2563EB/FFFFFF?text=Wide+Angle",
        "https://via.placeholder.com/400x400/1E3A8A/FFFFFF?text=Telephoto+Lens",
      ],
    },
    {
      type: "Lighting Equipment",
      brands: ["Godox", "Profoto", "Elinchrom", "Broncolor", "Bowens"],
      priceRange: [2000, 80000],
      images: [
        "https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=Studio+Light",
        "https://via.placeholder.com/400x400/D97706/FFFFFF?text=LED+Panel",
        "https://via.placeholder.com/400x400/B45309/FFFFFF?text=Softbox",
        "https://via.placeholder.com/400x400/92400E/FFFFFF?text=Ring+Light",
        "https://via.placeholder.com/400x400/A16207/FFFFFF?text=Flash+Light",
      ],
    },
    {
      type: "Audio Equipment",
      brands: ["Shure", "Audio-Technica", "Rode", "Sennheiser", "AKG"],
      priceRange: [3000, 100000],
      images: [
        "https://via.placeholder.com/400x400/DC2626/FFFFFF?text=Microphone",
        "https://via.placeholder.com/400x400/EF4444/FFFFFF?text=Audio+Interface",
        "https://via.placeholder.com/400x400/B91C1C/FFFFFF?text=Studio+Monitor",
        "https://via.placeholder.com/400x400/F87171/FFFFFF?text=Mixer",
        "https://via.placeholder.com/400x400/991B1B/FFFFFF?text=Recorder",
      ],
    },
    {
      type: "Video Equipment",
      brands: ["Blackmagic", "RED", "Atomos", "Zoom", "Tascam"],
      priceRange: [5000, 200000],
      images: [
        "https://via.placeholder.com/400x400/10B981/FFFFFF?text=Video+Camera",
        "https://via.placeholder.com/400x400/059669/FFFFFF?text=Gimbal",
        "https://via.placeholder.com/400x400/047857/FFFFFF?text=Monitor",
        "https://via.placeholder.com/400x400/065F46/FFFFFF?text=Recorder",
        "https://via.placeholder.com/400x400/0D9488/FFFFFF?text=Slider",
      ],
    },
    {
      type: "Accessories",
      brands: ["Manfrotto", "Gitzo", "Peak Design", "Think Tank", "Lowepro"],
      priceRange: [500, 25000],
      images: [
        "https://via.placeholder.com/400x400/7C3AED/FFFFFF?text=Tripod",
        "https://via.placeholder.com/400x400/8B5CF6/FFFFFF?text=Camera+Bag",
        "https://via.placeholder.com/400x400/6D28D9/FFFFFF?text=Memory+Card",
        "https://via.placeholder.com/400x400/A855F7/FFFFFF?text=Battery",
        "https://via.placeholder.com/400x400/5B21B6/FFFFFF?text=Filter",
      ],
    },
  ]

  studioCategories.forEach((cat) => {
    for (let i = 0; i < 50; i++) {
      const brand = cat.brands[Math.floor(Math.random() * cat.brands.length)]
      const price = Math.floor(Math.random() * (cat.priceRange[1] - cat.priceRange[0])) + cat.priceRange[0]
      const discount = Math.random() > 0.9 ? Math.floor(Math.random() * 20) + 5 : 0
      const imageIndex = Math.floor(Math.random() * cat.images.length)

      products.push({
        id: `studio-${cat.type.toLowerCase().replace(" ", "-")}-${i}`,
        name: `${brand} ${cat.type} ${i + 1}`,
        price: discount ? Math.floor(price * (1 - discount / 100)) : price,
        originalPrice: discount ? price : undefined,
        image: cat.images[imageIndex],
        rating: Math.round((Math.random() * 1.5 + 3.5) * 10) / 10,
        reviews: Math.floor(Math.random() * 200) + 20,
        brand,
        category: "studio",
        description: `Professional ${cat.type.toLowerCase()} from ${brand}. Perfect for content creators and professionals.`,
        colors: ["Black", "Silver", "Gray"],
        sizes: ["S", "M", "L", "XL"],
        inStock: Math.random() > 0.2,
        discount,
      })
    }
  })

  return products
}

export const products = generateProducts()

// Export categories for easy access
export const categories = [
  { name: "Men's Fashion", slug: "men", count: products.filter((p) => p.category === "men").length },
  { name: "Women's Fashion", slug: "women", count: products.filter((p) => p.category === "women").length },
  { name: "Kids Wear", slug: "kids", count: products.filter((p) => p.category === "kids").length },
  { name: "Home & Living", slug: "home", count: products.filter((p) => p.category === "home").length },
  { name: "Beauty", slug: "beauty", count: products.filter((p) => p.category === "beauty").length },
  { name: "Electronics", slug: "electronics", count: products.filter((p) => p.category === "electronics").length },
  { name: "Studio", slug: "studio", count: products.filter((p) => p.category === "studio").length },
]
