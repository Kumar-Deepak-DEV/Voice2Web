# Voice2Web 🎙️🌐

**Millions of small businesses worldwide remain digitally invisible because creating and managing an online presence is often expensive, technical, and time-consuming. This limits customer reach, reduces growth opportunities, and makes it difficult for consumers to discover trusted local businesses.**

Voice2Web is an AI-powered, voice-first platform that helps small businesses establish a professional online presence in minutes, while simultaneously building a trustworthy, searchable directory for consumers to discover local businesses.

Unlike traditional marketplace intermediaries, **this platform never takes a commission or inserts itself into transactions**. We empower business owners to retain complete ownership of their customer relationships.

---

## 🎯 The Solution

Our platform empowers small business owners to create a professional online presence using only their voice. Instead of requiring technical expertise, business owners simply describe their shop, products, services, contact details, and operating hours in their preferred language. AI automatically converts this information into a fully functional website and deploys it within minutes.

### For Business Owners
*   **Voice-First Onboarding**: Speak to create your website. No forms, no coding.
*   **AI Extraction**: We automatically parse business names, products, timings, and contact info.
*   **Zero Commission**: You keep 100% of your earnings. We don't interfere in transactions.
*   **Real Ownership**: You get a real, owned website—not just a directory listing.

### For Consumers
*   **Local Discovery**: Search for nearby verified businesses by category or product.
*   **Direct Contact**: Call or WhatsApp businesses directly—no middleman.
*   **Trust & Verification**: Verified badges and community ratings ensure reliability.

---

## 🚀 Key Differentiators

*   **A real, owned website** — a branded page the business fully controls.
*   **True voice-first onboarding** — natural description in regional/vernacular languages.
*   **No algorithmic gatekeeping** — visibility isn't pay-to-play.
*   **A human-in-the-loop AI** — the owner confirms or corrects what the AI understood before anything goes live.
*   **Zero commission, ever** — monetization is fully decoupled from sales or transactions.

---

## 🎯 MVP Scope (What We Are Building First)

To keep the project realistic and deliver the complete core experience, our MVP focuses strictly on:
*   **Authentication & Registration**
*   **Duplicate Detection** (Preventing multiple profiles for the same store)
*   **Voice Input & AI Extraction**
*   **Review Screen & Theme Selection**
*   **Website Generation & Publishing**
*   **Consumer Business Search & Business Profile View**

Everything else (analytics, reviews, mobile app, WhatsApp onboarding) is planned for later versions.

---

## 🏗️ Project Architecture (MERN Stack)

This is an open-source project built with the **MERN** stack:
*   **MongoDB & Mongoose**: Database and ODM.
*   **Express & Node.js**: Backend API server.
*   **React (Vite) & Tailwind CSS**: Frontend client.

Read more in our [Architecture Guide](docs/architecture.md).

---

## 📖 Documentation

*   [Detailed Features & Workflow](docs/features.md)
*   [System Architecture](docs/architecture.md)
*   [Contributing Guidelines](CONTRIBUTING.md)

---

## 🛠️ Getting Started for Contributors

We welcome contributors! This repository contains both the frontend (`client`) and backend (`server`) code. 

### Prerequisites
*   Node.js (v18+)
*   MongoDB (Local instance or MongoDB Atlas URI)

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/voice2web.git
   cd voice2web
   ```

2. **Start the Backend Server:**
   ```bash
   cd server
   npm install
   # Create a .env file and set PORT and MONGO_URI
   npm run dev # (requires setting up nodemon or just run node index.js)
   ```

3. **Start the Frontend Client:**
   ```bash
   cd client
   npm install
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to `http://localhost:5173` to see the React app.

---

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us. This project is in its early stages (Phase 1), and there are many opportunities to contribute, from building the React UI to integrating the AI voice extraction pipeline!
