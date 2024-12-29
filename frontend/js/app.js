function addToCart(productId, productName, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ productId, productName, price, quantity: 1 });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

function loadCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItemsContainer.innerHTML = cart.map(item =>
        `<li>${item.productName} - ₹${item.price} x ${item.quantity}</li>`
    ).join("");
}

async function checkout() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) return alert("Your cart is empty!");

    const response = await fetch("http://localhost:3002/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart })
    });

    if (response.ok) {
        alert("Checkout successful!");
        localStorage.removeItem("cart");
        loadCart();
    } else {
        alert("Checkout failed.");
    }
}

if (window.location.pathname.endsWith('cart.html')) loadCart();

