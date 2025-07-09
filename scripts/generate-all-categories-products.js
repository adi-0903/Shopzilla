// Comprehensive product generation for all categories with 300+ items each
const fs = require("fs")

// Enhanced product templates with more variety
const enhancedProductTemplates = {
  men: [
    // Clothing (150+ variations)
    {
      name: "Cotton T-Shirt",
      brands: ["StyleCraft", "UrbanFit", "TrendWear", "ComfortZone", "ClassicMen"],
      priceRange: [500, 1500],
    },
    {
      name: "Polo Shirt",
      brands: ["CasualKing", "WinterWear", "FitStyle", "RetroVibes", "BasicWear"],
      priceRange: [800, 2000],
    },
    {
      name: "Formal Shirt",
      brands: ["ExecutiveWear", "WeekendStyle", "CasualDenim", "SummerBreeze", "FunPrint"],
      priceRange: [1200, 3000],
    },
    {
      name: "Casual Shirt",
      brands: ["RelaxedStyle", "EasyWear", "ComfortShirt", "DailyWear", "SimpleStyle"],
      priceRange: [900, 2200],
    },
    {
      name: "Denim Jeans",
      brands: ["DenimCo", "ModernFit", "ComfortDenim", "StreetStyle", "SlimFit"],
      priceRange: [1500, 4000],
    },
    {
      name: "Casual Pants",
      brands: ["UtilityWear", "SmartCasual", "OfficePro", "SportyFit", "ClassicCut"],
      priceRange: [1200, 3500],
    },
    {
      name: "Formal Trousers",
      brands: ["BusinessWear", "OfficeFormal", "ProfessionalPants", "WorkWear", "SuitPants"],
      priceRange: [1800, 4500],
    },
    {
      name: "Shorts",
      brands: ["SummerWear", "CasualShorts", "SportShorts", "BeachWear", "ActiveShorts"],
      priceRange: [600, 1800],
    },
    {
      name: "Jacket",
      brands: ["RockStyle", "ClassicDenim", "StreetWear", "SportyStyle", "ComfortWear"],
      priceRange: [2500, 8000],
    },
    { name: "Hoodie", brands: ["SuitUp", "ActiveWear", "WarmUp", "SummerFit", "EthnicWear"], priceRange: [1500, 3500] },
    {
      name: "Sweatshirt",
      brands: ["CozyWear", "WarmStyle", "ComfortSweat", "CasualWarm", "RelaxedFit"],
      priceRange: [1200, 2800],
    },
    {
      name: "Blazer",
      brands: ["FormalWear", "BusinessStyle", "OfficeLook", "ProfessionalWear", "SuitMaster"],
      priceRange: [3500, 8500],
    },
    {
      name: "Kurta",
      brands: ["TraditionalWear", "EthnicStyle", "FestivalWear", "CulturalDress", "IndianWear"],
      priceRange: [1000, 3000],
    },
    {
      name: "Vest",
      brands: ["LayerStyle", "FormalVest", "CasualVest", "StyleLayer", "ClassicVest"],
      priceRange: [800, 2200],
    },
    {
      name: "Tank Top",
      brands: ["SummerFit", "GymWear", "CasualTank", "ActiveTank", "BeachWear"],
      priceRange: [400, 1200],
    },

    // Footwear (50+ variations)
    {
      name: "Casual Shoes",
      brands: ["WalkComfort", "StepStyle", "FootFit", "ComfortWalk", "CasualStep"],
      priceRange: [1500, 4500],
    },
    {
      name: "Formal Shoes",
      brands: ["OfficeFoot", "BusinessShoes", "FormalStep", "ProfessionalFoot", "WorkShoes"],
      priceRange: [2500, 6500],
    },
    {
      name: "Sports Shoes",
      brands: ["RunFast", "SportStep", "ActiveFoot", "FitnessShoes", "GymWear"],
      priceRange: [2000, 8000],
    },
    {
      name: "Sneakers",
      brands: ["StreetStep", "CasualSneaker", "StyleStep", "TrendyFoot", "UrbanStep"],
      priceRange: [1800, 5500],
    },
    {
      name: "Sandals",
      brands: ["SummerFoot", "CasualSandals", "ComfortSandals", "BeachFoot", "RelaxStep"],
      priceRange: [800, 2500],
    },
    {
      name: "Boots",
      brands: ["ToughFoot", "AdventureBoot", "WorkBoot", "StyleBoot", "DurableFoot"],
      priceRange: [2500, 7500],
    },
    {
      name: "Loafers",
      brands: ["ClassicLoafer", "ComfortLoafer", "StyleLoafer", "CasualLoafer", "ElegantStep"],
      priceRange: [2000, 5000],
    },
    {
      name: "Flip Flops",
      brands: ["BeachStep", "CasualFlip", "SummerFlip", "ComfortFlip", "RelaxedStep"],
      priceRange: [300, 1000],
    },

    // Accessories (100+ variations)
    {
      name: "Watch",
      brands: ["TimeStyle", "ChronoFit", "WatchCraft", "TimeKeeper", "StyleTime"],
      priceRange: [1500, 15000],
    },
    {
      name: "Belt",
      brands: ["LeatherCraft", "StyleBelt", "AccessoryPro", "BeltMaster", "FashionBelt"],
      priceRange: [500, 2500],
    },
    {
      name: "Wallet",
      brands: ["LeatherWorks", "WalletCraft", "MoneyKeeper", "StyleWallet", "PocketStyle"],
      priceRange: [800, 3500],
    },
    {
      name: "Sunglasses",
      brands: ["EyeStyle", "SunProtect", "VisionWear", "StyleShades", "EyeFashion"],
      priceRange: [1000, 5000],
    },
    { name: "Cap", brands: ["HeadStyle", "CapCraft", "SportsCap", "FashionHead", "StyleCap"], priceRange: [400, 1500] },
    {
      name: "Backpack",
      brands: ["TravelPack", "StyleBag", "UrbanPack", "AdventureBag", "DailyPack"],
      priceRange: [1200, 4500],
    },
    {
      name: "Tie",
      brands: ["FormalTie", "BusinessTie", "StyleTie", "ElegantTie", "OfficeTie"],
      priceRange: [500, 2000],
    },
    {
      name: "Cufflinks",
      brands: ["ElegantLinks", "FormalLinks", "StyleLinks", "BusinessLinks", "ClassicLinks"],
      priceRange: [800, 3500],
    },
  ],

  women: [
    // Dresses & Ethnic Wear (100+ variations)
    {
      name: "Summer Dress",
      brands: ["FashionForward", "ElegantStyle", "ChicWear", "ModernWoman", "StyleQueen"],
      priceRange: [1200, 4000],
    },
    {
      name: "Maxi Dress",
      brands: ["FlowingStyle", "ElegantChoice", "PartyWear", "EverydayChic", "ClassicFem"],
      priceRange: [1800, 5500],
    },
    {
      name: "Cocktail Dress",
      brands: ["PartyGlam", "EveningWear", "CelebrationStyle", "GlamourDress", "PartyPerfect"],
      priceRange: [2500, 8000],
    },
    {
      name: "Casual Dress",
      brands: ["DailyChic", "ComfortDress", "EasyWear", "RelaxedStyle", "CasualElegance"],
      priceRange: [1000, 3500],
    },
    {
      name: "Formal Dress",
      brands: ["OfficeDress", "BusinessWear", "ProfessionalStyle", "WorkDress", "FormalChic"],
      priceRange: [2000, 6000],
    },
    {
      name: "Kurti",
      brands: ["EthnicWear", "IndianStyle", "TraditionalLook", "CulturalWear", "FestivalStyle"],
      priceRange: [800, 2500],
    },
    {
      name: "Saree",
      brands: ["SilkTradition", "ElegantSaree", "WeddingWear", "FestivalSaree", "TraditionalSilk"],
      priceRange: [2000, 15000],
    },
    {
      name: "Lehenga",
      brands: ["BridalWear", "WeddingStyle", "FestivalLehenga", "PartyLehenga", "ElegantLehenga"],
      priceRange: [5000, 25000],
    },
    {
      name: "Salwar Suit",
      brands: ["TraditionalSuit", "EthnicSuit", "FestivalSuit", "CasualSuit", "DesignerSuit"],
      priceRange: [1500, 6000],
    },
    {
      name: "Anarkali",
      brands: ["ElegantAnarkali", "PartyAnarkali", "FestivalAnarkali", "WeddingAnarkali", "StyleAnarkali"],
      priceRange: [2500, 8500],
    },

    // Tops & Blouses (80+ variations)
    {
      name: "Blouse",
      brands: ["BloomStyle", "LuxuryWear", "YouthStyle", "FeminineTouch", "CasualComfort"],
      priceRange: [600, 2500],
    },
    {
      name: "Top",
      brands: ["FlowingFit", "ClassicWomen", "SummerVibes", "BohoChic", "DelicateStyle"],
      priceRange: [500, 2000],
    },
    {
      name: "Crop Top",
      brands: ["TrendyTop", "YouthFashion", "ModernStyle", "ChicTop", "FashionForward"],
      priceRange: [400, 1500],
    },
    {
      name: "Tank Top",
      brands: ["SummerTop", "CasualTank", "ComfortTop", "BasicTop", "EasyWear"],
      priceRange: [300, 1200],
    },
    {
      name: "Tunic",
      brands: ["FlowingTunic", "ComfortTunic", "CasualTunic", "ElegantTunic", "StyleTunic"],
      priceRange: [800, 2800],
    },
    {
      name: "Shirt",
      brands: ["CasualShirt", "FormalShirt", "BusinessShirt", "StyleShirt", "ComfortShirt"],
      priceRange: [900, 3000],
    },
    {
      name: "Sweater",
      brands: ["WarmStyle", "CozyWear", "WinterFashion", "ComfortSweater", "StyleSweater"],
      priceRange: [1200, 4000],
    },
    {
      name: "Cardigan",
      brands: ["LayerStyle", "ComfortLayer", "CasualCardigan", "ElegantLayer", "StyleCardigan"],
      priceRange: [1000, 3500],
    },

    // Bottoms (60+ variations)
    {
      name: "Jeans",
      brands: ["PerfectFit", "SlimLine", "RelaxedFit", "FlowingStyle", "ComfortFit"],
      priceRange: [1200, 4500],
    },
    {
      name: "Pants",
      brands: ["ElegantFlow", "ModernChic", "OfficeLady", "CasualPants", "FormalPants"],
      priceRange: [1000, 3800],
    },
    {
      name: "Leggings",
      brands: ["ComfortFit", "ActiveWear", "CasualLeggings", "SportyLeggings", "StyleLeggings"],
      priceRange: [500, 1800],
    },
    {
      name: "Skirt",
      brands: ["FlowingSkirt", "ElegantSkirt", "CasualSkirt", "PartySkirt", "OfficeSkirt"],
      priceRange: [800, 3000],
    },
    {
      name: "Shorts",
      brands: ["SummerShorts", "CasualShorts", "SportyShorts", "BeachShorts", "ComfortShorts"],
      priceRange: [500, 1800],
    },
    {
      name: "Palazzo",
      brands: ["FlowingPalazzo", "ComfortPalazzo", "ElegantPalazzo", "CasualPalazzo", "StylePalazzo"],
      priceRange: [800, 2500],
    },
    {
      name: "Culottes",
      brands: ["ModernCulottes", "StyleCulottes", "ComfortCulottes", "ChicCulottes", "ElegantCulottes"],
      priceRange: [900, 2800],
    },

    // Footwear & Accessories (60+ variations)
    {
      name: "Heels",
      brands: ["ElegantStep", "ComfortHeel", "StyleWalk", "ChicStep", "FashionFoot"],
      priceRange: [1500, 6000],
    },
    {
      name: "Flats",
      brands: ["ComfortFlat", "CasualStep", "EverydayWalk", "StyleFlat", "ComfortWalk"],
      priceRange: [800, 3000],
    },
    {
      name: "Sandals",
      brands: ["SummerStep", "ElegantSandal", "CasualSandal", "PartyFoot", "BeachWalk"],
      priceRange: [600, 2800],
    },
    {
      name: "Boots",
      brands: ["StyleBoot", "WinterFoot", "FashionBoot", "TrendyBoot", "ComfortBoot"],
      priceRange: [2000, 6500],
    },
    {
      name: "Sneakers",
      brands: ["CasualSneaker", "SportySneaker", "FashionSneaker", "ComfortSneaker", "StyleSneaker"],
      priceRange: [1200, 4500],
    },
    {
      name: "Handbag",
      brands: ["LuxuryBags", "StyleBag", "ElegantCarry", "ChicBags", "FashionBag"],
      priceRange: [1500, 8000],
    },
    {
      name: "Jewelry",
      brands: ["SparkleGems", "ElegantJewels", "GoldCraft", "DiamondStyle", "JewelryArt"],
      priceRange: [500, 15000],
    },
    {
      name: "Scarf",
      brands: ["SilkScarf", "ElegantWrap", "StyleScarf", "FashionWrap", "ChicScarf"],
      priceRange: [400, 2000],
    },
  ],

  kids: [
    // Boys Clothing (100+ variations)
    {
      name: "Boys T-Shirt",
      brands: ["KidZone", "PlayTime", "FunKids", "HappyChild", "KidsJoy"],
      priceRange: [300, 1000],
    },
    {
      name: "Boys Shirt",
      brands: ["LittleStyle", "ChildComfort", "PlayWear", "SchoolWear", "StudyStyle"],
      priceRange: [500, 1500],
    },
    {
      name: "Boys Pants",
      brands: ["SmartKid", "SchoolFit", "EducationWear", "ActiveKids", "SportyChild"],
      priceRange: [600, 1800],
    },
    {
      name: "Boys Shorts",
      brands: ["PlayActive", "KidsSport", "FitKids", "SummerKids", "PlayShorts"],
      priceRange: [400, 1200],
    },
    {
      name: "Boys Jacket",
      brands: ["WarmKids", "KidsStyle", "PlayJacket", "SchoolJacket", "WinterKids"],
      priceRange: [800, 2500],
    },
    {
      name: "Boys Jeans",
      brands: ["KidsDenim", "PlayJeans", "ComfortJeans", "StyleJeans", "CasualJeans"],
      priceRange: [700, 2000],
    },
    {
      name: "Boys Hoodie",
      brands: ["CozyKids", "WarmPlay", "ComfortHoodie", "KidsWarm", "PlayWarm"],
      priceRange: [600, 1800],
    },
    {
      name: "Boys Tracksuit",
      brands: ["ActiveKids", "SportyPlay", "FitKids", "PlayActive", "KidsSport"],
      priceRange: [800, 2200],
    },

    // Girls Clothing (100+ variations)
    {
      name: "Girls Dress",
      brands: ["LittlePrincess", "GirlsStyle", "PlayDress", "PartyGirl", "ElegantKids"],
      priceRange: [500, 2000],
    },
    {
      name: "Girls Top",
      brands: ["GirlsFashion", "KidsChic", "PlayTop", "SchoolTop", "CasualGirls"],
      priceRange: [300, 1200],
    },
    {
      name: "Girls Skirt",
      brands: ["PlaySkirt", "SchoolSkirt", "PartySkirt", "CasualSkirt", "FunSkirt"],
      priceRange: [400, 1500],
    },
    {
      name: "Girls Leggings",
      brands: ["ComfortKids", "PlayLeggings", "ActiveGirls", "SchoolLeggings", "CasualLeggings"],
      priceRange: [300, 1000],
    },
    {
      name: "Girls Jeans",
      brands: ["KidsJeans", "GirlsDenim", "PlayJeans", "CasualJeans", "StyleJeans"],
      priceRange: [600, 1800],
    },
    {
      name: "Girls Jacket",
      brands: ["GirlsJacket", "KidsStyle", "WarmGirls", "PlayJacket", "FashionKids"],
      priceRange: [700, 2200],
    },
    {
      name: "Girls Shorts",
      brands: ["PlayShorts", "SummerGirls", "CasualShorts", "ActiveShorts", "ComfortShorts"],
      priceRange: [350, 1200],
    },
    {
      name: "Girls Kurti",
      brands: ["KidsEthnic", "LittleTraditional", "FestivalKids", "EthnicGirls", "TraditionalKids"],
      priceRange: [400, 1500],
    },

    // Baby Wear (50+ variations)
    {
      name: "Baby Romper",
      brands: ["BabyComfort", "TinyTots", "BabyJoy", "LittleAngel", "BabyStyle"],
      priceRange: [300, 1000],
    },
    {
      name: "Baby Onesie",
      brands: ["BabyCare", "TinyWear", "BabyLove", "SoftBaby", "ComfortBaby"],
      priceRange: [200, 800],
    },
    {
      name: "Baby Dress",
      brands: ["BabyPrincess", "TinyFashion", "BabyChic", "LittleDress", "BabyElegant"],
      priceRange: [400, 1200],
    },
    {
      name: "Baby Set",
      brands: ["BabySet", "TinySet", "BabyCombo", "LittleSet", "BabyOutfit"],
      priceRange: [500, 1500],
    },
    {
      name: "Baby Sleepwear",
      brands: ["BabySleep", "TinySleep", "ComfortBaby", "SoftSleep", "BabyNight"],
      priceRange: [300, 1000],
    },

    // Kids Footwear & Accessories (50+ variations)
    {
      name: "Kids Shoes",
      brands: ["PlayStep", "KidsWalk", "ComfortKid", "ChildStep", "PlayShoes"],
      priceRange: [600, 2500],
    },
    {
      name: "School Bag",
      brands: ["StudyBag", "SchoolPack", "KidsCarry", "BookBag", "SchoolStyle"],
      priceRange: [800, 2500],
    },
    { name: "Kids Hat", brands: ["PlayHat", "SunKids", "StyleHat", "FunHat", "KidsHead"], priceRange: [200, 800] },
    {
      name: "Kids Socks",
      brands: ["ComfortSocks", "PlaySocks", "FunSocks", "KidsFeet", "SoftSocks"],
      priceRange: [100, 500],
    },
    {
      name: "Kids Watch",
      brands: ["KidsTime", "PlayWatch", "FunTime", "ChildWatch", "KidsStyle"],
      priceRange: [500, 2000],
    },
  ],

  home: [
    // Furniture (80+ variations)
    {
      name: "Sofa Set",
      brands: ["ComfortSeating", "HomeComfort", "LivingFurniture", "StyleFurniture", "FurnitureCraft"],
      priceRange: [15000, 80000],
    },
    {
      name: "Dining Table",
      brands: ["DiningStyle", "FamilyTable", "HomeEating", "TableCraft", "DiningComfort"],
      priceRange: [8000, 45000],
    },
    {
      name: "Bed",
      brands: ["SleepComfort", "BedCraft", "RestWell", "SleepStyle", "ComfortBed"],
      priceRange: [10000, 60000],
    },
    {
      name: "Wardrobe",
      brands: ["StorageMaster", "ClothesKeeper", "OrganizeFurniture", "StyleStorage", "HomeOrganize"],
      priceRange: [12000, 55000],
    },
    {
      name: "Coffee Table",
      brands: ["LivingStyle", "TableDecor", "HomeTable", "StyleTable", "ComfortTable"],
      priceRange: [3000, 20000],
    },
    {
      name: "Chair",
      brands: ["SitComfort", "ChairCraft", "ComfortSeating", "StyleChair", "HomeSeating"],
      priceRange: [2000, 15000],
    },
    {
      name: "Bookshelf",
      brands: ["BookStorage", "StudyFurniture", "HomeLibrary", "BookKeeper", "ReadingCorner"],
      priceRange: [4000, 25000],
    },
    {
      name: "TV Unit",
      brands: ["MediaFurniture", "TVStand", "EntertainmentUnit", "MediaStorage", "TVFurniture"],
      priceRange: [5000, 30000],
    },
    {
      name: "Study Table",
      brands: ["WorkDesk", "StudyDesk", "OfficeTable", "WorkStation", "StudyFurniture"],
      priceRange: [3000, 18000],
    },
    {
      name: "Dresser",
      brands: ["BedroomStorage", "DressingTable", "BeautyTable", "StyleDresser", "BedroomFurniture"],
      priceRange: [6000, 35000],
    },

    // Home Decor (80+ variations)
    {
      name: "Wall Art",
      brands: ["ArtDecor", "WallStyle", "HomeArt", "DecorCraft", "ArtisticHome"],
      priceRange: [500, 5000],
    },
    {
      name: "Vase",
      brands: ["ElegantHome", "DecorVase", "HomeDecor", "StyleVase", "ArtisticDecor"],
      priceRange: [300, 3000],
    },
    {
      name: "Mirror",
      brands: ["ReflectStyle", "MirrorDecor", "HomeReflect", "StyleMirror", "DecorMirror"],
      priceRange: [800, 8000],
    },
    {
      name: "Lamp",
      brands: ["BrightHome", "LightCraft", "IlluminateHome", "LightStyle", "BrightDecor"],
      priceRange: [600, 6000],
    },
    {
      name: "Curtains",
      brands: ["WindowDecor", "HomeWindow", "CurtainStyle", "WindowStyle", "HomeTextile"],
      priceRange: [800, 5000],
    },
    {
      name: "Cushions",
      brands: ["ComfortHome", "SoftDecor", "HomeComfort", "CushionCraft", "CozyHome"],
      priceRange: [300, 2000],
    },
    {
      name: "Carpet",
      brands: ["FloorDecor", "HomeFloor", "CarpetStyle", "FloorComfort", "HomeTextile"],
      priceRange: [1500, 15000],
    },
    {
      name: "Wall Clock",
      brands: ["TimeDecor", "WallTime", "HomeTime", "DecorTime", "StyleClock"],
      priceRange: [500, 4000],
    },
    {
      name: "Photo Frame",
      brands: ["MemoryFrame", "PhotoDecor", "PictureFrame", "HomeMemory", "DecorFrame"],
      priceRange: [200, 2000],
    },
    {
      name: "Candles",
      brands: ["AromaHome", "CandleDecor", "ScentedHome", "HomeAroma", "DecorCandle"],
      priceRange: [300, 1500],
    },

    // Kitchen & Dining (60+ variations)
    {
      name: "Cookware Set",
      brands: ["KitchenPro", "CookMaster", "ChefTools", "KitchenCraft", "CookingEase"],
      priceRange: [2000, 15000],
    },
    {
      name: "Dinnerware",
      brands: ["DiningStyle", "TableWare", "KitchenStyle", "DiningCraft", "HomeEating"],
      priceRange: [1500, 8000],
    },
    {
      name: "Storage Container",
      brands: ["OrganizeHome", "KitchenStorage", "HomeOrganize", "StoragePro", "TidyHome"],
      priceRange: [500, 3000],
    },
    {
      name: "Kitchen Appliance",
      brands: ["KitchenTech", "CookingTech", "HomeAppliance", "KitchenPro", "CookMaster"],
      priceRange: [2000, 25000],
    },
    {
      name: "Glassware",
      brands: ["CrystalHome", "GlassStyle", "DrinkWare", "HomeGlass", "ElegantGlass"],
      priceRange: [800, 5000],
    },
    {
      name: "Cutlery Set",
      brands: ["SteelCraft", "KitchenSteel", "DiningSteel", "CutleryPro", "TableSteel"],
      priceRange: [1000, 6000],
    },

    // Bedding & Bath (60+ variations)
    {
      name: "Bedsheet Set",
      brands: ["SleepComfort", "BedStyle", "HomeTextile", "ComfortSleep", "BedCraft"],
      priceRange: [800, 4000],
    },
    {
      name: "Towel Set",
      brands: ["BathComfort", "SoftTowel", "BathStyle", "HomeTextile", "ComfortBath"],
      priceRange: [600, 3000],
    },
    {
      name: "Pillow",
      brands: ["SleepWell", "ComfortPillow", "RestComfort", "SleepStyle", "BedComfort"],
      priceRange: [500, 2500],
    },
    {
      name: "Blanket",
      brands: ["WarmHome", "CozyBlanket", "ComfortWarm", "SleepWarm", "HomeComfort"],
      priceRange: [800, 4500],
    },
    {
      name: "Comforter",
      brands: ["SleepLux", "ComfortBed", "WarmSleep", "CozyBed", "LuxurySleep"],
      priceRange: [1500, 8000],
    },
    {
      name: "Bath Mat",
      brands: ["BathSafety", "BathComfort", "SafeStep", "BathStyle", "ComfortMat"],
      priceRange: [300, 1500],
    },
  ],

  beauty: [
    // Skincare (100+ variations)
    {
      name: "Face Cream",
      brands: ["GlowBeauty", "SkinScience", "BeautyGlow", "SkinCare", "PureSkin"],
      priceRange: [500, 3000],
    },
    {
      name: "Face Wash",
      brands: ["CleanSkin", "FreshFace", "PureCleanse", "SkinFresh", "GlowClean"],
      priceRange: [300, 1500],
    },
    {
      name: "Moisturizer",
      brands: ["SoftSkin", "HydrateBeauty", "SkinMoisture", "BeautyHydrate", "GlowMoist"],
      priceRange: [400, 2500],
    },
    {
      name: "Serum",
      brands: ["SkinSerum", "BeautyEssence", "GlowSerum", "SkinTreatment", "BeautyTreatment"],
      priceRange: [800, 4000],
    },
    {
      name: "Sunscreen",
      brands: ["SunProtect", "UVShield", "SkinProtect", "SunSafe", "BeautyShield"],
      priceRange: [400, 2000],
    },
    {
      name: "Face Mask",
      brands: ["GlowUp", "SkinMask", "BeautyMask", "FaceTreat", "SkinTreatment"],
      priceRange: [200, 1500],
    },
    {
      name: "Toner",
      brands: ["SkinTone", "FreshTone", "BeautyTone", "SkinBalance", "GlowTone"],
      priceRange: [300, 1800],
    },
    {
      name: "Eye Cream",
      brands: ["EyeCare", "BeautyEye", "SkinEye", "EyeGlow", "BeautyCare"],
      priceRange: [600, 3500],
    },
    {
      name: "Night Cream",
      brands: ["NightGlow", "SleepBeauty", "NightCare", "BeautyNight", "SkinNight"],
      priceRange: [500, 2800],
    },
    {
      name: "Exfoliator",
      brands: ["SkinScrub", "GentleExfoliate", "SkinPolish", "BeautyExfoliate", "SkinRenew"],
      priceRange: [400, 2200],
    },

    // Makeup (80+ variations)
    {
      name: "Foundation",
      brands: ["PerfectSkin", "BaseBeauty", "SkinBase", "MakeupBase", "BeautyFoundation"],
      priceRange: [600, 3500],
    },
    {
      name: "Lipstick",
      brands: ["ColorPop", "LipColor", "BeautyLips", "LipStyle", "ColorBeauty"],
      priceRange: [300, 2000],
    },
    {
      name: "Mascara",
      brands: ["EyeBeauty", "LashBeauty", "EyeMakeup", "BeautyLash", "EyeStyle"],
      priceRange: [400, 1800],
    },
    {
      name: "Eyeshadow",
      brands: ["ColorMagic", "EyeColor", "BeautyEye", "EyeStyle", "ColorEye"],
      priceRange: [500, 2500],
    },
    {
      name: "Blush",
      brands: ["CheekGlow", "BeautyBlush", "CheekColor", "GlowCheek", "BeautyGlow"],
      priceRange: [400, 1800],
    },
    {
      name: "Concealer",
      brands: ["CoverBeauty", "SkinCover", "BeautyCover", "PerfectCover", "MakeupCover"],
      priceRange: [300, 1500],
    },
    {
      name: "Eyeliner",
      brands: ["EyeLine", "BeautyLine", "EyeDefine", "LineBeauty", "EyeStyle"],
      priceRange: [250, 1200],
    },
    {
      name: "Lip Gloss",
      brands: ["GlossyLips", "LipShine", "BeautyGloss", "ShinyLips", "LipGlow"],
      priceRange: [200, 1000],
    },
    {
      name: "Primer",
      brands: ["MakeupBase", "PerfectPrimer", "SkinPrimer", "BeautyPrimer", "MakeupPrep"],
      priceRange: [400, 2000],
    },
    {
      name: "Setting Spray",
      brands: ["MakeupSet", "LongLasting", "BeautySet", "MakeupFix", "BeautyFix"],
      priceRange: [300, 1500],
    },

    // Hair Care (60+ variations)
    {
      name: "Shampoo",
      brands: ["HairCare", "SilkyHair", "HairStyle", "BeautyHair", "HairPerfect"],
      priceRange: [300, 1500],
    },
    {
      name: "Conditioner",
      brands: ["SoftHair", "HairSoft", "SilkyHair", "HairCare", "BeautyHair"],
      priceRange: [300, 1500],
    },
    {
      name: "Hair Oil",
      brands: ["HairNourish", "SilkyOil", "HairTreatment", "BeautyOil", "HairCare"],
      priceRange: [200, 1200],
    },
    {
      name: "Hair Serum",
      brands: ["SilkyHair", "HairGlow", "BeautyHair", "HairStyle", "SilkySerum"],
      priceRange: [400, 2000],
    },
    {
      name: "Hair Mask",
      brands: ["HairTreat", "BeautyHair", "HairCare", "SilkyTreat", "HairNourish"],
      priceRange: [300, 1800],
    },
    {
      name: "Hair Spray",
      brands: ["HairStyle", "HairHold", "StyleSpray", "HairFix", "BeautySpray"],
      priceRange: [250, 1200],
    },

    // Fragrance & Personal Care (60+ variations)
    {
      name: "Perfume",
      brands: ["FragranceArt", "ScentStyle", "PerfumeHouse", "AromaBeauty", "ElegantScent"],
      priceRange: [1000, 8000],
    },
    {
      name: "Body Spray",
      brands: ["BodyScent", "FreshSpray", "BeautySpray", "ScentBody", "AromaSpray"],
      priceRange: [300, 1500],
    },
    {
      name: "Deodorant",
      brands: ["FreshBody", "BodyFresh", "BeautyFresh", "ScentFresh", "BodyCare"],
      priceRange: [200, 800],
    },
    {
      name: "Body Lotion",
      brands: ["SoftSkin", "BodyCare", "SkinSoft", "BeautyBody", "BodyBeauty"],
      priceRange: [300, 1500],
    },
    {
      name: "Hand Cream",
      brands: ["HandCare", "SoftHands", "BeautyHands", "HandBeauty", "SkinHands"],
      priceRange: [200, 1000],
    },
    { name: "Lip Balm", brands: ["LipCare", "SoftLips", "BeautyLips", "LipBeauty", "LipSoft"], priceRange: [100, 500] },
    {
      name: "Body Wash",
      brands: ["BodyClean", "SkinClean", "BeautyWash", "BodyCare", "FreshBody"],
      priceRange: [250, 1200],
    },
  ],

  electronics: [
    // Mobile & Accessories (80+ variations)
    {
      name: "Smartphone",
      brands: ["TechPhone", "SmartMobile", "PhoneTech", "MobilePro", "TechSmart"],
      priceRange: [8000, 80000],
    },
    {
      name: "Phone Case",
      brands: ["PhoneProtect", "CaseStyle", "MobileCase", "PhoneCare", "TechCase"],
      priceRange: [200, 1500],
    },
    {
      name: "Screen Protector",
      brands: ["ScreenSafe", "PhoneProtect", "DisplayCare", "ScreenCare", "TechProtect"],
      priceRange: [100, 800],
    },
    {
      name: "Charger",
      brands: ["PowerTech", "ChargeMaster", "PowerPro", "TechCharge", "FastCharge"],
      priceRange: [300, 2000],
    },
    {
      name: "Power Bank",
      brands: ["PowerBank", "ChargeMaster", "BatteryPro", "PowerTech", "MobilePower"],
      priceRange: [800, 4000],
    },
    {
      name: "Earphones",
      brands: ["SoundTech", "AudioPro", "MusicTech", "SoundMaster", "AudioStyle"],
      priceRange: [500, 5000],
    },
    {
      name: "Bluetooth Speaker",
      brands: ["SoundWave", "AudioTech", "MusicBox", "SoundPro", "AudioMaster"],
      priceRange: [1000, 8000],
    },
    {
      name: "Wireless Earbuds",
      brands: ["EarTech", "AudioBuds", "SoundBuds", "TechEar", "WirelessEar"],
      priceRange: [1500, 12000],
    },
    {
      name: "Phone Stand",
      brands: ["PhoneStand", "MobileStand", "TechStand", "PhoneHolder", "MobileHolder"],
      priceRange: [200, 1000],
    },
    {
      name: "Car Charger",
      brands: ["CarTech", "AutoCharge", "CarPower", "VehicleCharge", "AutoTech"],
      priceRange: [300, 1500],
    },

    // Computer & Gaming (80+ variations)
    {
      name: "Laptop",
      brands: ["TechBook", "ComputerPro", "LaptopMaster", "TechLaptop", "PCPro"],
      priceRange: [25000, 150000],
    },
    {
      name: "Desktop PC",
      brands: ["PCMaster", "ComputerPro", "TechPC", "DesktopPro", "ComputerTech"],
      priceRange: [30000, 200000],
    },
    {
      name: "Monitor",
      brands: ["DisplayTech", "ScreenPro", "ViewMaster", "TechDisplay", "ScreenTech"],
      priceRange: [8000, 50000],
    },
    { name: "Keyboard", brands: ["TypeTech", "KeyMaster", "InputPro", "TechKeys", "TypePro"], priceRange: [500, 5000] },
    {
      name: "Mouse",
      brands: ["ClickTech", "MousePro", "TechMouse", "ClickMaster", "InputTech"],
      priceRange: [300, 3000],
    },
    { name: "Gaming Mouse", brands: ["GameTech", "InputTech"], priceRange: [300, 3000] },
    {
      name: "Gaming Mouse",
      brands: ["GameTech", "GamerPro", "PlayTech", "GameMaster", "GamingStyle"],
      priceRange: [800, 6000],
    },
    {
      name: "Gaming Keyboard",
      brands: ["GameKeys", "GamerTech", "PlayKeys", "GameInput", "GamingPro"],
      priceRange: [1200, 8000],
    },
    { name: "Webcam", brands: ["VideoTech", "CamPro", "WebCam", "VideoMaster", "TechCam"], priceRange: [1500, 8000] },
    {
      name: "Microphone",
      brands: ["AudioTech", "SoundPro", "MicMaster", "VoiceTech", "AudioMaster"],
      priceRange: [1000, 10000],
    },
    {
      name: "USB Hub",
      brands: ["ConnectTech", "USBPro", "TechHub", "ConnectMaster", "PortTech"],
      priceRange: [500, 2500],
    },
    {
      name: "External Hard Drive",
      brands: ["StorageTech", "DataPro", "TechStorage", "StorageMaster", "DataTech"],
      priceRange: [2000, 15000],
    },
    {
      name: "Graphics Card",
      brands: ["GraphicsPro", "GPUTech", "VisualTech", "GraphicsMaster", "DisplayPro"],
      priceRange: [15000, 100000],
    },
    {
      name: "RAM Memory",
      brands: ["MemoryTech", "RAMPro", "TechMemory", "MemoryMaster", "SpeedRAM"],
      priceRange: [2000, 20000],
    },
    {
      name: "SSD Drive",
      brands: ["SpeedStorage", "SSDTech", "FastDrive", "TechSSD", "StorageSpeed"],
      priceRange: [2500, 25000],
    },

    // Smart Home & Audio (60+ variations)
    {
      name: "Smart TV",
      brands: ["SmartScreen", "TechTV", "SmartDisplay", "ViewTech", "TechVision"],
      priceRange: [15000, 100000],
    },
    {
      name: "Smart Speaker",
      brands: ["SmartSound", "VoiceTech", "SmartAudio", "TechVoice", "SmartHome"],
      priceRange: [2000, 15000],
    },
    {
      name: "Smart Light",
      brands: ["SmartGlow", "TechLight", "SmartBright", "LightTech", "SmartIlluminate"],
      priceRange: [500, 3000],
    },
    {
      name: "Security Camera",
      brands: ["SecureTech", "SafeWatch", "TechSecurity", "WatchPro", "SecureView"],
      priceRange: [2000, 12000],
    },
    {
      name: "Smart Doorbell",
      brands: ["SmartEntry", "DoorTech", "SmartDoor", "EntryTech", "TechDoor"],
      priceRange: [3000, 15000],
    },
    {
      name: "Headphones",
      brands: ["TechSound", "AudioPro", "SoundMaster", "TechAudio", "SoundTech"],
      priceRange: [1000, 15000],
    },
    {
      name: "Wireless Headphones",
      brands: ["WirelessSound", "TechWireless", "AudioWireless", "SoundFree", "WirelessPro"],
      priceRange: [1500, 20000],
    },
    {
      name: "Soundbar",
      brands: ["SoundBar", "AudioBar", "TechSound", "SoundPro", "AudioTech"],
      priceRange: [3000, 25000],
    },
    {
      name: "Home Theater",
      brands: ["TheaterTech", "SurroundSound", "HomeAudio", "TheaterPro", "AudioTheater"],
      priceRange: [10000, 80000],
    },

    // Wearables & Gadgets (40+ variations)
    {
      name: "Smart Watch",
      brands: ["WearTech", "SmartTime", "TechWatch", "WearPro", "SmartWear"],
      priceRange: [3000, 25000],
    },
    {
      name: "Fitness Tracker",
      brands: ["FitTech", "HealthTrack", "WearFit", "FitnessPro", "HealthTech"],
      priceRange: [1500, 8000],
    },
    {
      name: "VR Headset",
      brands: ["VRTech", "VirtualPro", "TechVR", "VRMaster", "VirtualTech"],
      priceRange: [8000, 50000],
    },
    { name: "Drone", brands: ["FlyTech", "AirPro", "DroneMaster", "SkyTech", "AerialTech"], priceRange: [5000, 80000] },
    {
      name: "Action Camera",
      brands: ["ActionPro", "AdventureCam", "SportsCam", "ActionTech", "ExtremeCam"],
      priceRange: [3000, 25000],
    },
  ],

  studio: [
    // Photography Equipment (80+ variations)
    {
      name: "Professional Camera",
      brands: ["PhotoPro", "CameraMaster", "ShootTech", "ImagePro", "PhotoCraft"],
      priceRange: [25000, 200000],
    },
    {
      name: "Camera Lens",
      brands: ["LensMaster", "OpticalPro", "LensCraft", "VisionLens", "PhotoLens"],
      priceRange: [8000, 80000],
    },
    {
      name: "Tripod Stand",
      brands: ["StudioGear", "StandPro", "TripodMaster", "StableTech", "PhotoStand"],
      priceRange: [1500, 15000],
    },
    {
      name: "Camera Flash",
      brands: ["FlashPro", "LightFlash", "StudioFlash", "PhotoFlash", "BrightFlash"],
      priceRange: [3000, 25000],
    },
    {
      name: "Camera Bag",
      brands: ["PhotoBag", "CameraCare", "ProtectGear", "PhotoCarry", "CameraCase"],
      priceRange: [1000, 8000],
    },
    {
      name: "Memory Card",
      brands: ["StorageCard", "MemoryPro", "DataCard", "PhotoStorage", "ImageCard"],
      priceRange: [500, 5000],
    },
    {
      name: "Camera Battery",
      brands: ["PowerPhoto", "CameraPower", "PhotoBattery", "LongLife", "PowerPro"],
      priceRange: [800, 4000],
    },
    {
      name: "Camera Filter",
      brands: ["FilterPro", "LensFilter", "PhotoFilter", "OpticalFilter", "ImageFilter"],
      priceRange: [500, 3000],
    },
    {
      name: "Camera Remote",
      brands: ["RemoteShoot", "WirelessShoot", "PhotoRemote", "ShootControl", "CameraControl"],
      priceRange: [800, 3500],
    },
    {
      name: "Camera Strap",
      brands: ["ComfortStrap", "PhotoStrap", "CameraCarry", "StrapStyle", "PhotoComfort"],
      priceRange: [300, 1500],
    },

    // Lighting Equipment (60+ variations)
    {
      name: "Studio Lighting Kit",
      brands: ["LightStudio", "StudioPro", "PhotoLight", "BrightStudio", "LightCraft"],
      priceRange: [5000, 50000],
    },
    {
      name: "LED Panel Light",
      brands: ["LEDPro", "BrightPanel", "StudioLED", "LightPanel", "PhotoLED"],
      priceRange: [2000, 15000],
    },
    {
      name: "Softbox Light",
      brands: ["SoftLight", "StudioSoft", "DiffuseLight", "PhotoSoft", "LightDiffuse"],
      priceRange: [1500, 12000],
    },
    {
      name: "Ring Light",
      brands: ["RingPro", "CircleLight", "PortraitLight", "BeautyLight", "PhotoRing"],
      priceRange: [1000, 8000],
    },
    {
      name: "Light Stand",
      brands: ["StandLight", "LightSupport", "StudioStand", "PhotoStand", "LightMount"],
      priceRange: [800, 5000],
    },
    {
      name: "Reflector",
      brands: ["ReflectPro", "LightReflect", "PhotoReflect", "StudioReflect", "BounceLight"],
      priceRange: [500, 3000],
    },
    {
      name: "Umbrella Light",
      brands: ["UmbrellaLight", "DiffuseUmbrella", "PhotoUmbrella", "StudioUmbrella", "LightUmbrella"],
      priceRange: [600, 4000],
    },
    {
      name: "Background Light",
      brands: ["BackLight", "StudioBack", "PhotoBack", "BackgroundPro", "LightBack"],
      priceRange: [1200, 8000],
    },

    // Audio Equipment (60+ variations)
    {
      name: "Professional Microphone",
      brands: ["AudioStudio", "MicPro", "StudioMic", "RecordPro", "AudioMaster"],
      priceRange: [3000, 30000],
    },
    {
      name: "Audio Interface",
      brands: ["AudioTech", "RecordInterface", "StudioInterface", "AudioPro", "SoundInterface"],
      priceRange: [5000, 40000],
    },
    {
      name: "Studio Monitors",
      brands: ["MonitorPro", "StudioSound", "AudioMonitor", "SoundMonitor", "StudioSpeaker"],
      priceRange: [8000, 60000],
    },
    {
      name: "Headphones Studio",
      brands: ["StudioHead", "AudioHead", "MonitorHead", "RecordHead", "StudioListen"],
      priceRange: [2000, 20000],
    },
    {
      name: "Microphone Stand",
      brands: ["MicStand", "AudioStand", "StudioStand", "MicSupport", "RecordStand"],
      priceRange: [800, 4000],
    },
    {
      name: "Pop Filter",
      brands: ["AudioFilter", "MicFilter", "VoiceFilter", "RecordFilter", "StudioFilter"],
      priceRange: [300, 1500],
    },
    {
      name: "Audio Cable",
      brands: ["AudioCable", "StudioCable", "RecordCable", "SoundCable", "AudioConnect"],
      priceRange: [200, 2000],
    },
    {
      name: "Mixer Console",
      brands: ["MixPro", "AudioMix", "StudioMix", "SoundMix", "RecordMix"],
      priceRange: [8000, 80000],
    },

    // Video Equipment (60+ variations)
    {
      name: "Video Camera",
      brands: ["VideoPro", "FilmMaster", "RecordPro", "VideoTech", "FilmCraft"],
      priceRange: [15000, 150000],
    },
    {
      name: "Video Tripod",
      brands: ["VideoStand", "FilmStand", "CameraStand", "VideoSupport", "FilmSupport"],
      priceRange: [2000, 20000],
    },
    {
      name: "Video Light",
      brands: ["VideoLight", "FilmLight", "RecordLight", "VideoLED", "FilmLED"],
      priceRange: [1500, 15000],
    },
    {
      name: "Green Screen",
      brands: ["ChromaKey", "GreenBack", "VideoBack", "FilmBack", "StudioBack"],
      priceRange: [1000, 8000],
    },
    {
      name: "Video Microphone",
      brands: ["VideoMic", "FilmMic", "RecordMic", "VideoAudio", "FilmAudio"],
      priceRange: [2000, 15000],
    },
    {
      name: "Video Monitor",
      brands: ["VideoScreen", "FilmMonitor", "RecordMonitor", "VideoDisplay", "FilmDisplay"],
      priceRange: [5000, 40000],
    },
    {
      name: "Video Slider",
      brands: ["CameraSlider", "VideoSlide", "FilmSlider", "SmoothSlide", "VideoTrack"],
      priceRange: [3000, 25000],
    },
    {
      name: "Video Stabilizer",
      brands: ["SteadyCam", "VideoStable", "FilmStable", "CameraStable", "SmoothVideo"],
      priceRange: [5000, 50000],
    },

    // Creative Tools (40+ variations)
    {
      name: "Graphics Tablet",
      brands: ["DrawTech", "ArtPad", "DesignPad", "CreativePad", "ArtTech"],
      priceRange: [3000, 30000],
    },
    {
      name: "Digital Pen",
      brands: ["ArtPen", "DesignPen", "CreativePen", "DrawPen", "DigitalArt"],
      priceRange: [1000, 8000],
    },
    {
      name: "Color Calibrator",
      brands: ["ColorPro", "CalibrateTech", "ColorMaster", "DisplayCal", "ColorTech"],
      priceRange: [5000, 25000],
    },
    {
      name: "Light Meter",
      brands: ["LightMeter", "ExposurePro", "PhotoMeter", "LightMeasure", "StudioMeter"],
      priceRange: [2000, 12000],
    },
    {
      name: "Color Checker",
      brands: ["ColorCheck", "ColorCard", "ColorRef", "ColorStandard", "ColorGuide"],
      priceRange: [1000, 5000],
    },
    {
      name: "Studio Chair",
      brands: ["StudioSeat", "CreativeChair", "ArtistChair", "StudioComfort", "WorkChair"],
      priceRange: [2000, 15000],
    },
    {
      name: "Storage Cabinet",
      brands: ["StudioStorage", "GearStorage", "EquipmentStore", "StudioOrganize", "CreativeStorage"],
      priceRange: [3000, 20000],
    },
    {
      name: "Backdrop Stand",
      brands: ["BackdropPro", "StudioBack", "PhotoBack", "BackgroundStand", "StudioSupport"],
      priceRange: [1500, 10000],
    },
  ],
}

