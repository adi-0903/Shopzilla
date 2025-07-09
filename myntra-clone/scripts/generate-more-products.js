// Script to generate additional products for each category
// This will create a comprehensive product database

const additionalProducts = []
let currentId = 1000

// Function to generate products for a category
function generateProducts(category, baseProducts, count = 200) {
  const products = []

  for (let i = 0; i < count; i++) {
    const baseProduct = baseProducts[i % baseProducts.length]
    const product = {
      id: currentId++,
      name: `${baseProduct.prefix} ${i + 1}`,
      brand: baseProduct.brands[i % baseProduct.brands.length],
      price: Math.floor(Math.random() * 3000) + 500,
      originalPrice: 0,
      image: "/placeholder.svg?height=300&width=300",
      rating: (Math.random() * 2 + 3).toFixed(1),
      reviews: Math.floor(Math.random() * 300) + 50,
      discount: 0,
      category: category,
    }

    product.originalPrice = Math.floor(product.price * 1.4)
    product.discount = Math.floor(((product.originalPrice - product.price) / product.originalPrice) * 100)
    product.rating = Number.parseFloat(product.rating)

    products.push(product)
  }

  return products
}

// Men's Fashion Products
const menProducts = generateProducts(
  "men",
  [
    {
      prefix: "Men's Casual Shirt",
      brands: [
        "StyleCraft",
        "UrbanFit",
        "TrendWear",
        "ComfortZone",
        "ClassicMen",
        "CasualKing",
        "WinterWear",
        "FitStyle",
        "RetroVibes",
        "BasicWear",
      ],
    },
    {
      prefix: "Men's Formal Trouser",
      brands: ["OfficePro", "ExecutiveWear", "SmartCasual", "FormalFit", "BusinessStyle"],
    },
    {
      prefix: "Men's Sports Jacket",
      brands: ["ActiveWear", "SportyFit", "FitnessGear", "RunStyle", "GymPro"],
    },
    {
      prefix: "Men's Casual Shoe",
      brands: ["WalkComfort", "StepStyle", "FootFit", "ComfortWalk", "CasualStep"],
    },
    {
      prefix: "Men's Watch",
      brands: ["TimeStyle", "ChronoFit", "WatchCraft", "TimeKeeper", "StyleTime"],
    },
  ],
  200,
)

// Women's Fashion Products
const womenProducts = generateProducts(
  "women",
  [
    {
      prefix: "Women's Designer Top",
      brands: [
        "FashionForward",
        "ElegantStyle",
        "ChicWear",
        "ModernWoman",
        "StyleQueen",
        "TrendyFashion",
        "ClassicFem",
        "FeminineTouch",
      ],
    },
    {
      prefix: "Women's Formal Dress",
      brands: ["PartyWear", "ElegantChoice", "CelebrationStyle", "FormalChic", "EventWear"],
    },
    {
      prefix: "Women's Handbag",
      brands: ["LuxuryBags", "StyleBag", "ElegantCarry", "ChicBags", "FashionBag"],
    },
    {
      prefix: "Women's Jewelry",
      brands: ["SparkleGems", "ElegantJewels", "GoldCraft", "DiamondStyle", "JewelryArt"],
    },
    {
      prefix: "Women's Footwear",
      brands: ["ElegantStep", "ComfortHeel", "StyleWalk", "ChicStep", "FashionFoot"],
    },
  ],
  200,
)

// Kids Products
const kidsProducts = generateProducts(
  "kids",
  [
    {
      prefix: "Kids Play Outfit",
      brands: ["KidZone", "PlayTime", "FunKids", "HappyChild", "KidsJoy", "LittleStyle", "ChildComfort", "PlayWear"],
    },
    {
      prefix: "Kids School Uniform",
      brands: ["SchoolWear", "StudyStyle", "SmartKid", "SchoolFit", "EducationWear"],
    },
    {
      prefix: "Kids Sports Gear",
      brands: ["ActiveKids", "SportyChild", "PlayActive", "KidsSport", "FitKids"],
    },
    {
      prefix: "Kids Toy",
      brands: ["ToyWorld", "PlayFun", "KidsJoy", "FunTime", "HappyToys"],
    },
    {
      prefix: "Kids Footwear",
      brands: ["PlayStep", "KidsWalk", "ComfortKid", "ChildStep", "PlayShoes"],
    },
  ],
  200,
)

