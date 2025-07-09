// Comprehensive product generation script with proper images
const fs = require("fs")

// Color schemes for different categories
const colorSchemes = {
  men: ["4F46E5", "1E40AF", "7C3AED", "059669", "DC2626", "EA580C", "0891B2", "7C2D12", "A21CAF", "374151"],
  women: ["EC4899", "A855F7", "DC2626", "10B981", "F59E0B", "8B5CF6", "EF4444", "06B6D4", "BE185D", "7C3AED"],
  kids: ["F59E0B", "EC4899", "DC2626", "1E40AF", "374151", "10B981", "A855F7", "EF4444", "365314", "7C2D12"],
  home: ["F59E0B", "10B981", "7C3AED", "EC4899", "DC2626", "06B6D4", "92400E", "059669", "7C2D12", "374151"],
  beauty: ["F472B6", "DC2626", "F59E0B", "92400E", "A855F7", "10B981", "8B5CF6", "EC4899", "EF4444", "059669"],
  electronics: ["1F2937", "374151", "059669", "DC2626", "1E40AF", "7C2D12", "F59E0B", "7C3AED", "111827"],
}

// Product templates for each category
const productTemplates = {
  men: [
    // Clothing
    { name: "Cotton T-Shirt", brands: ["StyleCraft", "UrbanFit", "TrendWear", "ComfortZone", "ClassicMen"] },
    { name: "Polo Shirt", brands: ["CasualKing", "WinterWear", "FitStyle", "RetroVibes", "BasicWear"] },
    { name: "Formal Shirt", brands: ["ExecutiveWear", "WeekendStyle", "CasualDenim", "SummerBreeze", "FunPrint"] },
    { name: "Denim Jeans", brands: ["DenimCo", "ModernFit", "ComfortDenim", "StreetStyle", "SlimFit"] },
    { name: "Casual Pants", brands: ["UtilityWear", "SmartCasual", "OfficePro", "SportyFit", "ClassicCut"] },
    { name: "Jacket", brands: ["RockStyle", "ClassicDenim", "StreetWear", "SportyStyle", "ComfortWear"] },
    { name: "Hoodie", brands: ["SuitUp", "ActiveWear", "WarmUp", "SummerFit", "EthnicWear"] },
    { name: "Kurta", brands: ["TraditionalWear", "EthnicStyle", "FestivalWear", "CulturalDress", "IndianWear"] },
    { name: "Blazer", brands: ["FormalWear", "BusinessStyle", "OfficeLook", "ProfessionalWear", "SuitMaster"] },
    { name: "Shorts", brands: ["SummerWear", "CasualShorts", "SportShorts", "BeachWear", "ActiveShorts"] },

    // Footwear
    { name: "Casual Shoes", brands: ["WalkComfort", "StepStyle", "FootFit", "ComfortWalk", "CasualStep"] },
    { name: "Formal Shoes", brands: ["OfficeFoot", "BusinessShoes", "FormalStep", "ProfessionalFoot", "WorkShoes"] },
    { name: "Sports Shoes", brands: ["RunFast", "SportStep", "ActiveFoot", "FitnessShoes", "GymWear"] },
    { name: "Sandals", brands: ["SummerFoot", "CasualSandals", "ComfortSandals", "BeachFoot", "RelaxStep"] },
    { name: "Boots", brands: ["ToughFoot", "AdventureBoot", "WorkBoot", "StyleBoot", "DurableFoot"] },

    // Accessories
    { name: "Watch", brands: ["TimeStyle", "ChronoFit", "WatchCraft", "TimeKeeper", "StyleTime"] },
    { name: "Belt", brands: ["LeatherCraft", "StyleBelt", "AccessoryPro", "BeltMaster", "FashionBelt"] },
    { name: "Wallet", brands: ["LeatherWorks", "WalletCraft", "MoneyKeeper", "StyleWallet", "PocketStyle"] },
    { name: "Sunglasses", brands: ["EyeStyle", "SunProtect", "VisionWear", "StyleShades", "EyeFashion"] },
    { name: "Cap", brands: ["HeadStyle", "CapCraft", "SportsCap", "FashionHead", "StyleCap"] },
  ],

  women: [
    // Dresses & Tops
    { name: "Summer Dress", brands: ["FashionForward", "ElegantStyle", "ChicWear", "ModernWoman", "StyleQueen"] },
    { name: "Maxi Dress", brands: ["FlowingStyle", "ElegantChoice", "PartyWear", "EverydayChic", "ClassicFem"] },
    { name: "Blouse", brands: ["BloomStyle", "LuxuryWear", "YouthStyle", "FeminineTouch", "CasualComfort"] },
    { name: "Top", brands: ["FlowingFit", "ClassicWomen", "SummerVibes", "BohoChic", "DelicateStyle"] },
    { name: "Kurti", brands: ["EthnicWear", "IndianStyle", "TraditionalLook", "CulturalWear", "FestivalStyle"] },
    { name: "Saree", brands: ["SilkTradition", "ElegantSaree", "WeddingWear", "FestivalSaree", "TraditionalSilk"] },
    { name: "Lehenga", brands: ["BridalWear", "WeddingStyle", "FestivalLehenga", "PartyLehenga", "ElegantLehenga"] },

    // Bottoms
    { name: "Jeans", brands: ["PerfectFit", "SlimLine", "RelaxedFit", "FlowingStyle", "ComfortFit"] },
    { name: "Pants", brands: ["ElegantFlow", "ModernChic", "OfficeLady", "CasualPants", "FormalPants"] },
    { name: "Skirt", brands: ["FlowingSkirt", "ElegantSkirt", "CasualSkirt", "PartySkirt", "OfficeSkirt"] },
    { name: "Shorts", brands: ["SummerShorts", "CasualShorts", "SportyShorts", "BeachShorts", "ComfortShorts"] },

    // Footwear
    { name: "Heels", brands: ["ElegantStep", "ComfortHeel", "StyleWalk", "ChicStep", "FashionFoot"] },
    { name: "Flats", brands: ["ComfortFlat", "CasualStep", "EverydayWalk", "StyleFlat", "ComfortWalk"] },
    { name: "Sandals", brands: ["SummerStep", "ElegantSandal", "CasualSandal", "PartyFoot", "BeachWalk"] },
    { name: "Boots", brands: ["StyleBoot", "WinterFoot", "FashionBoot", "TrendyBoot", "ComfortBoot"] },

    // Accessories
    { name: "Handbag", brands: ["LuxuryBags", "StyleBag", "ElegantCarry", "ChicBags", "FashionBag"] },
    { name: "Jewelry", brands: ["SparkleGems", "ElegantJewels", "GoldCraft", "DiamondStyle", "JewelryArt"] },
    { name: "Scarf", brands: ["SilkScarf", "ElegantWrap", "StyleScarf", "FashionWrap", "ChicScarf"] },
    { name: "Sunglasses", brands: ["GlamShades", "StyleEye", "FashionShades", "ElegantEye", "ChicShades"] },
  ],

  kids: [
    // Boys Clothing
    { name: "Boys T-Shirt", brands: ["KidZone", "PlayTime", "FunKids", "HappyChild", "KidsJoy"] },
    { name: "Boys Shirt", brands: ["LittleStyle", "ChildComfort", "PlayWear", "SchoolWear", "StudyStyle"] },
    { name: "Boys Pants", brands: ["SmartKid", "SchoolFit", "EducationWear", "ActiveKids", "SportyChild"] },
    { name: "Boys Shorts", brands: ["PlayActive", "KidsSport", "FitKids", "SummerKids", "PlayShorts"] },
    { name: "Boys Jacket", brands: ["WarmKids", "KidsStyle", "PlayJacket", "SchoolJacket", "WinterKids"] },

    // Girls Clothing
    { name: "Girls Dress", brands: ["LittlePrincess", "GirlsStyle", "PlayDress", "PartyGirl", "ElegantKids"] },
    { name: "Girls Top", brands: ["GirlsFashion", "KidsChic", "PlayTop", "SchoolTop", "CasualGirls"] },
    { name: "Girls Skirt", brands: ["PlaySkirt", "SchoolSkirt", "PartySkirt", "CasualSkirt", "FunSkirt"] },
    {
      name: "Girls Leggings",
      brands: ["ComfortKids", "PlayLeggings", "ActiveGirls", "SchoolLeggings", "CasualLeggings"],
    },

    // Baby Wear
    { name: "Baby Romper", brands: ["BabyComfort", "TinyTots", "BabyJoy", "LittleAngel", "BabyStyle"] },
    { name: "Baby Onesie", brands: ["BabyCare", "TinyWear", "BabyLove", "SoftBaby", "ComfortBaby"] },
    { name: "Baby Dress", brands: ["BabyPrincess", "TinyFashion", "BabyChic", "LittleDress", "BabyElegant"] },

    // Footwear & Accessories
    { name: "Kids Shoes", brands: ["PlayStep", "KidsWalk", "ComfortKid", "ChildStep", "PlayShoes"] },
    { name: "School Bag", brands: ["StudyBag", "SchoolPack", "KidsCarry", "BookBag", "SchoolStyle"] },
    { name: "Kids Hat", brands: ["PlayHat", "SunKids", "StyleHat", "FunHat", "KidsHead"] },
    { name: "Kids Socks", brands: ["ComfortSocks", "PlaySocks", "FunSocks", "KidsFeet", "SoftSocks"] },
  ],

  home: [
    // Furniture
    {
      name: "Sofa Set",
      brands: ["ComfortSeating", "HomeComfort", "LivingFurniture", "StyleFurniture", "FurnitureCraft"],
    },
    { name: "Dining Table", brands: ["DiningStyle", "FamilyTable", "HomeEating", "TableCraft", "DiningComfort"] },
    { name: "Bed", brands: ["SleepComfort", "BedCraft", "RestWell", "SleepStyle", "ComfortBed"] },
    {
      name: "Wardrobe",
      brands: ["StorageMaster", "ClothesKeeper", "OrganizeFurniture", "StyleStorage", "HomeOrganize"],
    },
    { name: "Coffee Table", brands: ["LivingStyle", "TableDecor", "HomeTable", "StyleTable", "ComfortTable"] },
    { name: "Chair", brands: ["SitComfort", "ChairCraft", "ComfortSeating", "StyleChair", "HomeSeating"] },
    { name: "Bookshelf", brands: ["BookStorage", "StudyFurniture", "HomeLibrary", "BookKeeper", "ReadingCorner"] },

    // Decor
    { name: "Wall Art", brands: ["ArtDecor", "WallStyle", "HomeArt", "DecorCraft", "ArtisticHome"] },
    { name: "Vase", brands: ["ElegantHome", "DecorVase", "HomeDecor", "StyleVase", "ArtisticDecor"] },
    { name: "Mirror", brands: ["ReflectStyle", "MirrorDecor", "HomeReflect", "StyleMirror", "DecorMirror"] },
    { name: "Lamp", brands: ["BrightHome", "LightCraft", "IlluminateHome", "LightStyle", "BrightDecor"] },
    { name: "Curtains", brands: ["WindowDecor", "HomeWindow", "CurtainStyle", "WindowStyle", "HomeTextile"] },
    { name: "Cushions", brands: ["ComfortHome", "SoftDecor", "HomeComfort", "CushionCraft", "CozyHome"] },
    { name: "Carpet", brands: ["FloorDecor", "HomeFloor", "CarpetStyle", "FloorComfort", "HomeTextile"] },

    // Kitchen & Dining
    { name: "Cookware Set", brands: ["KitchenPro", "CookMaster", "ChefTools", "KitchenCraft", "CookingEase"] },
    { name: "Dinnerware", brands: ["DiningStyle", "TableWare", "KitchenStyle", "DiningCraft", "HomeEating"] },
    { name: "Storage Container", brands: ["OrganizeHome", "KitchenStorage", "HomeOrganize", "StoragePro", "TidyHome"] },
    { name: "Kitchen Appliance", brands: ["KitchenTech", "CookingTech", "HomeAppliance", "KitchenPro", "CookMaster"] },

    // Bedding & Bath
    { name: "Bedsheet Set", brands: ["SleepComfort", "BedStyle", "HomeTextile", "ComfortSleep", "BedCraft"] },
    { name: "Towel Set", brands: ["BathComfort", "SoftTowel", "BathStyle", "HomeTextile", "ComfortBath"] },
    { name: "Pillow", brands: ["SleepWell", "ComfortPillow", "RestComfort", "SleepStyle", "BedComfort"] },
    { name: "Blanket", brands: ["WarmHome", "CozyBlanket", "ComfortWarm", "SleepWarm", "HomeComfort"] },
  ],

  beauty: [
    // Skincare
    { name: "Face Cream", brands: ["GlowBeauty", "SkinScience", "BeautyGlow", "SkinCare", "PureSkin"] },
    { name: "Face Wash", brands: ["CleanSkin", "FreshFace", "PureCleanse", "SkinFresh", "GlowClean"] },
    { name: "Moisturizer", brands: ["SoftSkin", "HydrateBeauty", "SkinMoisture", "BeautyHydrate", "GlowMoist"] },
    { name: "Serum", brands: ["SkinSerum", "BeautyEssence", "GlowSerum", "SkinTreatment", "BeautyTreatment"] },
    { name: "Sunscreen", brands: ["SunProtect", "UVShield", "SkinProtect", "SunSafe", "BeautyShield"] },
    { name: "Face Mask", brands: ["GlowUp", "SkinMask", "BeautyMask", "FaceTreat", "SkinTreatment"] },
    { name: "Toner", brands: ["SkinTone", "FreshTone", "BeautyTone", "SkinBalance", "GlowTone"] },
    { name: "Eye Cream", brands: ["EyeCare", "BeautyEye", "SkinEye", "EyeGlow", "BeautyCare"] },

    // Makeup
    { name: "Foundation", brands: ["PerfectSkin", "BaseBeauty", "SkinBase", "MakeupBase", "BeautyFoundation"] },
    { name: "Lipstick", brands: ["ColorPop", "LipColor", "BeautyLips", "LipStyle", "ColorBeauty"] },
    { name: "Mascara", brands: ["EyeBeauty", "LashBeauty", "EyeMakeup", "BeautyLash", "EyeStyle"] },
    { name: "Eyeshadow", brands: ["ColorMagic", "EyeColor", "BeautyEye", "EyeStyle", "ColorEye"] },
    { name: "Blush", brands: ["CheekGlow", "BeautyBlush", "CheekColor", "GlowCheek", "BeautyGlow"] },
    { name: "Concealer", brands: ["CoverBeauty", "SkinCover", "BeautyCover", "PerfectCover", "MakeupCover"] },
    { name: "Eyeliner", brands: ["EyeLine", "BeautyLine", "EyeDefine", "LineBeauty", "EyeStyle"] },

    // Hair Care
    { name: "Shampoo", brands: ["HairCare", "SilkyHair", "HairStyle", "BeautyHair", "HairPerfect"] },
    { name: "Conditioner", brands: ["SoftHair", "HairSoft", "SilkyHair", "HairCare", "BeautyHair"] },
    { name: "Hair Oil", brands: ["HairNourish", "SilkyOil", "HairTreatment", "BeautyOil", "HairCare"] },
    { name: "Hair Serum", brands: ["SilkyHair", "HairGlow", "BeautyHair", "HairStyle", "SilkySerum"] },
    { name: "Hair Mask", brands: ["HairTreat", "BeautyHair", "HairCare", "SilkyTreat", "HairNourish"] },

    // Fragrance
    { name: "Perfume", brands: ["FragranceArt", "ScentStyle", "PerfumeHouse", "AromaBeauty", "ElegantScent"] },
    { name: "Body Spray", brands: ["BodyScent", "FreshSpray", "BeautySpray", "ScentBody", "AromaSpray"] },
    { name: "Deodorant", brands: ["FreshBody", "BodyFresh", "BeautyFresh", "ScentFresh", "BodyCare"] },

    // Personal Care
    { name: "Body Lotion", brands: ["SoftSkin", "BodyCare", "SkinSoft", "BeautyBody", "BodyBeauty"] },
    { name: "Hand Cream", brands: ["HandCare", "SoftHands", "BeautyHands", "HandBeauty", "SkinHands"] },
    { name: "Lip Balm", brands: ["LipCare", "SoftLips", "BeautyLips", "LipBeauty", "LipSoft"] },
    { name: "Body Wash", brands: ["BodyClean", "SkinClean", "BeautyWash", "BodyCare", "FreshBody"] },
  ],

  electronics: [
    // Mobile & Accessories
    { name: "Smartphone", brands: ["TechPhone", "SmartMobile", "PhoneTech", "MobilePro", "TechSmart"] },
    { name: "Phone Case", brands: ["PhoneProtect", "CaseStyle", "MobileCase", "PhoneCare", "TechCase"] },
    { name: "Screen Protector", brands: ["ScreenSafe", "PhoneProtect", "DisplayCare", "ScreenCare", "TechProtect"] },
    { name: "Charger", brands: ["PowerTech", "ChargeMaster", "PowerPro", "TechCharge", "FastCharge"] },
    { name: "Power Bank", brands: ["PowerBank", "ChargeMaster", "BatteryPro", "PowerTech", "MobilePower"] },
    { name: "Earphones", brands: ["SoundTech", "AudioPro", "MusicTech", "SoundMaster", "AudioStyle"] },
    { name: "Bluetooth Speaker", brands: ["SoundWave", "AudioTech", "MusicBox", "SoundPro", "AudioMaster"] },

    // Computer & Gaming
    { name: "Laptop", brands: ["TechBook", "ComputerPro", "LaptopMaster", "TechLaptop", "PCPro"] },
    { name: "Desktop PC", brands: ["PCMaster", "ComputerPro", "TechPC", "DesktopPro", "ComputerTech"] },
    { name: "Monitor", brands: ["DisplayTech", "ScreenPro", "ViewMaster", "TechDisplay", "ScreenTech"] },
    { name: "Keyboard", brands: ["TypeTech", "KeyMaster", "InputPro", "TechKeys", "TypePro"] },
    { name: "Mouse", brands: ["ClickTech", "MousePro", "TechMouse", "ClickMaster", "InputTech"] },
    { name: "Gaming Mouse", brands: ["GameTech", "GamerPro", "PlayTech", "GameMaster", "GamingStyle"] },
    { name: "Gaming Keyboard", brands: ["GameKeys", "GamerTech", "PlayKeys", "GameInput", "GamingPro"] },
    { name: "Webcam", brands: ["VideoTech", "CamPro", "WebCam", "VideoMaster", "TechCam"] },
    { name: "Microphone", brands: ["AudioTech", "SoundPro", "MicMaster", "VoiceTech", "AudioMaster"] },

    // Smart Home
    { name: "Smart TV", brands: ["SmartScreen", "TechTV", "SmartDisplay", "ViewTech", "TechVision"] },
    { name: "Smart Speaker", brands: ["SmartSound", "VoiceTech", "SmartAudio", "TechVoice", "SmartHome"] },
    { name: "Smart Light", brands: ["SmartGlow", "TechLight", "SmartBright", "LightTech", "SmartIlluminate"] },
    { name: "Security Camera", brands: ["SecureTech", "SafeWatch", "TechSecurity", "WatchPro", "SecureView"] },
    { name: "Smart Doorbell", brands: ["SmartEntry", "DoorTech", "SmartDoor", "EntryTech", "TechDoor"] },

    // Wearables
    { name: "Smart Watch", brands: ["WearTech", "SmartTime", "TechWatch", "WearPro", "SmartWear"] },
    { name: "Fitness Tracker", brands: ["FitTech", "HealthTrack", "WearFit", "FitnessPro", "HealthTech"] },
    { name: "VR Headset", brands: ["VRTech", "VirtualPro", "TechVR", "VRMaster", "VirtualTech"] },

    // Audio & Video
    { name: "Headphones", brands: ["TechSound", "AudioPro", "SoundMaster", "TechAudio", "SoundTech"] },
    {
      name: "Wireless Headphones",
      brands: ["WirelessSound", "TechWireless", "AudioWireless", "SoundFree", "WirelessPro"],
    },
    { name: "Soundbar", brands: ["SoundBar", "AudioBar", "TechSound", "SoundPro", "AudioTech"] },
    { name: "Bluetooth Earbuds", brands: ["EarTech", "AudioBuds", "SoundBuds", "TechEar", "WirelessEar"] },
  ],
}

