# Voice2Web Open Source Issue Tracker

These are highly granular, single-step tasks designed for open-source contributors. Copy these directly into your GitHub repository as Issues.

---

## 🎨 PHASE 1: Frontend UI (React & Tailwind)

### 📝 Issue 1: Create Navbar Component Skeleton
**Description:** We need a global navigation bar.
**Task:** Create `Navbar.jsx` in `client/src/components/`. Return a simple `<div>` and import it into `App.jsx`.
**Labels:** `frontend`, `good first issue`

### 📝 Issue 2: Style the Navbar
**Description:** Make the Navbar look professional.
**Task:** Use Tailwind CSS to add a white background, bottom shadow (`shadow-md`), and Flexbox spacing for the logo and links.
**Labels:** `frontend`, `ui`

### 📝 Issue 3: Create Landing Page Hero Section
**Description:** The home page needs a welcoming hero section.
**Task:** In `Home.jsx`, create a large hero heading (e.g., "Build your website with your voice") and subtitle using Tailwind text utilities.
**Labels:** `frontend`, `ui`

### 📝 Issue 4: Create Login Page UI
**Description:** Business owners need a place to log in.
**Task:** Create `Login.jsx` in `client/src/pages/`. Build a form with Email and Password inputs and a "Login" button.
**Labels:** `frontend`, `ui`

### 📝 Issue 5: Create Registration Page UI
**Description:** New owners need a signup form.
**Task:** Create `Register.jsx`. Build a form for Full Name, Business Name, Phone, Email, and Password.
**Labels:** `frontend`, `ui`

### 📝 Issue 6: Create OTP Verification Screen UI
**Description:** Screen for entering the SMS code.
**Task:** Create `OtpVerification.jsx`. Include a 4-digit input field and a submit button.
**Labels:** `frontend`, `ui`

### 📝 Issue 7: Create Dashboard Layout Component
**Description:** A shared layout for logged-in owners.
**Task:** Create `DashboardLayout.jsx` with a sidebar menu (Home, Products, Settings) and a main content area.
**Labels:** `frontend`, `ui`

### 📝 Issue 8: Create Voice vs Manual Choice Screen
**Description:** Let users pick how to onboard.
**Task:** Create a screen with two large, styled buttons: "Use Voice" and "Manual Entry".
**Labels:** `frontend`, `ui`

### 📝 Issue 9: Create Microphone Button Component
**Description:** The main voice recording button.
**Task:** Create `VoiceRecorder.jsx`. Render a circular button containing an SVG microphone icon.
**Labels:** `frontend`, `ui`

### 📝 Issue 10: Add Pulsing Animation to Microphone
**Description:** Visual feedback for recording.
**Task:** Add a `isRecording` state to `VoiceRecorder.jsx`. If true, apply Tailwind's `animate-pulse` and change the color to red.
**Labels:** `frontend`, `react`

### 📝 Issue 11: Create AI Review Screen UI
**Description:** Owners review extracted data.
**Task:** Create `ReviewScreen.jsx`. Display form fields pre-filled with mock data (Name, Category, Products).
**Labels:** `frontend`, `ui`

### 📝 Issue 12: Create Theme Selection Component
**Description:** Let users pick their website theme.
**Task:** Create `ThemeSelector.jsx`. Display 4 cards (Classic, Modern, Professional, Minimal) and allow selecting one.
**Labels:** `frontend`, `ui`

### 📝 Issue 13: Create Consumer Search Bar Component
**Description:** Let consumers search for businesses.
**Task:** Create `SearchBar.jsx` with a text input and a search icon.
**Labels:** `frontend`, `ui`

### 📝 Issue 14: Create Consumer Location Selector
**Description:** Consumers need to set their city.
**Task:** Create a dropdown or input field for location (e.g., "Patna").
**Labels:** `frontend`, `ui`

### 📝 Issue 15: Create Business Card Component
**Description:** A card showing a business in search results.
**Task:** Create `BusinessCard.jsx`. Accept props like name, category, and distance, and style it as a neat card.
**Labels:** `frontend`, `ui`

### 📝 Issue 16: Create Consumer Business Profile View
**Description:** The actual generated website view for consumers.
**Task:** Create `BusinessProfile.jsx`. Layout a banner, description, and product list using mock data.
**Labels:** `frontend`, `ui`

### 📝 Issue 17: Create Contact Action Buttons
**Description:** Buttons to reach the business.
**Task:** Create a component with two buttons: "Call Now" and "WhatsApp". Use green/blue Tailwind styling.
**Labels:** `frontend`, `ui`

### 📝 Issue 18: Add Client-Side Login Validation
**Description:** Validate login inputs before sending.
**Task:** In `Login.jsx`, ensure email is valid and password is > 6 characters before allowing submission.
**Labels:** `frontend`, `react`

### 📝 Issue 19: Add Client-Side Register Validation
**Description:** Validate signup inputs.
**Task:** Ensure all required fields in `Register.jsx` are filled before submission.
**Labels:** `frontend`, `react`

### 📝 Issue 20: Implement Dark Mode Toggle
**Description:** Support dark mode in the UI.
**Task:** Add a toggle button in the Navbar that switches a `dark` class on the root HTML element.
**Labels:** `frontend`, `tailwind`

