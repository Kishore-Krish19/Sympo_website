# Sympo – National Level Technical Symposium Website

Created for the Symposium **"Sympo"**, organized by the Department of Computer Science Engineering, Government College of Engineering, Erode.

## Table of Contents

- [About Sympo](#about-Sympo)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Event Categories](#event-categories)
- [Workshops](#workshops)
- [Registration Details](#registration-details)
- [Bank Details](#bank-details)
- [Local Development](#local-development)
- [Project Structure](#project-structure)
- [Backend Integration](#backend-integration)
- [Contributing](#contributing)
- [License](#license)

---

## About Sympo

**Sympo** is a National Level Technical Symposium organized by the Department of Computer Science Engineering to provide a platform for young engineers to showcase technical knowledge and innovation. The event bridges theoretical learning with real-world applications, encouraging precision and scientific reasoning. Through technical competitions, Sympo nurtures innovation and teamwork.

### Guidelines

- College ID card is mandatory.
- Maintain discipline and professional behaviour.
- Malpractice leads to immediate disqualification.
- Organizers reserve the right to modify rules.
- Judges’ decisions are final.
- Wearing formal clothes is compulsory.
- Participants must reach the venue by 9:00 AM.
- **Refreshments & Lunch**: Provided for all registered participants.

---

## Tech Stack

- **Frontend:** React (TypeScript, React Router), Tailwind CSS, Framer Motion
- **Backend:** Google Apps Script (for registration data, validation, and file handling)
- **Types:** TypeScript
- **Styling:** Tailwind CSS, CSS
- **Data Integration:** Google Sheets & Google Drive via Apps Script
- **Charting/Visualization:** Recharts

---

## Features

- Modern, responsive, animated React-based website with event/registration pages.
- Categories: Technical events, Non-Technical events, and Workshops.
- Per-event registration with validation (team size, workshop eligibility, food preferences, etc.).
- Confirmation via email and integration with Google Sheets/Drive for backend data handling.
- QR code generation for registration/payment.
- Countdown timers for event dates and registration closing.
- Downloadable posters and info.

---

## Event Categories

### Technical Events
- **Paper Presentation**: Showcase your innovative ideas and research.
- **3D CAD Modeling (Design Challenge)**: Test modeling skills in Fusion 360/SolidWorks.
- **Mech Core Quiz**: Competition on Computer Science concepts.
- **Legend in Lathe (Machining)**: Display projects (final year/hobby).

Entry fee: ₹ 249 / person

### Non-Technical Events
- **Photography**: Capture the moment.
- **Short Film**: Storytelling and creativity.
- **Water Rocketry**: Design and launch a water-powered rocket.
- **Trebuchet**: Build a gravity-powered trebuchet.

Entry fee: ₹ 249 / person or per team (as specified)

---

## Workshops

#### Main Workshop (by industry expert)
- **Topic:** Drone / UAV (Unmanned Aerial Vehicle)
- **Trainer:** Dr. Alan Grant (Tesla Alumni)
- **Date:** March 4, 2026 | **Time:** 11:00 AM – 1:00 PM
- **Location:** Computer Science Department, GCE Erode
- **Benefits:**
  - Basics of Drone & UAV Systems
  - Drone Components & Flight Control
  - Industrial/Commercial Applications
  - Safety, Regulations & Ethics
  - Career & Future Trends

  Entry fee: ₹ 399 / person

#### Optional Workshops (as add-ons or standalone)
- **Game Development**
  - Hands-on: Create a 2D game with Godot Engine
  - For all experience levels
  - Entry fee: ₹ 299 / person

- **ECU (Electronic Control Unit)**
  - Modern automobile systems, sensors/actuators, real-world demos
  - Entry fee: ₹ 299 / person

---

## Registration Details

- **Online Registration Ends:** 03 March 2026, 09:59 PM
- **On-spot Registration:** 04 March 2026, 09:00 AM – 10:00 AM
- **Common Registration Closing Date:** 03 March 2026, 21:59 IST

#### Registration Validation
- Solo/Team eligibility checks.
- Payment screenshot upload required.
- Google Apps Script backend validates team sizes, payment, event/workshop eligibility.
- Confirmation email with event/participant details sent upon success.

---

## Local Development

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key.
3. Run the app:
   ```bash
   npm run dev
   ```

---

## Project Structure

```
/
├── App.tsx                # Main React app, router and layout
├── components/            # UI components (Navbar, Footer, etc)
├── pages/
│   ├── Home.tsx           # Main landing page
│   ├── About.tsx
│   ├── Events.tsx         # Event categories
│   ├── WorkshopCategories.tsx
│   └── ...                # Other event/workshop/detail pages
├── backend/
│   └── Code.gs            # Google Apps Script backend (form validation, Google Sheets/Drive integration)
├── assets/                # Logos, images, downloadable files
├── public/                # Public static files
├── constants.ts           # Event, workshop, and coordinator definitions
├── types.ts               # TypeScript types/interfaces
├── index.html / index.tsx # React entry point
├── package.json           # Project metadata and dependencies
└── README.md              # This documentation
```

---

## Backend Integration

- Backend Google Apps Script (`backend/Code.gs`) receives registration POST requests.
- **Key functions:**
  - Validates team size, optional workshop rules, payment, and event category.
  - Stores data in specific Google Sheets (main registration, food count, workshops, etc.).
  - Uploads payment screenshots to Google Drive, assigns to subfolders.
  - Sends confirmation emails to team leader.
- Handles edge cases (duplicate registrations, incorrect amounts, etc.)—review source for full logic.

---

## Contributing

Pull requests are welcome! For suggestions or improvements, feel free to open an issue.

---

## License

Distributed under the MIT License.

---

**For queries, contact event coordinators:**

- Mr. Dony Charles: +91 78100 85410
- Mr. Venkataprasath: +91 70105 91904
- Mr. Vedheswar: +91 93611 32882
- Mr. Solaivendhan: +91 70948 77363

---

**Official Symposium Website Repository:**  
[https://github.com/Kishore-Krish19/Sympo_website](https://github.com/Kishore-Krish19/Sympo_website)
