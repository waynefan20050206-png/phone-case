// Product Data
const products = [
  {
    id: 1,
    name: "Midnight Marble",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80",
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&q=80",
    ],
    salePrice: 24.99,
    originalPrice: 39.99,
    discount: 37,
    rating: 5,
    reviews: 128,
    compatibleModels: "iPhone 14, 15, 16",
    description:
      "Premium marble-textured case with military-grade drop protection. Features raised edges for screen and camera protection.",
    features: [
      "Military-grade drop protection",
      "Wireless charging compatible",
      "Raised bezels for screen protection",
      "Easy grip textured finish",
      "Slim and lightweight design",
    ],
  },
  {
    id: 2,
    name: "Ocean Breeze Clear",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&q=80",
    ],
    salePrice: 19.99,
    originalPrice: 34.99,
    discount: 43,
    rating: 4,
    reviews: 89,
    compatibleModels: "iPhone 13, 14, 15",
    description: "Crystal clear case that shows off your iPhone while providing excellent protection.",
    features: [
      "Crystal clear transparency",
      "Anti-yellowing material",
      "Shock-absorbent corners",
      "Wireless charging compatible",
      "Slim profile design",
    ],
  },
  {
    id: 3,
    name: "Carbon Fiber Pro",
    image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&q=80",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80",
    ],
    salePrice: 29.99,
    originalPrice: 49.99,
    discount: 40,
    rating: 5,
    reviews: 256,
    compatibleModels: "iPhone 15 Pro, 16 Pro",
    description: "Premium carbon fiber design with maximum durability and sleek professional look.",
    features: [
      "Real carbon fiber texture",
      "Military-grade protection",
      "Premium aluminum buttons",
      "Magnetic compatible",
      "Ultra-slim profile",
    ],
  },
  {
    id: 4,
    name: "Sunset Gradient",
    image: "https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?w=800&q=80",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80",
    ],
    salePrice: 22.99,
    originalPrice: 38.99,
    discount: 41,
    rating: 4,
    reviews: 67,
    compatibleModels: "iPhone 14, 15, 16",
    description: "Beautiful gradient design with smooth transitions and reliable protection.",
    features: [
      "Stunning gradient colors",
      "Scratch-resistant coating",
      "Comfortable grip",
      "Wireless charging compatible",
      "Lightweight design",
    ],
  },
  {
    id: 5,
    name: "Minimalist Black",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80",
    ],
    salePrice: 17.99,
    originalPrice: 29.99,
    discount: 40,
    rating: 5,
    reviews: 312,
    compatibleModels: "iPhone 12, 13, 14, 15",
    description: "Timeless minimalist black design with reliable everyday protection.",
    features: [
      "Classic matte black finish",
      "Anti-fingerprint coating",
      "Durable polycarbonate",
      "Wireless charging compatible",
      "Affordable protection",
    ],
  },
]

// Cart Data
let cartItems = [
  {
    id: 1,
    name: "Midnight Marble",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=200&q=80",
    price: 24.99,
    quantity: 2,
    model: "iPhone 15 Pro",
  },
  {
    id: 2,
    name: "Ocean Breeze Clear",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=200&q=80",
    price: 19.99,
    quantity: 1,
    model: "iPhone 14",
  },
]

// Toast Notification
function showToast(message) {
  const toast = document.getElementById("toast")
  toast.textContent = message
  toast.classList.add("show")
  setTimeout(() => {
    toast.classList.remove("show")
  }, 3000)
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  if (mobileMenu) {
    mobileMenu.classList.toggle("active")
  }
}

// Modal Functions
function showLoginModal() {
  const modal = document.getElementById("loginModal")
  if (modal) {
    modal.classList.add("active")
  }
}

function hideLoginModal() {
  const modal = document.getElementById("loginModal")
  if (modal) {
    modal.classList.remove("active")
  }
}

function showSignupModal() {
  const modal = document.getElementById("signupModal")
  if (modal) {
    modal.classList.add("active")
  }
}