// Color schemes for each category
const enhancedColorSchemes = {
  men: [
    "4F46E5",
    "1E40AF",
    "7C3AED",
    "059669",
    "DC2626",
    "EA580C",
    "0891B2",
    "7C2D12",
    "A21CAF",
    "374151",
    "1F2937",
    "312E81",
    "6B21A8",
    "111827",
    "365314",
    "92400E",
    "0F766E",
  ],
  women: [
    "EC4899",
    "A855F7",
    "DC2626",
    "10B981",
    "F59E0B",
    "8B5CF6",
    "EF4444",
    "06B6D4",
    "BE185D",
    "7C3AED",
    "F472B6",
    "C2410C",
    "7C2D12",
    "059669",
    "1E40AF",
  ],
  kids: [
    "F59E0B",
    "EC4899",
    "DC2626",
    "1E40AF",
    "374151",
    "10B981",
    "A855F7",
    "EF4444",
    "365314",
    "7C2D12",
    "059669",
    "F472B6",
    "8B5CF6",
    "C2410C",
  ],
  home: [
    "F59E0B",
    "10B981",
    "7C3AED",
    "EC4899",
    "DC2626",
    "06B6D4",
    "92400E",
    "059669",
    "7C2D12",
    "374151",
    "A855F7",
    "EF4444",
    "1E40AF",
  ],
  beauty: [
    "F472B6",
    "DC2626",
    "F59E0B",
    "92400E",
    "A855F7",
    "10B981",
    "8B5CF6",
    "EC4899",
    "EF4444",
    "059669",
    "BE185D",
    "C2410C",
    "7C3AED",
  ],
  electronics: [
    "1F2937",
    "374151",
    "059669",
    "DC2626",
    "1E40AF",
    "7C2D12",
    "F59E0B",
    "7C3AED",
    "111827",
    "6B21A8",
    "312E81",
    "0F766E",
  ],
  studio: [
    "4F46E5",
    "1F2937",
    "7C3AED",
    "DC2626",
    "F59E0B",
    "059669",
    "8B5CF6",
    "374151",
    "EC4899",
    "1E40AF",
    "A855F7",
    "EF4444",
  ],
}

