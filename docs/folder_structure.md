# Project Folder Structure

Voice2Web is built using the MERN stack. The repository is split into two main directories: `client` (Frontend) and `server` (Backend).

Here is a detailed breakdown of the entire folder structure to help you navigate the codebase.

## 📂 Root Directory

```text
Voice2Web/
├── .github/                 # GitHub specific configs (Issue/PR templates, CI workflows)
├── client/                  # ⚛️ React Frontend (Vite)
├── server/                  # 🟢 Node.js Backend (Express)
├── docs/                    # Project documentation (Features, Architecture)
├── contributor-issues/      # Management files (for maintainers)
├── .gitignore               # Files ignored by git (e.g., node_modules, .env)
├── CODE_OF_CONDUCT.md       # Rules for community interaction
├── CONTRIBUTING.md          # Guide on how to open PRs and contribute
├── LICENSE                  # MIT License
└── README.md                # Project entry point & MVP description
```

---

## 🎨 Client Directory (`client/`)

The frontend is a React Single Page Application initialized via Vite, utilizing Tailwind CSS for styling.

```text
client/
├── public/                  # Static assets (favicons, manifest.json)
├── src/
│   ├── components/          # Reusable UI parts (Navbar, Buttons, Forms)
│   ├── pages/               # Full page components (Home, Dashboard, Login)
│   ├── App.jsx              # Main React Router setup (Routing logic)
│   ├── index.css            # Global CSS and Tailwind v4 imports
│   └── main.jsx             # React entry point mounting to index.html
├── .env                     # Local environment variables (VITE_API_URL)
├── index.html               # Main HTML wrapper for the app
├── package.json             # Frontend dependencies (React, Tailwind, React Router)
└── vite.config.js           # Vite build configuration & plugins
```

---

## ⚙️ Server Directory (`server/`)

The backend is a RESTful API built with Express.js and MongoDB.

```text
server/
├── models/                  # Mongoose Schemas (Database Blueprint)
│   ├── Business.js          # Schema for generated websites
│   └── User.js              # Schema for business owner authentication
├── routes/                  # Express API Route definitions
│   ├── authRoutes.js        # Login, Register, OTP endpoints
│   └── businessRoutes.js    # AI Onboarding, Business search endpoints
├── services/                # Business logic and external API calls
│   ├── aiService.js         # Integration with LLMs (Gemini/OpenAI) for data extraction
│   └── otpService.js        # Logic for generating and verifying SMS OTPs
├── middleware/              # Express middleware functions
│   ├── auth.js              # JWT verification middleware
│   └── errorHandler.js      # Global error catching middleware
├── .env                     # Secrets (MONGO_URI, JWT_SECRET, AI_API_KEY)
├── index.js                 # Express server entry point (App initialization)
└── package.json             # Backend dependencies (express, mongoose, bcryptjs)
```

## Where should I start?

* **Frontend Contributors**: Start looking in `client/src/App.jsx` to understand the routes, then build components in `client/src/components/`.
* **Backend Contributors**: Start looking in `server/index.js` to see how the server starts, then trace the logic into `server/routes/`.