// Function to generate products with proper images
function generateCategoryProducts(category, count = 300) {
  const templates = productTemplates[category]
  const colors = colorSchemes[category]
  const products = []
  let currentId = 1000 + Object.keys(productTemplates).indexOf(category) * 1000

  for (let i = 0; i < count; i++) {
    const template = templates[i % templates.length]
    const brand = template.brands[i % template.brands.length]
    const color = colors[i % colors.length]
    const basePrice = Math.floor(Math.random() * 4000) + 500
    const originalPrice = Math.floor(basePrice * (1.3 + Math.random() * 0.4))
    const discount = Math.floor(((originalPrice - basePrice) / originalPrice) * 100)

    const product = {
      id: currentId++,
      name: `${template.name} ${Math.floor(i / template.brands.length) + 1}`,
      brand: brand,
      price: basePrice,
      originalPrice: originalPrice,
      image: `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(template.name)}&bg=${color}&color=white`,
      rating: Number((Math.random() * 1.5 + 3.5).toFixed(1)),
      reviews: Math.floor(Math.random() * 400) + 50,
      discount: discount,
      category: category,
    }

    products.push(product)
  }

  return products
}

// Generate products for all categories
const allGeneratedProducts = []

Object.keys(productTemplates).forEach((category) => {
  const categoryProducts = generateCategoryProducts(category, 300)
  allGeneratedProducts.push(...categoryProducts)
  console.log(`Generated ${categoryProducts.length} products for ${category}`)
})

console.log(`Total products generated: ${allGeneratedProducts.length}`)
console.log("Products now have category-specific images with proper colors and text!")

// Export function to append to existing products
function appendToExistingProducts(existingProducts) {
  return [...existingProducts, ...allGeneratedProducts]
}

module.exports = { allGeneratedProducts, appendToExistingProducts }
