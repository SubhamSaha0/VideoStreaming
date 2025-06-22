# 📝 QuickBlog — MERN Blogging Platform

QuickBlog is a full-stack, modern blogging platform that empowers users to create, publish, and manage blog posts with ease. With a beautiful, responsive interface and robust admin controls, QuickBlog demonstrates scalable architecture and a polished user experience—perfect for portfolios and showcasing technical expertise.

## 🚀 Live Demo

- [Main Application](https://your-quickblog-demo-link.com) <!-- Replace with your actual demo link -->

---

## 🖼️ Screenshots

<!-- Add your screenshots here -->
<!-- Example:
![Home Page](https://your-screenshot-link.com/home.png)
![Post Editor](https://your-screenshot-link.com/editor.png)
![Admin Dashboard](https://your-screenshot-link.com/admin.png)
-->

---

## 🛠️ Tech Stack

| Layer        | Technology                |
| ------------ | ------------------------ |
| Frontend     | React.js, CSS/Styled     |
| Backend      | Node.js, Express.js      |
| Database     | MongoDB (Mongoose)       |
| Auth         | JWT Tokens               |
| Editor       | Rich Text Editor (Quill.js) |
| Deployment   | Render.com  |

---

## ✨ Features

### User
- Register and log in securely
- Create, edit, and publish blog posts
- Rich text editor for content creation
- Browse and search posts by category or author
- Comment on and like posts
- Responsive design

### Admin
- Manage all users and posts
- Moderate comments
- Role-based access controls

---

## 🗂️ Folder Structure

```
/frontend    # React client app
/backend     # Node/Express API server
```

---

## ⚙️ Setup & Installation

**1. Clone the repository**
```bash
git clone https://github.com/SubhamSaha0/QuickBlog.git
cd QuickBlog
```

**2. Backend Setup**
```bash
cd backend
npm install
# Add a .env file with:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret
npm start
```

**3. Frontend Setup**
```bash
cd ../frontend
npm install
npm run dev
```

---

## 🧪 API Documentation

### Authentication
- **POST** `/api/auth/register`  
  Register a new user  
  _Body_: `{ name, email, password }`
- **POST** `/api/auth/login`  
  User login, returns JWT token  
  _Body_: `{ email, password }`

### Posts
- **GET** `/api/posts`  
  Get all blog posts
- **POST** `/api/posts`  
  Create a new post (authenticated)  
  _Body_: `{ title, content, category }`  
  _Header_: `token`
- **PUT** `/api/posts/:id`  
  Edit a post (author/admin)  
  _Header_: `token`
- **DELETE** `/api/posts/:id`  
  Delete a post (author/admin)  
  _Header_: `token`

### Comments
- **POST** `/api/comments`  
  Add a comment to a post (authenticated)  
  _Body_: `{ postId, text }`
- **DELETE** `/api/comments/:id`  
  Delete a comment (admin)

---

> For authenticated/admin actions, pass the JWT token in the `token` header.

## 🧑‍💻 Demo Credentials

- **User:**  
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

[LinkedIn](https://www.linkedin.com/in/your-linkedin/) • [Email](mailto:subhamsaha2511@gmail.com)
