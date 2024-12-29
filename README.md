# Local Artisan Marketplace

## Project Overview
The Local Artisan Marketplace is a web-based platform designed to simulate a marketplace for local artisans. Users can browse products, add items to their cart, proceed to checkout, and make payments. The project showcases seamless integration of backend and frontend technologies with full CRUD operations, authentication, and dynamic user interactions.

---

## Features
- **Product Browsing**: Display products with details like name, price, and description.
- **Cart Management**: Add, update, or remove items from the cart dynamically.
- **Checkout and Payment**: Simplified checkout process with payment functionality.
- **User Authentication**: Secure login and signup system.
- **CRUD Operations**: Full CRUD implementation for products and users.
- **Dynamic User Session Management**: Personalized user interactions with session tracking.

---

## Technologies Used
### Frontend:
- **HTML**: Structure and layout of the web pages.
- **CSS**: Styling for an attractive user interface.
- **JavaScript**: Dynamic content rendering and interaction handling.

### Backend:
- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for creating RESTful APIs.

### Database:
- **MySQL**: Relational database for storing user, product, and transaction data.

---

## Installation and Setup
### Prerequisites:
- Node.js installed on your system.
- MySQL installed and configured.

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/local-artisan-marketplace.git
   cd local-artisan-marketplace
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   - Create a MySQL database (e.g., `artisan_marketplace`).
   - Import the provided SQL file to set up tables and sample data.
   ```bash
   mysql -u [username] -p artisan_marketplace < database.sql
   ```
   - Update `db_config.js` with your database credentials.

4. Start the server:
   ```bash
   node server.js
   ```

5. Open the browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## API Endpoints
### User Endpoints:
- **POST /login**: User login.
- **POST /signup**: User registration.

### Product Endpoints:
- **GET /products**: Fetch all products.
- **POST /products**: Add a new product (Admin only).
- **PUT /products/:id**: Update product details (Admin only).
- **DELETE /products/:id**: Delete a product (Admin only).

### Cart Endpoints:
- **GET /api/cart/:userId**: Fetch items in the user's cart.
- **POST /api/cart**: Add an item to the cart.
- **PUT /api/cart/:userId/:productId**: Update the quantity of a specific item in the cart.
- **DELETE /api/cart/:userId/:productId**: Remove a specific item from the cart.
- **DELETE /api/cart/:userId**: Remove all items from the user's cart.

---

## Folder Structure
```
local-artisan-marketplace/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
├── views/
│   ├── index.html
│   ├── login.html
│   └── cart.html
├── routes/
│   ├── productRoutes.js
│   ├── userRoutes.js
│   └── cartRoutes.js
├── models/
│   ├── userModel.js
│   ├── productModel.js
│   └── cartModel.js
├── server.js
├── package.json
└── database.sql
```

---

## Future Enhancements
- Add payment gateway integration for real transactions.
- Implement advanced search and filtering options for products.
- Include reviews and ratings for products.
- Optimize database queries for better performance.

---

## Authors
- **Chetan Kirange**

---

## License
This project is licensed under the [MIT License](LICENSE).

---

