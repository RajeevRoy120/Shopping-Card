const products = [
    { id: 1, name: "Laptop", price: 899.99, image: "laptop.jpg" },
    { id: 2, name: "Smartphone", price: 499.99, image: "smartphone.jpg" },
    { id: 3, name: "Headphones", price: 99.99, image: "headphone.jpg" },
    { id: 4, name: "Earphone", price: 2000.00, image: "earphone.jpg" },
    { id: 5, name: "Shoes", price: 2099.00, image: "shoes.jpg" },
    { id: 6, name: "charger", price: 478.00, image: "charger.jpg" },
    { id: 7, name: "Watch", price: 548.00, image: "watch.jpg" },
    { id: 8, name: "T-shirt", price: 9328.00, image: "tshirt.jpg" },
    { id: 9, name: "Bagpack", price: 24580.00, image: "bagpack.jpg" },
    { id: 10, name: "Camera", price: 1200.00, image: "camera.jpg" },
    { id: 11, name: "Tablet", price: 750.00, image: "tab.jpg" },
     { id: 12, name: "tharmometer", price: 3200.00, image: "thermometer.jpg" },
    { id: 13, name: "Jacket", price: 1500.00, image: "jacket.jpg" },
    { id: 14, name: "Sunglasses", price: 250.00, image: "sunglasses.jpg" },
    { id: 15, name: "Keyboard", price: 120.00, image: "keyboard.jpg" }
];

const productList = document.getElementById("product-list");
const cart = document.getElementById("cart");
const totalElement = document.getElementById("total");
const searchInput = document.getElementById("search");

let cartItems = [];

// Function to display products
function displayProducts(filteredProducts = products) {
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(productCard);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    cartItems.push(selectedProduct);
    updateCart();
}

// Function to update cart
function updateCart() {
    cart.innerHTML = "";
    let total = 0;

    cartItems.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;

        cart.appendChild(cartItem);
    });

    totalElement.innerText = total.toFixed(2);
}

// Function to remove item from cart
function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}

// Function to search for products
function searchProducts() {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    displayProducts(filteredProducts);
}

// Display products on load
displayProducts();