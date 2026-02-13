import express from "express"

const PORT = process.env.PORT || 5000

const app = express()

app.get("/", (req, res) => {
  res.send("XLNC API is running!")
})

// Get products
app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
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
      id: 2,
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

// Post products
app.post("/api/products", (req, res) => {
  let newProduct = req.body
  newProduct.id = Date.now()
  res.status(201).json(newProduct)
})

// Put products
app.put("/api/products/:id", (req, res) => {
  const productId = req.params.id
  let updatedProduct = req.body
  updatedProduct.id = productId
  res.json(updatedProduct)
})

// Delete products
app.delete("/api/products/:id", (req, res) => {
  const productId = req.params.id
  res.json({ message: `Product with id ${productId} deleted.` })
})

// Get categories
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

// Post categories
app.post("/api/categories", (req, res) => {
  let newCategory = req.body
  newCategory.id = Date.now()
  res.status(201).json(newCategory)
})

// Put categories
app.put("/api/categories/:id", (req, res) => {
  const categoryId = req.params.id
  let updatedCategory = req.body
  updatedCategory.id = categoryId
  res.json(updatedCategory)
})

// Delete categories
app.delete("/api/categories/:id", (req, res) => {
  const categoryId = req.params.id
  res.json({ message: `Category with id ${categoryId} deleted.` })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
