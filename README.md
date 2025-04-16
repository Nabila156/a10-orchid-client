# 🎬 ORCHID

**Live Site URL**: [ORCHID](https://orchid-a10.web.app/)  

---

## 🚀 Website Features

- 🔐 **Authentication System** – Email/Password login with validation, Google Sign-in, conditional navbar based on login status, and private routes for added security.
- 🎞️ **Explore & Manage Movies** – View all movies, see detailed info, and manage favorites. Only logged-in users can add, delete, or update movie entries.
- 🌟 **Featured Movies & Rating System** – Automatically highlights top 6 rated movies on the home page with star-based rating integration.
- 🔍 **Search Functionality** – Instantly find your favorite movies by title.
- 🌓 **Dark/Light Mode Toggle** – Choose between dark or light theme for better user experience.

---

## 📋 Pages and Routes Overview

- **Home Page** – Static slider, featured movies, and two extra informative sections.
- **All Movies** – 3-column responsive grid view of all added movies.
- **Add Movie** (Private) – Form with full validation to add new movies.
- **Movie Details** (Private) – Full information + options to update, delete, or add to favorites.
- **Update Movie** (Private) – Prefilled form with the same validation rules as Add Movie.
- **My Favorites** (Private) – See and manage your favorite movie list.
- **Login / Register** – Auth forms with validation and Google Sign-in.
- **Extra Route** – Public route for displaying anything relevant (e.g., Movie News, Trending, etc.).
- **404 Page** – Custom page not found UI for unknown routes.

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router DOM, Tailwind CSS, DaisyUI, React Hook Form, react-simple-star-rating
- **Backend**: Node.js, Express.js, MongoDB, dotenv, CORS
- **Authentication**: Firebase Authentication
- **Deployment**:
  - Client: Firebase
  - Server: Vercel
- **Database**: MongoDB Atlas