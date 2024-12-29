async function loadCart() {
    const userId = 1;  
    const response = await fetch(`http://localhost:3002/api/cart`);
    const cart = await response.json();
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    let totalPrice = 0;

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${item.product_name} - ₹${item.price} x 
            <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)" style="width: 50px; text-align: center;">
            <button onclick="deleteItem(${item.id})">Delete</button>
        `;
        cartItemsContainer.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Total Price: ₹${totalPrice}`;
}


async function updateQuantity(id, newQuantity) {
    newQuantity = parseInt(newQuantity);
    if (newQuantity < 1) return;

    await fetch(`http://localhost:3002/api/cart/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: newQuantity })
    });
    loadCart();
}   

async function deleteItem(id) {
    await fetch(`http://localhost:3002/api/cart/delete/{:itemId}`, {
        method: "DELETE"
    });
    loadCart();
}

async function checkout() {
    const userId = 1;  
    const response = await fetch(`http://localhost:3002/api/cart/checkout`, {
        method: "DELETE"
    });

    if (response.ok) {
        alert(`Proceeding to checkout. Total price: ₹${document.getElementById("total-price").textContent.split("₹")[1]}`);
        loadCart();
    } else {
        alert("Failed to clear cart.");
    }
}

loadCart();