### 📝 Issue 21: Create 404 Error Page
**Description:** A friendly "Not Found" page.
**Task:** Create `NotFound.jsx` with a funny image and a "Go Home" button. Catch all unknown routes in `App.jsx`.
**Labels:** `frontend`, `good first issue`

### 📝 Issue 22: Integrate Web Speech API
**Description:** Make the microphone actually listen.
**Task:** In `VoiceRecorder.jsx`, use `window.SpeechRecognition` to capture voice and output text to the console.
**Labels:** `frontend`, `advanced`

---

## ⚙️ PHASE 2: Backend (Node.js & Express)

### 📝 Issue 23: Setup Express Server Entry Point
**Description:** Initialize the basic server.
**Task:** Ensure `server/index.js` imports express, sets up CORS, and listens on a port.
**Labels:** `backend`, `setup`

### 📝 Issue 24: Implement MongoDB Connection
**Description:** Connect to the database securely.
**Task:** In `server/index.js`, write the `mongoose.connect()` logic using `process.env.MONGO_URI`.
**Labels:** `backend`, `database`

### 📝 Issue 25: Implement User Schema
**Description:** The database blueprint for business owners.
**Task:** Create `server/models/User.js` with fullName, phone, email, password, and isPhoneVerified fields.
**Labels:** `backend`, `database`

### 📝 Issue 26: Implement Business Schema
**Description:** The database blueprint for websites.
**Task:** Create `server/models/Business.js` mapping to the MVP data (Name, Category, Products, Theme).
**Labels:** `backend`, `database`

### 📝 Issue 27: Setup Auth Routes File
**Description:** Scaffold the authentication API.
**Task:** Create `server/routes/authRoutes.js`. Add empty `POST /register` and `POST /login` endpoints.
**Labels:** `backend`, `api`

### 📝 Issue 28: Implement Password Hashing
**Description:** Secure user passwords.
**Task:** Install `bcryptjs`. In the `POST /register` route, hash the password before saving the User document.
**Labels:** `backend`, `security`

### 📝 Issue 29: Implement JWT Login
**Description:** Generate a token on login.
**Task:** Install `jsonwebtoken`. In the `POST /login` route, verify the password and return a signed JWT.
**Labels:** `backend`, `security`

### 📝 Issue 30: Create Duplicate Detection Query
**Description:** Prevent duplicate business listings.
**Task:** In `POST /register`, query the Business collection. Return 409 Conflict if a matching Phone or Name+Location exists.
**Labels:** `backend`, `database`

### 📝 Issue 31: Create Mock OTP Generation
**Description:** Simulate sending an SMS.
**Task:** Create `server/services/otpService.js`. Write a function that returns a random 4-digit string and logs it to the console.
**Labels:** `backend`, `api`

### 📝 Issue 32: Create OTP Verification API
**Description:** Endpoint to verify the user's code.
**Task:** Create `POST /verify-otp` in `authRoutes.js`. Compare the provided code to '1234'. Update User's `isPhoneVerified`.
**Labels:** `backend`, `api`

### 📝 Issue 33: Scaffold Business Routes
**Description:** API for business management.
**Task:** Create `server/routes/businessRoutes.js`. Add empty `POST /onboard` and `GET /search` endpoints.
**Labels:** `backend`, `api`

### 📝 Issue 34: Protect Routes with Middleware
**Description:** Ensure only logged-in users can onboard.
**Task:** Create `server/middleware/auth.js` that verifies the JWT from headers and attaches `req.user`.
**Labels:** `backend`, `security`

### 📝 Issue 35: Create Mock LLM Extraction Service
**Description:** Simulate AI parsing.
**Task:** Create `server/services/aiService.js`. Export a function that takes a text transcript and returns a mocked JSON business profile.
**Labels:** `backend`, `ai`

### 📝 Issue 36: Connect Onboarding Route to AI Service
**Description:** Make the onboard endpoint work.
**Task:** In `POST /onboard`, take `req.body.transcript`, pass it to `aiService`, and save the resulting JSON to MongoDB.
**Labels:** `backend`, `api`

### 📝 Issue 37: Implement Consumer Search Query
**Description:** Fetch local businesses for consumers.
**Task:** In `GET /search`, write a Mongoose query that filters businesses by `category` or `city` passed in query params.
**Labels:** `backend`, `database`

### 📝 Issue 38: Implement Global Error Handler
**Description:** Catch server crashes gracefully.
**Task:** Create an Express error handling middleware in `server/index.js` that returns a standard `{ error: "Message" }` format.
**Labels:** `backend`, `api`

### 📝 Issue 39: Add Input Validation Middleware
**Description:** Secure the API inputs.
**Task:** Install `joi`. Add validation to the registration route to ensure email and phone formats are correct.
**Labels:** `backend`, `security`

### 📝 Issue 40: Create Health Check Endpoint
**Description:** Used for server deployment checks.
**Task:** Add a simple `GET /health` route returning HTTP 200 `{ status: "UP" }`.
**Labels:** `backend`, `good first issue`
