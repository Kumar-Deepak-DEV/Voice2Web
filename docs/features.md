# Voice2Web Features & Workflow

This document outlines the exact workflow for the Voice2Web MVP (Minimum Viable Product).

## 1. Business Owner Journey (10 Steps)

The onboarding process is designed to prevent duplicates, verify identity, and generate a professional website seamlessly.

*   **Step 1: Landing Page** - User selects "Take My Business Online".
*   **Step 2: Registration** - Owner inputs Full Name, Business Name, Phone Number, Email (Optional), and Password.
*   **Step 3: Duplicate Detection** - The system checks the database for exact matches (Phone/Email) or strong matches (Business Name + Location). If a match is found, creation is blocked and the user is prompted to login.
*   **Step 4: Phone Verification** - An OTP is sent to the provided phone number. Upon entry, the account is activated.
*   **Step 5: Business Setup** - The owner chooses between Voice Input or Manual Form.
*   **Step 6: Voice Input & AI Processing** - The owner speaks their business details. The AI pipeline (Speech-to-Text -> Extraction) generates a structured JSON profile.
*   **Step 7: Review & Edit** - The owner reviews the AI-extracted data (Name, Category, Products, Hours). Nothing is published yet.
*   **Step 8: Theme Selection** - The owner selects a theme (`Classic`, `Modern`, `Professional`, `Minimal`).
*   **Step 9: Website Generation** - The system generates the frontend pages (Home, About, Products, Contact).
*   **Step 10: Publish** - The owner clicks publish and receives a live URL, QR code, and access to their Dashboard.

## 2. Consumer Discovery Journey (7 Steps)

*   **Step 1: Open Platform** - Consumer selects "Find Businesses".
*   **Step 2: Location Setup** - Uses device location or manual city entry (e.g., "Patna").
*   **Step 3: Search** - Search by category or product (e.g., "Grocery", "Electrician").
*   **Step 4: Search Engine** - The platform queries business names, categories, products, and descriptions based on location.
*   **Step 5: Results** - Displays cards showing Business Name, Distance, Open Status, and Category.
*   **Step 6: Business Profile** - Consumer views the generated business website.
*   **Step 7: Contact Business** - Consumer clicks to Call, WhatsApp, or Get Directions. *The platform is not involved in ordering or payments.*

## 3. Internal Workflow Summary
Owner Registers -> Duplicate Check -> Phone Verification (OTP) -> Voice Description -> AI Extraction -> Review & Edit -> Theme Selection -> Website Generation -> Publish -> Consumer Discovery -> Direct Business Contact.
