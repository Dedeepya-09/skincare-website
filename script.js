/* script.js (JavaScript Functionality) */
function togglePassword() {
    let passField = document.getElementById('password');
    passField.type = passField.type === 'password' ? 'text' : 'password';
}

function showAllProducts() {
    let productSection = document.getElementById('product-section');
    if (!productSection) return;
    productSection.innerHTML = "";
    let products = [
        { name: "Face Serum", price: "$25", img: "images/serum.png" },
        { name: "Moisturizer", price: "$20", img: "images/Moisturizer.png" },
        { name: "Sunscreen", price: "$18", img: "images/Sunscreen.png" },
        { name: "Cleanser", price: "$22", img: "images/cleanser.png" },
        { name: "Night Cream", price: "$30", img: "images/nightcream.png" }
    ];
    
    products.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('product-card');
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="product-image">
            <p class="product-name">${product.name}</p>
            <p class="product-price">${product.price}</p>
            <span class="wishlist-icon" onclick="addToWishlist('${product.name}')">❤️</span>
            <button class="add-to-cart" onclick="addToCart('${product.name}')">Add to Cart</button>
        `;
        productSection.appendChild(productDiv);
    });
}

function showTrending() {
    let productSection = document.getElementById('product-section');
    if (!productSection) return;
    productSection.innerHTML = "";
    let trendingProducts = [
        { name: "Moisturizer", price: "$20", img: "images/moisturizer.png" },
        { name: "Sunscreen", price: "$18", img: "images/sunscreen.png" }
    ];
    
    trendingProducts.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('product-card');
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="product-image">
            <p class="product-name">${product.name}</p>
            <p class="product-price">${product.price}</p>
            <span class="wishlist-icon" onclick="addToWishlist('${product.name}')">❤️</span>
            <button class="add-to-cart" onclick="addToCart('${product.name}')">Add to Cart</button>
        `;
        productSection.appendChild(productDiv);
    });
}