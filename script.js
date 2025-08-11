const products = [
  // Rifles (20 products)
  { id: 1, type: 'Rifle', name: 'Tokyo Marui M4A1 SOPMOD', price: 349.99, image: 'img/products/rifle1.jpeg' },
  { id: 2, type: 'Rifle', name: 'G&G CM16 Raider 2.0', price: 199.99, image: 'img/products/rifle2.jpeg' },
  { id: 3, type: 'Rifle', name: 'Krytac Trident MK2 CRB', price: 379.99, image: 'img/products/rifle3.jpeg' },
  { id: 4, type: 'Rifle', name: 'VFC Avalon Calibur Carbine', price: 429.99, image: 'img/products/rifle4.jpeg' },
  { id: 5, type: 'Rifle', name: 'LCT AK-74M', price: 359.99, image: 'img/products/rifle5.jpeg' },
  { id: 6, type: 'Rifle', name: 'ASG Scorpion EVO 3 A1', price: 399.99, image: 'img/products/rifle6.jpeg' },
  { id: 7, type: 'Rifle', name: 'G&G ARP9', price: 279.99, image: 'img/products/rifle7.jpeg' },
  { id: 8, type: 'Rifle', name: 'KWA Ronin TK45', price: 349.99, image: 'img/products/rifle8.jpeg' },
  { id: 9, type: 'Rifle', name: 'VFC HK416A5', price: 449.99, image: 'img/products/rifle9.jpeg' },
  { id: 10, type: 'Rifle', name: 'Elite Force M4 CQB', price: 229.99, image: 'img/products/rifle10.jpeg' },
  { id: 11, type: 'Rifle', name: 'LCT G3 SAS', price: 389.99, image: 'img/products/rifle11.jpeg' },
  { id: 12, type: 'Rifle', name: 'Krytac Vector', price: 499.99, image: 'img/products/rifle12.jpeg' },
  { id: 13, type: 'Rifle', name: 'G&G SIG 553', price: 329.99, image: 'img/products/rifle13.jpeg' },
  { id: 14, type: 'Rifle', name: 'VFC SCAR-L', price: 419.99, image: 'img/products/rifle14.jpeg' },
  { id: 15, type: 'Rifle', name: 'KWA RM4A1', price: 369.99, image: 'img/products/rifle15.jpeg' },
  { id: 16, type: 'Rifle', name: 'Tokyo Marui HK416D', price: 479.99, image: 'img/products/rifle16.jpeg' },
  { id: 17, type: 'Rifle', name: 'LCT PP-19-01 Vityaz', price: 349.99, image: 'img/products/rifle17.jpeg' },
  { id: 18, type: 'Rifle', name: 'ASG CZ Bren 805', price: 429.99, image: 'img/products/rifle18.jpeg' },
  { id: 19, type: 'Rifle', name: 'G&G F2000', price: 379.99, image: 'img/products/rifle19.jpeg' },
  { id: 20, type: 'Rifle', name: 'KWA VM4A1', price: 299.99, image: 'img/products/rifle20.jpeg' },
  { id: 21, type: 'Pistol', name: 'Tokyo Marui Hi-Capa 5.1', price: 149.99, image: 'img/products/pistol1.jpeg' },
  { id: 22, type: 'Pistol', name: 'KJW M9', price: 119.99, image: 'img/products/pistol2.jpeg' },
  { id: 23, type: 'Pistol', name: 'WE Glock 17 Gen 4', price: 129.99, image: 'img/products/pistol3.jpeg' },
  { id: 24, type: 'Pistol', name: 'ASG CZ P-09', price: 139.99, image: 'img/products/pistol4.jpeg' },
  { id: 25, type: 'Pistol', name: 'KWA HK45', price: 169.99, image: 'img/products/pistol5.jpeg' },
  { id: 26, type: 'Pistol', name: 'Tokyo Marui FN Five-seveN', price: 179.99, image: 'img/products/pistol6.jpeg' },
  { id: 27, type: 'Pistol', name: 'WE 1911 MEU', price: 109.99, image: 'img/products/pistol7.jpeg' },
  { id: 28, type: 'Pistol', name: 'KJW KP-05', price: 129.99, image: 'img/products/pistol8.jpeg' },
  { id: 29, type: 'Pistol', name: 'ASG USP Tactical', price: 149.99, image: 'img/products/pistol9.jpeg' },
  { id: 30, type: 'Pistol', name: 'VFC FNX-45', price: 189.99, image: 'img/products/pistol10.jpeg' },
  { id: 31, type: 'SMG', name: 'Tokyo Marui MP7A1', price: 299.99, image: 'img/products/smg1.jpeg' },
  { id: 32, type: 'SMG', name: 'KWA MP9', price: 279.99, image: 'img/products/smg2.jpeg' },
  { id: 33, type: 'SMG', name: 'VFC UMP45', price: 329.99, image: 'img/products/smg3.jpeg' },
  { id: 34, type: 'SMG', name: 'ASG MP5A4', price: 349.99, image: 'img/products/smg4.jpeg' },
  { id: 35, type: 'SMG', name: 'G&G ARP556', price: 289.99, image: 'img/products/smg5.jpeg' },
  { id: 36, type: 'Sniper', name: 'Tokyo Marui VSR-10', price: 249.99, image: 'img/products/sniper1.jpeg' },
  { id: 37, type: 'Sniper', name: 'CYMA CM.702B', price: 199.99, image: 'img/products/sniper2.jpeg' },
  { id: 38, type: 'Sniper', name: 'JG BAR-10', price: 179.99, image: 'img/products/sniper3.jpeg' },
  { id: 39, type: 'Sniper', name: 'Silverback SRS A2', price: 499.99, image: 'img/products/sniper4.jpeg' },
  { id: 40, type: 'Sniper', name: 'Ares Striker AS01', price: 229.99, image: 'img/products/sniper5.jpeg' },
  { id: 41, type: 'Shotgun', name: 'Tokyo Marui M870 Breacher', price: 279.99, image: 'img/products/shotgun1.jpeg' },
  { id: 42, type: 'Shotgun', name: 'CYMA CM.350L', price: 129.99, image: 'img/products/shotgun2.jpeg' },
  { id: 43, type: 'Shotgun', name: 'Golden Eagle M3 Super 90', price: 149.99, image: 'img/products/shotgun3.jpeg' },
  { id: 44, type: 'Shotgun', name: 'JAG Arms Scattergun', price: 199.99, image: 'img/products/shotgun4.jpeg' },
  { id: 45, type: 'Shotgun', name: 'Secutor Velites SPX2', price: 249.99, image: 'img/products/shotgun5.jpeg' },
  { id: 46, type: 'Accessory', name: 'Tracer Unit Xcortech X3300W', price: 89.99, image: 'img/products/accessory1.jpeg' },
  { id: 47, type: 'Accessory', name: 'Valken 1-4x28 Scope', price: 79.99, image: 'img/products/accessory2.jpeg' },
  { id: 48, type: 'Accessory', name: 'PTS Syndicate Mock Suppressor', price: 49.99, image: 'img/products/accessory3.jpeg' },
  { id: 49, type: 'Accessory', name: 'Magpul PTS MOE Grip', price: 29.99, image: 'img/products/accessory4.jpeg' },
  { id: 50, type: 'Accessory', name: 'Tactical Vest Condor MCR6', price: 119.99, image: 'img/products/accessory5.jpeg' }
];

