# Sympo – National Level Technical Symposium Website

Created for the Symposium **"Sympo"**, organized by the Department of Computer Science Engineering, Government College of Engineering, Erode.

## Table of Contents

- [About Sympo](#about-Sympo)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Backend Integration](#backend-integration)
- [Contributing](#contributing)
- [License](#license)

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

**Official Symposium Website Repository:**  
[https://github.com/Kishore-Krish19/Sympo_website](https://github.com/Kishore-Krish19/Sympo_website)
