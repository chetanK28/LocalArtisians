// backend/routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/checkoutController');

router.post('/cart', cartController.addToCart);
router.get('/cart/:userId', cartController.getCart);
router.put('/cart/update/:itemId', cartController.updateQuantity);
router.delete('/cart/delete/:itemId', cartController.deleteItem);
router.delete('/cart/delete', cartController.clearCart);

module.exports = router;
