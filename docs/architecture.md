# System Architecture

Voice2Web uses a standard MERN stack architecture to ensure scalability and ease of contribution.

## Stack Overview

*   **Database**: MongoDB (NoSQL database for flexible schema, ideal for diverse business profiles).
*   **Backend**: Node.js with Express (RESTful API).
*   **Frontend**: React (Client-side rendering, built with Vite for speed) + Tailwind CSS v4.

## Folder Structure

```
Voice2Web/
├── client/                 # Frontend React Application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Full page views (Home, Onboarding, Consumer)
│   │   ├── App.jsx         # Main router entry point
│   │   └── index.css       # Global styles & Tailwind imports
│   └── package.json
│
├── server/                 # Backend Express API
│   ├── models/             # Mongoose schemas (e.g., Business.js)
│   ├── routes/             # API route definitions
│   ├── index.js            # Server entry point
│   └── package.json
│
├── docs/                   # Documentation folder
├── CONTRIBUTING.md         # Guidelines for developers
└── README.md
```

## Data Flow (Onboarding)

1. **Client**: User speaks into the microphone (Web Speech API / external audio recorder).
2. **Client -> API**: Audio or transcribed text is sent to the backend.
3. **Backend -> AI Service**: The backend passes the text to an LLM (e.g., OpenAI, Gemini) to extract JSON structured data.
4. **Backend**: The parsed data is validated and a new `Business` document is saved in MongoDB.
5. **Client**: Receives the newly generated business profile and renders the website preview.
