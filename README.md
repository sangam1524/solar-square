# Solar Square - Solar Energy Landing Page

A beautiful, modern landing page for Solar Square with contact form integration.

## Features

- ✨ Beautiful landing page with solar theme
- 📧 Contact page with form (Name, Email, Message)
- 📊 Google Sheets/Excel integration for form submissions
- ⚙️ Global configuration file for easy customization
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

### Global Settings

Project name aur baaki settings ko easily change karne ke liye `config.ts` file edit karein:

```typescript
export const config = {
  projectName: "Solar Square",
  tagline: "Harnessing the Power of the Sun",
  description: "Leading solar energy solutions for a sustainable future",
  contactEmail: "info@solarsquare.com",
  phone: "+91 1234567890",
  address: "Your Address Here",
};
```

### Google Sheets Integration

Form submissions ko Excel/Google Sheets me save karne ke liye, `GOOGLE_SHEETS_SETUP.md` file dekhein. Detailed instructions wahan diye gaye hain.

Quick setup:
1. `.env.local` file banayein
2. `GOOGLE_SHEETS_WEBHOOK_URL` add karein
3. Server restart karein

## Project Structure

```
solar-square/
├── app/
│   ├── page.tsx          # Landing page
│   ├── contact/
│   │   └── page.tsx       # Contact page with form
│   ├── api/
│   │   └── contact/
│   │       └── route.ts   # API route for form submission
│   └── layout.tsx         # Root layout
├── config.ts              # Global configuration
└── GOOGLE_SHEETS_SETUP.md # Google Sheets setup guide
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