const productsLookup = products.reduce((acc, product) => {
  acc[product.id] = product;
  return acc;
}, {});

const productsPerPage = 12;
let currentPage = 1;

const productContainer = document.getElementById('product-container');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const pageNumbersContainer = document.getElementById('page-numbers');

function renderProducts(page) {
  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;
  const pageProducts = products.slice(start, end);

  productContainer.innerHTML = pageProducts.map(product => `
    <div class="box" data-product-id="${product.id}">
      <img src="${product.image}" alt="${product.name}" onclick="window.location.href='sproduct.html?id=${product.id}'">
      <div class="des" onclick="window.location.href='sproduct.html?id=${product.id}'">
        <span>${product.type}</span>
        <h5>${product.name}</h5>
        <div class="star" aria-label="4.5 star rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-o"></i>
        </div>
        <h4>$${product.price.toFixed(2)}</h4>
      </div>
      <a href="#" class="cart" aria-label="Add to Cart"><i class="fa-solid fa-cart-shopping"></i></a>
    </div>
  `).join('');

  const totalPages = Math.ceil(products.length / productsPerPage);
  pageNumbersContainer.innerHTML = Array.from({ length: totalPages }, (_, i) => `
    <a href="#" class="${currentPage === i + 1 ? 'active' : ''}" data-page="${i + 1}">${i + 1}</a>
  `).join('');

  prevPageBtn.classList.toggle('disabled', page === 1);
  nextPageBtn.classList.toggle('disabled', page === totalPages);

  addCartEventListeners();
}

function addCartEventListeners() {
  document.querySelectorAll('.cart').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const productId = parseInt(this.closest('.box').getAttribute('data-product-id'));
      addToCart(productId);
    });
  });
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  
  const productName = productsLookup[productId].name;
  showToast(`${productName} added to cart!`);
  
  updateCartCount();
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 2000);
  }, 10);
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) {
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}

if (prevPageBtn && nextPageBtn && pageNumbersContainer) {
  prevPageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      renderProducts(currentPage);
    }
  });

  nextPageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      currentPage++;
      renderProducts(currentPage);
    }
  });

  pageNumbersContainer.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName === 'A' && e.target.dataset.page) {
      currentPage = parseInt(e.target.dataset.page);
      renderProducts(currentPage);
    }
  });
} else {
  console.error('Error: Missing pagination elements.');
}

const setupMobileMenu = () => {
  const bar = document.getElementById('bar');
  const close = document.getElementById('close');
  const nav = document.getElementById('navbar');

  if (bar && close && nav) {
    bar.addEventListener('click', (event) => {
      event.stopPropagation();
      nav.classList.toggle('active');
      bar.setAttribute('aria-expanded', nav.classList.contains('active'));
    });

    bar.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        nav.classList.toggle('active');
        bar.setAttribute('aria-expanded', nav.classList.contains('active'));
      }
    });

    close.addEventListener('click', (event) => {
      event.stopPropagation();
      nav.classList.remove('active');
      bar.setAttribute('aria-expanded', 'false');
    });

    close.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        nav.classList.remove('active');
        bar.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !bar.contains(event.target)) {
        nav.classList.remove('active');
        bar.setAttribute('aria-expanded', 'false');
      }
    });

    nav.querySelectorAll('a:not(#close)').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        bar.setAttribute('aria-expanded', 'false');
      });
    });
  } else {
    console.error('Error: Missing required elements.', {
      bar: !bar ? 'Missing #bar' : 'Found',
      close: !close ? 'Missing #close' : 'Found',
      nav: !nav ? 'Missing #navbar' : 'Found'
    });
  }
};

document.addEventListener('DOMContentLoaded', function() {
  if (productContainer) {
    renderProducts(currentPage);
  }
  
  setupMobileMenu();
  
  updateCartCount();
  
  if (!document.querySelector('style[data-toast-style]')) {
    const style = document.createElement('style');
    style.setAttribute('data-toast-style', 'true');
    style.textContent = `
      .toast {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #333;
        color: white;
        padding: 12px 24px;
        border-radius: 4px;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .toast.show {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
  }
});