import express from "express"

const PORT = process.env.PORT || 5000

const app = express()

app.get("/", (req, res) => {
  res.send("XLNC API is running!")
})

app.get("/api/products", (req, res) => {
  const products = [
    {
      name: "XLNC Stand",
      slug: "xlnc-stand",
      description: "A sleek and modern stand for your devices.",
      category: "stand",
      basePrice: 49.99,
      images: ["https://example.com/images/stand1.jpg"],
      features: ["Adjustable height", "360-degree rotation"],
      stockQuantity: 100,
      isAvailable: true,
      hasVariants: false,
    },
    {
      name: "XLNC Business Card",
      slug: "xlnc-business-card",
      description: "A stylish business card with NFC technology.",
      category: "business_card",
      basePrice: 19.99,
      images: ["https://example.com/images/business_card1.jpg"],
      features: ["NFC enabled", "Customizable design"],
      stockQuantity: 200,
      isAvailable: true,
      hasVariants: false,
    },
  ]
  res.json(products)
})

app.get("/api/categories", (req, res) => {
  const categories = [
    {
      name: "Stand",
      slug: "stand",
      description: "A variety of stands for your devices.",
      image: "https://example.com/images/stand_category.jpg",
    },
    {
      name: "Business Card",
      slug: "business_card",
      description: "Stylish business cards with NFC technology.",
      image: "https://example.com/images/business_card_category.jpg",
    },
    {
      name: "Tap Tag",
      slug: "tap_tag",
      description: "NFC-enabled tap tags for easy sharing.",
      image: "https://example.com/images/tap_tag_category.jpg",
    },
    {
      name: "Wrist Card",
      slug: "wrist_card",
      description: "Wearable wrist cards with NFC technology.",
      image: "https://example.com/images/wrist_card_category.jpg",
    },
    {
      name: "Sticker",
      slug: "sticker",
      description: "NFC-enabled stickers for versatile use.",
      image: "https://example.com/images/sticker_category.jpg",
    },
  ]
  res.json(categories)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
