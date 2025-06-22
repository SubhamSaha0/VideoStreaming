# 🍅 Tomato — MERN Food Ordering Platform

Tomato is a full-stack food ordering platform enabling customers to browse menus, order food, and track orders in real-time, while admins manage inventory and orders via a secure dashboard. Built with the modern MERN stack, Tomato demonstrates scalable, modular architecture and a polished user experience.

## 🚀 Live Demos

- [Customer Frontend](https://tomato-frontend-urya.onrender.com)
- [Admin Dashboard](https://tomato-admin-1lu2.onrender.com)
- [Backend API](https://tomato-backend-8yug.onrender.com)

---

## 🖼️ Screenshots

> _Add screenshots or GIFs here for both the customer and admin panels, e.g.:_
>
> ![Customer Home](screenshots/customer-home.png)
> ![Admin Dashboard](screenshots/admin-dashboard.png)

---

## 🛠️ Tech Stack

| Layer        | Technology                |
| ------------ | ------------------------- |
| Frontend     | React.js, CSS             |
| Admin Panel  | React.js, CSS             |
| Backend      | Node.js, Express.js       |
| Database     | MongoDB (Mongoose)        |
| Auth         | JWT Tokens                |
| Deployment   | Render.com                |

---

## ✨ Features

### Customer
- User registration & login
- Browse menu by categories
- Add items to cart
- Secure checkout
- Order history & status tracking
- Responsive design

### Admin
- Add, edit, delete food items
- Manage orders and track statuses
- Role-based access

---

## 🗂️ Folder Structure

```
/frontend    # Customer React app
/admin       # Admin dashboard React app
/backend     # Node/Express API server
```

---

## ⚙️ Setup & Installation

**1. Clone the repository**
```bash
git clone https://github.com/SubhamSaha0/Tomato.git
cd Tomato
```

**2. Backend Setup**
```bash
cd backend
npm install
# Add a .env file with:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret
# CLOUDINARY_URL=your_cloudinary_url (optional)
npm start
```

**3. Frontend Setup**
```bash
cd ../frontend
npm install
npm run dev
```

**4. Admin Panel Setup**
```bash
cd ../admin
npm install
npm run dev
```

---

## 🧪 API Documentation

### Authentication
- **POST** `/api/user/register`  
  Register a new user  
  _Body_: `{ name, email, password }`
- **POST** `/api/user/login`  
  User login, returns JWT token  
  _Body_: `{ email, password }`

### Food Menu
- **GET** `/api/food/list`  
  Get all available food items

### Cart
- **POST** `/api/cart/add`  
  Add an item to the user's cart  
  _Body_: `{ userId, itemId, quantity }`  
  _Header_: `token`
- **POST** `/api/cart/remove`  
  Remove an item from cart  
  _Body_: `{ userId, itemId }`  
  _Header_: `token`
- **POST** `/api/cart/get`  
  Get all cart items for user  
  _Body_: `{ userId }`  
  _Header_: `token`

### Orders
- **POST** `/api/order/place`  
  Place an order  
  _Body_: `{ userId, items, amount, address }`  
  _Header_: `token`
- **POST** `/api/order/user-orders`  
  Get user’s order history  
  _Body_: `{ userId }`  
  _Header_: `token`
- **GET** `/api/order/list`  
  Get all orders (admin only)  
  _Header_: `token`
- **POST** `/api/order/update-status`  
  Update order status (admin)  
  _Body_: `{ orderId, status }`  
  _Header_: `token`

### Admin Food Management
- **POST** `/api/food/add`  
  Add a new food item (admin)  
  _Body_: `{ name, description, price, category, image }`  
  _Header_: `token`
- **POST** `/api/food/edit`  
  Edit a food item (admin)  
  _Body_: `{ _id, ...fields }`  
  _Header_: `token`
- **POST** `/api/food/delete`  
  Delete a food item (admin)  
  _Body_: `{ _id }`  
  _Header_: `token`

### Other
- **GET** `/`  
  Health check — returns “API working...”

---

> For authenticated/admin actions, pass the JWT token in the `token` header.


## 🧑‍💻 Demo Credentials

- **Customer:**  
  Email: `test@demo.com`  
  Password: `demopassword`

- **Admin:**  
  Email: `admin@demo.com`  
  Password: `adminpassword`

---

## 📝 Contributing

Contributions welcome! Please fork the repo, create a branch, and submit a pull request.

---

## 📄 License

MIT © Subham Saha

---

## 👤 Contact

[LinkedIn](https://www.linkedin.com/in/your-linkedin/) • [Portfolio](https://your-portfolio.com)