function hideSignupModal() {
  const modal = document.getElementById("signupModal")
  if (modal) {
    modal.classList.remove("active")
  }
}

function switchToSignup() {
  hideLoginModal()
  showSignupModal()
}

function switchToLogin() {
  hideSignupModal()
  showLoginModal()
}

function handleLogin(event) {
  event.preventDefault()
  showToast("Login successful!")
  hideLoginModal()
}

function handleSignup(event) {
  event.preventDefault()
  showToast("Account created successfully!")
  hideSignupModal()
}

// Index Page - Render Products
function renderProducts() {
  const productsGrid = document.getElementById("productsGrid")
  if (!productsGrid) return

  products.forEach((product, index) => {
    const productCard = document.createElement("div")
    productCard.className = "product-card"
    productCard.onclick = () => (window.location.href = `product-detail.html?id=${product.id}`)

    productCard.innerHTML = `
            <div class="product-image-container">
                ${product.discount ? `<div class="product-badge">-${product.discount}%</div>` : ""}
                <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(this)">❤️</button>
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="quick-add">
                    <button class="quick-add-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        🛒 Add to Cart
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span class="review-count">(${product.reviews})</span>
                </div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-models">${product.compatibleModels}</p>
                <div class="product-price">
                    <span class="sale-price">$${product.salePrice.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ""}
                </div>
            </div>
        `

    productsGrid.appendChild(productCard)
  })
}

function generateStars(rating) {
  let stars = ""
  for (let i = 1; i <= 5; i++) {
    stars += `<span class="star ${i <= rating ? "" : "empty"}">⭐</span>`
  }
  return stars
}

function toggleWishlist(button) {
  button.classList.toggle("liked")
  const isLiked = button.classList.contains("liked")
  showToast(isLiked ? "Added to wishlist!" : "Removed from wishlist")
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  showToast(`${product.name} added to cart!`)
}

// Scroll to Products
function scrollToProducts() {
  const productsSection = document.getElementById("productsSection")
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

// Filter and Sort Functions
function handleFilter() {
  showToast("Filters applied")
}

function handleSort() {
  showToast("Products sorted")
}

// Cart Page Functions
function renderCart() {
  const cartItemsContainer = document.getElementById("cartItems")
  const cartCount = document.getElementById("cartCount")

  if (!cartItemsContainer) return

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <span style="font-size: 4rem; opacity: 0.3;">🛍️</span>
                <h2 style="font-size: 1.5rem; font-weight: 700; margin: 1rem 0;">Your cart is empty</h2>
                <p style="color: #6b7280; margin-bottom: 1.5rem;">Add some amazing cases to get started!</p>
                <button onclick="window.location.href='index.html'" class="empty-btn">Start Shopping</button>
            </div>
        `
    return
  }

  if (cartCount) {
    cartCount.textContent = `${cartItems.length} item${cartItems.length !== 1 ? "s" : ""} in your cart`
  }

  cartItemsContainer.innerHTML = ""
  cartItems.forEach((item) => {
    const cartItem = document.createElement("div")
    cartItem.className = "cart-item"
    cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-header">
                    <h3 class="cart-item-name">${item.name}</h3>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
                </div>
                <span class="cart-item-model">${item.model}</span>
                <div class="cart-item-footer">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <div class="cart-item-price-info">
                        <p class="item-unit-price">$${item.price.toFixed(2)} each</p>
                        <p class="item-total-price">$${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        `
    cartItemsContainer.appendChild(cartItem)
  })

  updateCartTotals()
}

function updateQuantity(id, delta) {
  const item = cartItems.find((item) => item.id === id)
  if (item) {
    item.quantity = Math.max(1, item.quantity + delta)
    renderCart()
  }
}

function removeFromCart(id) {
  cartItems = cartItems.filter((item) => item.id !== id)
  showToast("Item removed from cart")
  renderCart()
}

