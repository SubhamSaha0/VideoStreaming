# Demo Practice Repository

This repository is for personal learning, experimentation, and practice with Git, GitHub, and coding workflows.

**Note:**  
This repo is not intended to showcase production code or professional projects. Recruiters and reviewers can safely ignore its contents.

---
*Created for hands-on practice and experimentation.*


# 🎬 Netflix-Clone — React + Firebase + TMDB API

Netflix-Clone is a modern, responsive web application that replicates the core UI and movie browsing experience of Netflix. Built as a demonstration project, it features user authentication, dynamic movie lists powered by The Movie Database (TMDB) API, and a sleek, engaging interface. Perfect for showcasing modern React and Firebase integration.

## 🚀 Live Demo

- [Live App](https://netflix-clone-1j0p.onrender.com/)

---

## 🖼️ Screenshots

<!-- Add your own screenshots here following this format -->
<!-- Example:
![Home page](https://github.com/your-username/assets/your-image-id)
![Movie details](https://github.com/your-username/assets/your-image-id)
-->

---

## 🛠️ Tech Stack

| Layer         | Technology                                 |
| ------------- | ------------------------------------------ |
| Frontend      | React.js, React Router, Vite, CSS          |
| State/Auth    | Firebase, React Firebase Hooks             |
| API           | TMDB (The Movie DB) API                    |
| Notifications | react-hot-toast                            |
| Dev Tools     | ESLint, Vite, React Hot Refresh            |
| Deployment    | Render.com                                 |

---

## ✨ Features

- Browse trending and popular movies/shows (powered by TMDB API)
- User authentication and account management (Firebase)
- Add/remove from Favorites (if implemented)
- Responsive UI inspired by Netflix
- Toast notifications for user feedback
- Fast performance with Vite bundler

---

## 🗂️ Folder Structure

```
/public        # Static assets
/src           # React source code
  /components  # Reusable UI components
  /pages       # App pages/routes
  /firebase    # Firebase configuration and hooks
  /styles      # CSS or styled components
index.html     # App root
vite.config.js # Vite configuration
```

---

## ⚙️ Setup & Installation

**1. Clone the repository**
```bash
git clone https://github.com/SubhamSaha0/Netflix-Clone.git
cd Netflix-Clone
```

**2. Install dependencies**
```bash
npm install
```

**3. Configure Firebase**
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
- Add your Firebase config to `/src/firebase/config.js` (create if not exists):
  ```js
  export const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  ```

**4. Get a TMDB API Key**
- Register at [TMDB](https://www.themoviedb.org/) to get your API key.
- Add it to your environment variables or in the config file as needed:
  ```js
  export const TMDB_API_KEY = "YOUR_TMDB_API_KEY";
  ```

**5. Start the development server**
```bash
npm run dev
```

---

## 🧪 Main Packages/API

- **react**: UI library for building user interfaces
- **firebase**: Backend as a Service (Auth, Firestore, etc.)
- **react-router-dom**: Client-side routing
- **react-hot-toast**: Toast notifications
- **vite**: Fast development server and build tool
- **TMDB API**: Source for movies and TV shows data

---

## 📝 Contributing

Contributions welcome! Please fork the repo, create a branch, and submit a pull request.

---

## 📄 License

MIT © Subham Saha

---

## 👤 Contact

[LinkedIn](https://www.linkedin.com/in/subham-saha-277342202/) • [Email](mailto:subhamsaha2511@gmail.com)

---

## 👤 Contact

[LinkedIn](https://www.linkedin.com/in/subham-saha-277342202/) • [Email](mailto:subhamsaha2511@gmail.com)
