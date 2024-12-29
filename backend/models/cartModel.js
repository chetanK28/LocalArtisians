// backend/models/cartModel.js
const db = require('../config/db');

const Cart = {
    addItem: (userId, productId, productName, price, quantity, callback) => {
        db.query(
            "INSERT INTO cart (user_id, product_id, product_name, price, quantity) VALUES (?, ?, ?, ?, ?)",
            [userId, productId, productName, price, quantity],
            callback
        );
    },

    getItems: (userId, callback) => {
        db.query("SELECT * FROM cart WHERE user_id = ?", [userId], callback);
    },

    updateQuantity: (userId, itemId, quantity, callback) => {
        db.query(
            "UPDATE cart SET quantity = ? WHERE user_id = ? AND id = ?",
            [quantity, userId, itemId],
            callback
        );
    },

    deleteItem: (userId, itemId, callback) => {
        db.query(
            "DELETE FROM cart WHERE user_id = ? AND id = ?",
            [userId, itemId],
            callback
        );
    },

    clearCart: (userId, callback) => {
        db.query("DELETE FROM cart WHERE user_id = ?", [userId], callback);
    }
};

module.exports = Cart;