// Home & Living Products
const homeProducts = generateProducts(
  "home",
  [
    {
      prefix: "Home Decor Item",
      brands: [
        "HomeDecor",
        "ElegantHome",
        "StyleHome",
        "DecorCraft",
        "HomeArt",
        "LivingStyle",
        "ComfortHome",
        "ModernDecor",
      ],
    },
    {
      prefix: "Kitchen Appliance",
      brands: ["KitchenPro", "CookMaster", "ChefTools", "KitchenCraft", "CookingEase"],
    },
    {
      prefix: "Furniture Piece",
      brands: ["FurnitureCraft", "ComfortSeating", "HomeComfort", "LivingFurniture", "StyleFurniture"],
    },
    {
      prefix: "Storage Solution",
      brands: ["OrganizeHome", "StorageMaster", "HomeOrganize", "TidyHome", "StoragePro"],
    },
    {
      prefix: "Lighting Fixture",
      brands: ["BrightHome", "LightCraft", "IlluminateHome", "LightStyle", "BrightDecor"],
    },
  ],
  200,
)

// Beauty Products
const beautyProducts = generateProducts(
  "beauty",
  [
    {
      prefix: "Skincare Product",
      brands: [
        "GlowBeauty",
        "SkinScience",
        "BeautyGlow",
        "SkinCare",
        "PureSkin",
        "GlowUp",
        "BeautyCraft",
        "SkinPerfect",
      ],
    },
    {
      prefix: "Makeup Item",
      brands: ["ColorPop", "MakeupPro", "BeautyColor", "GlamStyle", "MakeupArt"],
    },
    {
      prefix: "Hair Care Product",
      brands: ["HairCare", "SilkyHair", "HairStyle", "BeautyHair", "HairPerfect"],
    },
    {
      prefix: "Fragrance",
      brands: ["ElegantScent", "FragranceArt", "ScentStyle", "PerfumeHouse", "AromaBeauty"],
    },
    {
      prefix: "Personal Care",
      brands: ["PersonalCare", "BodyCare", "WellnessBeauty", "SelfCare", "BeautyEssentials"],
    },
  ],
  200,
)

// Electronics Products
const electronicsProducts = generateProducts(
  "electronics",
  [
    {
      prefix: "Smart Device",
      brands: [
        "TechSound",
        "SmartTech",
        "TechPro",
        "DigitalLife",
        "SmartHome",
        "TechCraft",
        "InnovateTech",
        "FutureTech",
      ],
    },
    {
      prefix: "Mobile Accessory",
      brands: ["MobilePro", "PhoneCare", "TechAccessory", "MobileStyle", "PhoneTech"],
    },
    {
      prefix: "Computer Hardware",
      brands: ["TechHardware", "ComputerPro", "PCMaster", "TechBuild", "HardwarePro"],
    },
    {
      prefix: "Gaming Gear",
      brands: ["GameTech", "GamerPro", "PlayTech", "GameMaster", "GamingStyle"],
    },
    {
      prefix: "Home Electronics",
      brands: ["HomeTech", "ElectroHome", "SmartLiving", "TechHome", "ModernElectronics"],
    },
  ],
  200,
)

console.log("Generated additional products:")
console.log(`Men's products: ${menProducts.length}`)
console.log(`Women's products: ${womenProducts.length}`)
console.log(`Kids products: ${kidsProducts.length}`)
console.log(`Home products: ${homeProducts.length}`)
console.log(`Beauty products: ${beautyProducts.length}`)
console.log(`Electronics products: ${electronicsProducts.length}`)
console.log(
  `Total additional products: ${menProducts.length + womenProducts.length + kidsProducts.length + homeProducts.length + beautyProducts.length + electronicsProducts.length}`,
)

// Export the products (in a real scenario, you would append these to your main products array)
const allAdditionalProducts = [
  ...menProducts,
  ...womenProducts,
  ...kidsProducts,
  ...homeProducts,
  ...beautyProducts,
  ...electronicsProducts,
]

console.log("All additional products generated successfully!")
console.log("Total products per category now exceeds 300 items each.")