function updateCartTotals() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`

  const shippingEl = document.getElementById("shipping")
  if (shipping === 0) {
    shippingEl.innerHTML = '<span class="free-shipping">FREE</span>'
  } else {
    shippingEl.textContent = `$${shipping.toFixed(2)}`
  }

  document.getElementById("tax").textContent = `$${tax.toFixed(2)}`
  document.getElementById("total").textContent = `$${total.toFixed(2)}`

  const shippingNotice = document.getElementById("shippingNotice")
  if (shipping > 0 && shippingNotice) {
    shippingNotice.textContent = `Add $${(50 - subtotal).toFixed(2)} more for free shipping! 🚚`
  } else if (shippingNotice) {
    shippingNotice.textContent = ""
  }
}

function applyPromoCode() {
  const promoInput = document.getElementById("promoInput")
  const code = promoInput.value.toLowerCase()

  if (code === "save10") {
    showToast("Promo code applied! 10% discount")
  } else {
    showToast("Invalid promo code")
  }
}

function handleCheckout() {
  showToast("Proceeding to checkout...")
}

// Product Detail Page
function renderProductDetail() {
  const urlParams = new URLSearchParams(window.location.search)
  const productId = Number.parseInt(urlParams.get("id"))
  const product = products.find((p) => p.id === productId)

  if (!product) return

  const container = document.getElementById("productDetail")
  if (!container) return

  const selectedImage = 0
  const quantity = 1
  const isLiked = false

  container.innerHTML = `
        <div class="product-gallery">
            <div class="main-image-container" id="mainImageContainer">
                ${product.discount ? `<div class="discount-badge">-${product.discount}% OFF</div>` : ""}
                <img src="${product.images[0]}" alt="${product.name}" class="main-image" id="mainImage">
            </div>
            <div class="thumbnails" id="thumbnails">
                ${product.images
                  .map(
                    (img, i) => `
                    <div class="thumbnail ${i === 0 ? "active" : ""}" onclick="selectImage(${i})">
                        <img src="${img}" alt="View ${i + 1}">
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
        
        <div class="product-detail-info">
            <div>
                <h1 class="detail-title">${product.name}</h1>
                <div class="detail-rating">
                    <div class="rating-stars">${generateStars(product.rating)}</div>
                    <span class="rating-text">${product.rating}.0 (${product.reviews} reviews)</span>
                </div>
                <div class="detail-price">
                    <span class="detail-sale-price">$${product.salePrice.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="detail-original-price">$${product.originalPrice.toFixed(2)}</span>` : ""}
                </div>
                <div class="stock-status">✓ In Stock</div>
            </div>
            
            <div class="detail-description">
                ${product.description}
            </div>
            
            <div class="compatible-models">
                <h3 class="compatible-label">Compatible with:</h3>
                <div class="model-badges">
                    ${product.compatibleModels
                      .split(", ")
                      .map(
                        (model) => `
                        <span class="model-badge">${model}</span>
                    `,
                      )
                      .join("")}
                </div>
            </div>
            
            <div class="features-list">
                <h3 class="features-label">Key Features:</h3>
                ${product.features
                  .map(
                    (feature) => `
                    <div class="feature-item">✓ ${feature}</div>
                `,
                  )
                  .join("")}
            </div>
            
            <div class="quantity-selector">
                <span class="quantity-label">Quantity:</span>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="changeQuantity(-1)">−</button>
                    <span class="quantity-value" id="quantityValue">1</span>
                    <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                </div>
            </div>
            
            <div class="action-buttons">
                <button class="add-to-cart-btn" onclick="addProductToCart()">
                    🛒 Add to Cart
                </button>
                <button class="wishlist-btn-detail" id="wishlistBtn" onclick="toggleProductWishlist()">
                    ❤️
                </button>
            </div>
            
            <button class="buy-now-btn" onclick="buyNow()">Buy Now</button>
            
            <div class="trust-section">
                <div class="trust-badge-item">
                    <div class="trust-icon">🛡️</div>
                    <p class="trust-text">2 Year Warranty</p>
                </div>
                <div class="trust-badge-item">
                    <div class="trust-icon">🚚</div>
                    <p class="trust-text">Free Shipping</p>
                </div>
                <div class="trust-badge-item">
                    <div class="trust-icon">🔄</div>
                    <p class="trust-text">30-Day Returns</p>
                </div>
            </div>
        </div>
    `
}

let currentQuantity = 1
let currentImageIndex = 0

function selectImage(index) {
  currentImageIndex = index
  const urlParams = new URLSearchParams(window.location.search)
  const productId = Number.parseInt(urlParams.get("id"))
  const product = products.find((p) => p.id === productId)

  document.getElementById("mainImage").src = product.images[index]

  document.querySelectorAll(".thumbnail").forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index)
  })
}

function changeQuantity(delta) {
  currentQuantity = Math.max(1, currentQuantity + delta)
  document.getElementById("quantityValue").textContent = currentQuantity
}

function addProductToCart() {
  const urlParams = new URLSearchParams(window.location.search)
  const productId = Number.parseInt(urlParams.get("id"))
  const product = products.find((p) => p.id === productId)
  showToast(`${currentQuantity} × ${product.name} added to cart!`)
}

function toggleProductWishlist() {
  const btn = document.getElementById("wishlistBtn")
  btn.classList.toggle("liked")
  const isLiked = btn.classList.contains("liked")
  showToast(isLiked ? "Added to wishlist!" : "Removed from wishlist")
}

function buyNow() {
  showToast("Proceeding to checkout...")
}

// Personalize Page Functions
let currentColor = "#FF6B35"
let uploadedImage = null

function selectColor(color, button) {
  currentColor = color
  document.querySelectorAll(".color-btn").forEach((btn) => btn.classList.remove("active"))
  button.classList.add("active")

  const preview = document.getElementById("phonePreview")
  preview.style.background = color
}

function handleImageUpload(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      uploadedImage = e.target.result
      const previewContent = document.getElementById("previewContent")
      previewContent.innerHTML = `<img src="${e.target.result}" alt="Custom design" class="preview-image">`
      document.getElementById("uploadText").textContent = "Change Image"
      showToast("Image uploaded successfully!")
    }
    reader.readAsDataURL(file)
  }
}

function updatePreviewText() {
  const textInput = document.getElementById("textInput")
  const previewText = document.getElementById("previewText")
  const charCount = document.getElementById("charCount")

  previewText.textContent = textInput.value
  charCount.textContent = textInput.value.length
}

function addCustomToCart() {
  const modelSelect = document.getElementById("modelSelect")
  if (!modelSelect.value) {
    showToast("Please select an iPhone model")
    return
  }
  showToast("Custom case added to cart!")
}

// Profile Page Functions
function switchTab(tabName) {
  document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"))
  document.querySelectorAll(".tab-content").forEach((content) => content.classList.remove("active"))

  event.target.classList.add("active")
  document.getElementById(tabName + "Tab").classList.add("active")
}

let isEditing = false

function toggleEdit() {
  isEditing = !isEditing
  const inputs = document.querySelectorAll(".form-input")
  const editBtn = document.getElementById("editBtn")

  inputs.forEach((input) => (input.disabled = !isEditing))

  if (isEditing) {
    editBtn.textContent = "Save"
    editBtn.classList.add("save")
  } else {
    editBtn.textContent = "Edit Profile"
    editBtn.classList.remove("save")
    showToast("Profile updated successfully!")
  }
}

function handleLogout() {
  showToast("Logged out successfully")
}

// Initialize page-specific functions
document.addEventListener("DOMContentLoaded", () => {
  // Render products on index page
  if (document.getElementById("productsGrid")) {
    renderProducts()
  }

  // Close modals on background click
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active")
      }
    })
  })
})
