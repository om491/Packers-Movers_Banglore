# FatShe Packers and Movers

A responsive React + Vite one-page website for relocation enquiries in Bangalore and across India. The quote and contact forms validate their fields and open a prefilled WhatsApp message for the visitor to review and send. This frontend does not store enquiries or claim that a message has been sent.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The static production site is written to `dist/`. Deploy that directory to any static hosting provider, such as Netlify, Vercel, GitHub Pages, Azure Static Web Apps, or an Nginx web server. Configure the provider to serve `index.html` for the root path.

## WhatsApp and email

- WhatsApp enquiries currently use the supplied number `8121951331`, formatted internationally as `91` + the number in the `wa.me` URL. Change the `phone` constant in `src/App.jsx` to update it.
- The email links use the supplied address `contact@sheetal.net`. They open the visitor's default email application; this site does not send email itself.
- No environment variables or backend are configured. Add a server-side endpoint and email provider integration before claiming that enquiries are stored or emailed.

## Content and assets

- The supplied prices, phone numbers, office address and hours are represented in the page.
- Review excerpts are adapted for readability from the referenced site; anonymous reviews are labeled as such. No ratings are fabricated.
- Photography is loaded from Unsplash URLs and Google Fonts from Google Fonts; a network connection is required to load them.

## Functional test checklist

- [ ] Navigation links scroll to the matching sections; mobile menu opens and closes.
- [ ] The quote flow validates pickup, destination, date, name, Indian mobile number and email.
- [ ] The review step opens a prefilled WhatsApp draft; confirm the visitor must press Send.
- [ ] Service enquiry buttons preselect the relevant service in the quote form.
- [ ] Route prices and the enquiry-only Hyderabad/Delhi routes render as supplied.
- [ ] Contact form validates name, mobile and message before opening WhatsApp.
- [ ] Call, WhatsApp and email contact links open their respective handlers.
- [ ] Test narrow mobile, tablet and desktop widths; check for horizontal overflow.
- [ ] Confirm remote Unsplash images load with a network connection.

No live GPS tracking, payment, database storage, or server-side email sending is implemented.