// Function to generate products for a specific category
function generateCategoryProducts(category, targetCount = 300) {
  const templates = enhancedProductTemplates[category]
  const colors = enhancedColorSchemes[category]
  const products = []
  let currentId = 1000 + Object.keys(enhancedProductTemplates).indexOf(category) * 1000

  for (let i = 0; i < targetCount; i++) {
    const template = templates[i % templates.length]
    const brand = template.brands[i % template.brands.length]
    const color = colors[i % colors.length]

    // Generate realistic pricing
    const minPrice = template.priceRange[0]
    const maxPrice = template.priceRange[1]
    const basePrice = Math.floor(Math.random() * (maxPrice - minPrice) + minPrice)
    const originalPrice = Math.floor(basePrice * (1.25 + Math.random() * 0.4))
    const discount = Math.floor(((originalPrice - basePrice) / originalPrice) * 100)

    // Generate product variation name
    const variationNumber = Math.floor(i / template.brands.length) + 1
    const productName = `${template.name} ${variationNumber}`

    const product = {
      id: currentId++,
      name: productName,
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

// Generate all products
console.log("🚀 Starting comprehensive product generation...")

const allGeneratedProducts = []
const categoryStats = {}

Object.keys(enhancedProductTemplates).forEach((category) => {
  console.log(`📦 Generating products for ${category}...`)
  const categoryProducts = generateCategoryProducts(category, 300)
  allGeneratedProducts.push(...categoryProducts)
  categoryStats[category] = categoryProducts.length
  console.log(`✅ Generated ${categoryProducts.length} products for ${category}`)
})

console.log("\n🎉 Product Generation Complete!")
console.log("📊 Category Statistics:")
Object.entries(categoryStats).forEach(([category, count]) => {
  console.log(`   ${category}: ${count} products`)
})
console.log(`📈 Total products generated: ${allGeneratedProducts.length}`)

// Export the generated products
module.exports = {
  allGeneratedProducts,
  categoryStats,
  enhancedProductTemplates,
  enhancedColorSchemes,
}

console.log("\n🎨 All products now have:")
console.log("   ✓ Category-specific images with proper colors")
console.log("   ✓ Realistic pricing based on product type")
console.log("   ✓ Varied brands and product names")
console.log("   ✓ Proper ratings and review counts")
console.log("   ✓ 300+ items per category")
console.log("\n🛍️ Ready for Synapse Shop!")
