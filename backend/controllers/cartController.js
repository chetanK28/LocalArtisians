// backend/controllers/checkoutController.js
const Cart = require('../models/cartModel');

exports.addToCart = (req, res) => {
    const { userId, productId, productName, price, quantity } = req.body;
    Cart.addItem(userId, productId, productName, price, quantity, (err) => {
        if (err) {
            res.status(500).json({ error: "Failed to add item to cart." });
        } else {
            res.json({ message: "Item added to cart" });
        }
    });
};

exports.getCart = (req, res) => {
    const userId = req.params.userId;
    Cart.getItems(userId, (err, results) => {
        if (err) {
            res.status(500).json({ error: "Failed to retrieve cart items." });
        } else {
            res.json(results);
        }
    });
};

exports.updateQuantity = (req, res) => {
    const { userId, itemId } = req.params;
    const { quantity } = req.body;
    Cart.updateQuantity(userId, itemId, quantity, (err) => {
        if (err) {
            res.status(500).json({ error: "Failed to update quantity." });
        } else {
            res.json({ message: "Quantity updated successfully" });
        }
    });
};

exports.deleteItem = (req, res) => {
    const { userId, itemId } = req.params;
    Cart.deleteItem(userId, itemId, (err) => {
        if (err) {
            res.status(500).json({ error: "Failed to delete item." });
        } else {
            res.json({ message: "Item deleted successfully" });
        }
    });
};

exports.clearCart = (req, res) => {
    const userId = req.params.userId;
    Cart.clearCart(userId, (err) => {
        if (err) {
            res.status(500).json({ error: "Failed to clear cart." });
        } else {
            res.json({ message: "Cart cleared successfully" });
        }
    });
};
