# REST-API-in-WP
REST API in WP
# 📝 WordPress REST API CRUD (HTML + JavaScript)

A simple front-end-only project that connects with your WordPress backend using the REST API and Basic Authentication.

✅ Features:
- Fetch and display all blog posts (Read)
- View single post details (Dynamic page)
- Create new blog posts
- Update existing posts
- Delete posts
- Clean UI using plain HTML, CSS, and JavaScript
- Uses Basic Auth (Base64) — no backend other than WordPress

---

## 🚀 Live Preview

> This project runs on your local environment (example: `http://127.0.0.1:5500/`).

---

## 📁 Folder Structure

wp-rest-api-demo/ ├── index.html # Fetch and list all posts ├── post-details.html # View full content of a single post ├── create-post.html # Form to create a new post ├── edit-post.html # Form to update an existing post ├── js/ │ ├── create-post.js # Create post logic │ ├── update-post.js # Update post logic │ ├── delete-post.js # Delete post logic │ └── common.js # Shared token/auth setup └── style.css # Optional: your own styling

csharp
Copy
Edit

---

## 🔧 Setup Instructions

1. Make sure you have a local WordPress site running (e.g. `http://rest-api.local`)
2. Enable REST API and Basic Authentication by installing this plugin:
   👉 [`https://github.com/WP-API/Basic-Auth`](https://github.com/WP-API/Basic-Auth)
3. Clone or download this repo.
4. Update `common.js` with your credentials:

```js
const apiBase = 'http://rest-api.local/wp-json/wp/v2';
const username = 'admin';
const password = 'your-application-password-here'; // e.g., 24-char App Password
const token = btoa(`${username}:${password}`);
Open index.html in your browser (e.g. using Live Server).

🛡 Security Note
⚠️ This demo uses Basic Authentication with credentials in the frontend for learning purposes only.

In production:

Never expose real credentials in the frontend.

Use OAuth, JWT, or a secure backend proxy.

❤️ Credits
Made with love for learning WordPress REST API with plain JavaScript.

📄 License
This project is licensed under the MIT License.
