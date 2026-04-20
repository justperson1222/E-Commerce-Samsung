// 1. DATA PRODUK (Lengkap dengan Gambar per Warna)
const products = [
    { 
        id: 1, 
        name: "Samsung Galaxy S26 Ultra", 
        basePrice: 21999000,
        description: "Smartphone flagship terbaik dengan Galaxy AI, Titanium Design, dan kamera 200MP yang revolusioner.",
        specs: ["Snapdragon 8 Elite Gen 5 for Galaxy (3nm).", 
                "Layar 6.9\" QHD+ (3120 x 1440), Dynamic AMOLED 2X, 120Hz, 2600 nits, Corning Gorilla Armor 2, dengan teknologi Privacy Display.", 
                "Kamera Utama 200MP (F/1.4) + 50MP Ultra Wide + 50MP Telefoto (5x optical zoom, Aperture F2.9).", 
                "Baterai 5000mAh, 60W wired charging, 20W wireless.", 
                "S-Pen Built-in, IP68, One UI 8.5 berbasis Android 16, Galaxy AI terbaru."],
        variants: [
            { label: "12/256GB", extra: 0 },
            { label: "12/512GB", extra: 2000000 },
            { label: "12/1TB", extra: 5000000 }
        ],
        colors: [
            { name: "White", hex: "#f0f0f0", image: "https://images.samsung.com/is/image/samsung/p6pim/id/s2602/gallery/id-galaxy-s26-ultra-s948-sm-s948bzwcxid-550792737?imbypass=true" },
            { name: "Black", hex: "#313132", image: "https://images.samsung.com/is/image/samsung/p6pim/id/s2602/gallery/id-galaxy-s26-ultra-s948-sm-s948bzkcxid-550792291?imbypass=true" },
            { name: "Cobalt Violet", hex: "#5d556a", image: "https://images.samsung.com/is/image/samsung/p6pim/id/s2602/gallery/id-galaxy-s26-ultra-s948-sm-s948bzvcxid-550792477?imbypass=true" },
            { name: "sky Blue", hex: "#b2c7d6", image: "https://images.samsung.com/is/image/samsung/p6pim/id/s2602/gallery/id-galaxy-s26-ultra-s948-sm-s948blbcxid-550792069?imbypass=true" }
        ]
    },
    { 
        id: 2, 
        name: "Samsung Galaxy S26+", 
        basePrice: 19499000,
        description: "Performa monster Exynos 2600, layar 6.7 inci yang jernih, dan teknologi Galaxy AI terbaru dalam desain Titanium yang mewah.",
        specs: ["Exynos 2600 (2nm).", 
                "Layar 6.7\" QHD+ (3120 x 1440), Dynamic AMOLED 2X, 120Hz, 2600 nits, Corning Gorilla Glass Victus 2.", 
                "Kamera Utama: 50MP (f/1.8), OIS, 2x Optical Quality + Telephoto: 10MP (f/2.4), 3x Optical Zoom, OIS + Ultra Wide: 12MP (f/2.2).", 
                "Baterai 4900mAh, 45W wired charging, 20W wireless", 
                "IP68, One UI 8.5 berbasis Android 16, Galaxy AI terbaru"],
        variants: [
            { label: "12/256GB", extra: 0 },
            { label: "12/512GB", extra: 3000000 }
        ],
        colors: [
            { name: "White", hex: "#f0f0f0", image: "https://images.samsung.com/is/image/samsung/p6pim/id/s2602/gallery/id-galaxy-s26-s947-sm-s947bzwcxid-550876199?imbypass=true" },
            { name: "Black", hex: "#313132", image: "https://images.samsung.com/is/image/samsung/p6pim/id/s2602/gallery/id-galaxy-s26-s947-sm-s947bzkcxid-550876123?imbypass=true" },
            { name: "Cobalt Violet", hex: "#5d556a", image: "https://images.samsung.com/is/image/samsung/p6pim/id/s2602/gallery/id-galaxy-s26-s947-sm-s947bzvcxid-550876161?imbypass=true" },
            { name: "sky Blue", hex: "#b2c7d6", image: "https://images.samsung.com/is/image/samsung/p6pim/id/s2602/gallery/id-galaxy-s26-s947-sm-s947blbcxid-550876085?imbypass=true" }
        ]     
    },
    {
        id: 3,
        name: "Samsung Galaxy S26",
        basePrice: 16499000,
        description: "Smartphone flagship ringkas dengan performa Exynos 2600, layar AMOLED 120Hz yang memukau, dan fitur Galaxy AI paling cerdas.",
        specs:["Exynos (2nm).",
               "Layar 6.3\" FHD+ (1920 x 1080), Dynamic Amoled 2X, 120Hz, 2600 nits, Corning Gorilla Glass Victus 2.",
               "kamera Utama: 50MP(f/1.8), OIS, 3X Optical Zoom + Telephoto: 10MP (f/2.4), 3X Optical Zoom, OIS + Ultra Wide: 12MP (f/2.2).",
               "Baterai 4300mAh, 25W wired charging, 15W wireless",
               "IP68, One UI 8.5 Berbasis Android 16, Galaxy AI terbaru"],
        variants: [
            { label: "12/256GB", extra: 0 },
            { label: "12/512GB", extra: 3000000 }
        ],
        colors: [
            { name: "White", hex: "#f0f0f0", image: "https://images.samsung.com/is/image/samsung/p6pim/id/s2602/gallery/id-galaxy-s26-s942-sm-s942bzwcxid-550883661?imbypass=true"},
            { name: "Black", hex: "#313132", image: "https://images.samsung.com/is/image/samsung/p6pim/id/s2602/gallery/id-galaxy-s26-s942-sm-s942bzkcxid-550883509?imbypass=true"},
            { name: "Cobalt Violet", hex: "#5d556a", image: "https://images.samsung.com/is/image/samsung/p6pim/id/s2602/gallery/id-galaxy-s26-s942-sm-s942bzvcxid-550883585?imbypass=true"},
            { name: "Sky Blue", hex: "#b2c7d6", image: "https://images.samsung.com/is/image/samsung/p6pim/id/s2602/gallery/id-galaxy-s26-s942-sm-s942blbcxid-550883433?imbypass=true"}
        ]
    },
    {
        id: 4,
        name: "Samsung Galaxy S25 Ultra",
        basePrice: 22999000,
        description: "Flagship Titanium dengan layar 6.9 inci, S-Pen bawaan, kamera 200MP, dan performa Snapdragon 8 Elite For Galaxy yang legendaris.",
        specs:["Snapdragon 8 Elite For galaxy (3nm).",
               "Layar 6.9\" QHD+ (3120 x 1440), Dynamic Amoled 2X, 120Hz, 2600 nits, Corning Gorilla Glass Armor 2.",
               "kamera Utama: 200MP (f/1.7), OIS, + Ultra Wide 50MP (f/1.9) + Telephoto 50MP (f/3.4), 5X Optical Zoom + Telephoto 10MP (f/2.4), 3X Optical Zoom.",
               "Baterai 5000mAh, 45W wired charging, 15W wireless",
               "S-Pen Built-In, IP68, One UI 7 Berbasis Android 15, Galaxy AI"],
        variants: [
            { label: "12/256GB", extra: 0 },
            { label: "12/512GB", extra: 3000000 },
            { label: "12/1TB", extra: 6000000}
        ],
        colors: [
            { name: "Titanium Silverblue", hex: "#909ebb", image: "https://images.samsung.com/is/image/samsung/p6pim/id/2501/gallery/id-galaxy-s25-s938-sm-s938bzbqxid-544701644?imbypass=true"},
            { name: "Titanium Gray", hex: "#b2ac9e", image: "https://images.samsung.com/is/image/samsung/p6pim/id/2501/gallery/id-galaxy-s25-s938-sm-s938bztqxid-544701977?imbypass=true"},
            { name: "Titanium Black", hex: "#4b4a4d", image: "https://images.samsung.com/is/image/samsung/p6pim/id/2501/gallery/id-galaxy-s25-s938-sm-s938bzkqxid-544701755?imbypass=true"},
            { name: "Titanium Whitesilver", hex: "#d9d9d7", image: "https://images.samsung.com/is/image/samsung/p6pim/id/2501/gallery/id-galaxy-s25-s938-sm-s938bzsqxid-544701866?imbypass=true"}
        ]
    }
];

