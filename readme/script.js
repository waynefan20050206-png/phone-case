// 全局狀態
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let userProfile = JSON.parse(localStorage.getItem('userProfile')) || {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  address: '123 Main Street, New York, NY 10001'
};

// Toast 提示系統
const Toast = {
  show(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '2rem';
    toast.style.right = '2rem';
    toast.style.padding = '1rem 1.5rem';
    toast.style.background = type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#1f2937';
    toast.style.color = 'white';
    toast.style.borderRadius = '0.75rem';
    toast.style.zIndex = '1000';
    toast.style.animation = 'slideUp 0.3s ease';
    toast.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'fadeOut 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
};

// 購物車功能
const CartManager = {
  addItem(product, quantity = 1) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        ...product,
        quantity
      });
    }
    
    this.save();
    this.updateBadge();
    Toast.show(`${quantity} × ${product.name} added to cart!`, 'success');
  },
  
  removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    this.save();
    this.updateBadge();
  },
  
  updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
      item.quantity = Math.max(1, item.quantity + delta);
      this.save();
    }
  },
  
  getTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  save() {
    localStorage.setItem('cart', JSON.stringify(cart));
  },
  
  updateBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      badge.textContent = totalItems;
      badge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
  }
};

// 願望清單功能
const WishlistManager = {
  toggle(product) {
    const index = wishlist.findIndex(item => item.id === product.id);
    
    if (index > -1) {
      wishlist.splice(index, 1);
      Toast.show('Removed from wishlist', 'info');
    } else {
      wishlist.push(product);
      Toast.show('Added to wishlist!', 'success');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    return index === -1; // 返回是否已添加
  },
  
  isInWishlist(productId) {
    return wishlist.some(item => item.id === productId);
  }
};

// 產品數據
const products = [
  {
    id: 1,
    name: 'Midnight Marble',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80',
    salePrice: 24.99,
    originalPrice: 39.99,
    discount: 37,
    rating: 5,
    reviews: 128,
    compatibleModels: ['iPhone 16', 'iPhone 15', 'iPhone 14'],
    description: 'Premium marble-textured case with military-grade drop protection.',
    features: [
      'Military-grade drop protection',
      'Wireless charging compatible',
      'Raised bezels for screen protection',
      'Easy grip textured finish',
      'Slim and lightweight design'
    ]
  },
  {
    id: 2,
    name: 'Ocean Breeze Clear',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&q=80',
    salePrice: 19.99,
    originalPrice: 34.99,
    discount: 43,
    rating: 4,
    reviews: 89,
    compatibleModels: ['iPhone 13', 'iPhone 14', 'iPhone 15'],
    description: 'Crystal clear case with ocean-inspired gradient design.',
    features: [
      'Scratch-resistant',
      'Yellowing protection',
      'Wireless charging compatible',
      'Easy installation',
      'Crystal clear'
    ]
  }
];

// 頁面初始化
document.addEventListener('DOMContentLoaded', function() {
  // 初始化購物車標記
  CartManager.updateBadge();
  
  // 產品卡片互動
  document.querySelectorAll('.product-card').forEach(card => {
    const productId = parseInt(card.dataset.productId);
    const product = products.find(p => p.id === productId);
    
    if (product) {
      // 添加到購物車按鈕
      const addToCartBtn = card.querySelector('.add-to-cart');
      if (addToCartBtn) {
        addToCartBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          CartManager.addItem(product, 1);
        });
      }
      
      // 願望清單按鈕
      const wishlistBtn = card.querySelector('.wishlist-btn');
      if (wishlistBtn) {
        const heartIcon = wishlistBtn.querySelector('i');
        if (WishlistManager.isInWishlist(product.id)) {
          heartIcon.classList.remove('far');
          heartIcon.classList.add('fas', 'text-red-500');
        }
        
        wishlistBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const added = WishlistManager.toggle(product);
          if (added) {
            heartIcon.classList.remove('far');
            heartIcon.classList.add('fas', 'text-red-500');
          } else {
            heartIcon.classList.remove('fas', 'text-red-500');
            heartIcon.classList.add('far');
          }
        });
      }
      
      // 點擊查看詳情
      card.addEventListener('click', () => {
        window.location.href = `product-detail.html?id=${product.id}`;
      });
    }
  });
  
  // 表單提交處理
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 簡單的表單驗證
      const inputs = this.querySelectorAll('input[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#ef4444';
        } else {
          input.style.borderColor = '';
        }
      });
      
      if (isValid) {
        Toast.show('Form submitted successfully!', 'success');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1500);
      } else {
        Toast.show('Please fill in all required fields', 'error');
      }
    });
  });
  
  // 數量選擇器
  document.querySelectorAll('.quantity-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const input = this.parentElement.querySelector('.quantity-input');
      let value = parseInt(input.value);
      
      if (this.classList.contains('decrement')) {
        value = Math.max(1, value - 1);
      } else {
        value += 1;
      }
      
      input.value = value;
    });
  });
  
  // 模態框控制
  const openModalBtns = document.querySelectorAll('[data-modal]');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');
  
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'flex';
    });
  });
  
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) modal.style.display = 'none';
    });
  });
  
  // 關閉模態框當點擊背景
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  
  // 導航選單切換
  const mobileMenuBtn = document.querySelector('[data-mobile-menu]');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});