// 2. STATE (Penyimpanan Pilihan User)
let cart = [];
let selectedVariants = {}; 
let selectedColors = {}; 

// Inisialisasi Pilihan Awal
products.forEach(p => { 
    selectedVariants[p.id] = 0; 
    selectedColors[p.id] = 0; 
});

// 3. FUNGSI UTAMA DISPLAY
function renderProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;
    container.innerHTML = '';

    products.forEach(product => {
        const vIdx = selectedVariants[product.id];
        const cIdx = selectedColors[product.id];
        
        const currentImage = product.colors[cIdx].image;
        const currentPrice = product.basePrice + product.variants[vIdx].extra;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${currentImage}" class="product-image" onclick="showDetail(${product.id})" style="cursor:pointer">
            
            <h3 onclick="showDetail(${product.id})" style="cursor:pointer">${product.name}</h3>
            
            <div class="color-selector">
                ${product.colors.map((c, i) => `
                    <div class="color-dot ${i === cIdx ? 'active' : ''}" 
                         style="background-color: ${c.hex}"
                         onclick="selectColor(${product.id}, ${i})">
                    </div>
                `).join('')}
                <span class="color-label">${product.colors[cIdx].name}</span>
            </div>

            <div class="variant-selector">
                ${product.variants.map((v, i) => `
                    <span class="variant-option ${i === vIdx ? 'active' : ''}" 
                          onclick="selectVariant(${product.id}, ${i})">
                        ${v.label}
                    </span>
                `).join('')}
            </div>

            <p class="product-price">Rp ${currentPrice.toLocaleString('id-ID')}</p>
            <button onclick="addToCart(${product.id})">Tambah Ke Keranjang</button>
        `;
        container.appendChild(card);
    });
}

// 4. LOGIKA INTERAKSI
function selectColor(productId, colorIdx) {
    selectedColors[productId] = colorIdx;
    renderProducts();
}

function selectVariant(productId, variantIdx) {
    selectedVariants[productId] = variantIdx;
    renderProducts();
}

function showDetail(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('product-modal');
    const body = document.getElementById('modal-body');
    
    const vIdx = selectedVariants[productId];
    const cIdx = selectedColors[productId];
    const currentPrice = product.basePrice + product.variants[vIdx].extra;

    body.innerHTML = `
        <div class="modal-detail-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; text-align: left;">
            
            <div style="grid-column: 1; display: flex; justify-content: center;">
                <img src="${product.colors[cIdx].image}" alt="${product.name}" style="width: 100%; height: auto;">
            </div>

            <div style="grid-column: 2;">
                <h2 style="font-size: 1.8rem; margin-bottom: 10px;">${product.name}</h2>
                <p style="line-height: 1.5; color: #555; font-size: 0.95rem;">${product.description}</p>
            </div>

            <div style="grid-column: 1 / span 2; margin-top: 20px;">
                <h4 style="margin-bottom: 12px;">Spesifikasi:</h4>
                <ul style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 10px; list-style: none; padding: 0;">
                    ${product.specs.map(s => `
                        <li style="background: #f8f9fa; border: 1px solid #ddd; padding: 8px 15px; border-radius: 6px; font-size: 0.9rem; flex: 0 1 auto;">
                            ${s}
                        </li>
                    `).join('')}
                </ul>
                
                <div style="margin-top: 25px; border-top: 1px solid #eee; padding-top: 15px;">
                    <p style="margin-bottom: 5px;"><strong>Pilihan:</strong> ${product.colors[cIdx].name} | ${product.variants[vIdx].label}</p>
                    <h3 style="color: #0c4da2;">Rp ${currentPrice.toLocaleString('id-ID')}</h3>
                </div>
            </div>
        </div>
    `;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('product-modal').style.display = "none";
}

// 5. KERANJANG & CHECKOUT
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const vIdx = selectedVariants[productId];
    const cIdx = selectedColors[productId];
    const finalPrice = product.basePrice + product.variants[vIdx].extra;

    cart.push({
        displayName: `${product.name} (${product.colors[cIdx].name} | ${product.variants[vIdx].label})`,
        price: finalPrice
    });
    updateCartUI();
}

function updateCartUI() {
    const list = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const countEl = document.getElementById('cart-count');
    
    list.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        list.innerHTML += `
            <li>
                <div class="cart-item-header">
                    <strong>${item.displayName}</strong>
                    <button class="remove-btn" onclick="removeFromCart(${index})">Hapus</button>
                </div>
                <span>Rp ${item.price.toLocaleString('id-ID')}</span>
            </li>
        `;
    });

    countEl.textContent = cart.length;
    totalEl.textContent = total.toLocaleString('id-ID');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Ganti fungsi checkout yang lama dengan ini
function checkout() {
    if (cart.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }
    
    // 1. Simpan isi keranjang ke dalam localStorage browser
    localStorage.setItem('samsungCart', JSON.stringify(cart));
    
    // 2. Pindah ke halaman checkout.html
    window.location.href = 'checkout.html';
}
// Jalankan Pertama Kali
renderProducts();