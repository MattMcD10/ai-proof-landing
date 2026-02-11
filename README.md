# AI-Proof Your Career — Landing Page

## Project Overview
Marketing landing page for the ebook "AI-Proof Your Career" by M.R. McDermott.
The site converts visitors through a free AI Career Vulnerability Assessment quiz,
then captures emails in exchange for a free chapter + discount code.

## Design Reference
- `ai-proof-landing-page.jsx` contains the complete UI prototype
- Dark theme with navy/indigo gradient palette
- Fonts: Playfair Display (headings) + DM Sans (body)
- The prototype is a single React component — convert it into proper Next.js pages/components

## Tech Stack
- Next.js (App Router)
- Tailwind CSS
- TypeScript

## Key Features to Build
1. Hero section with animated background
2. 5-factor interactive vulnerability quiz with sliders
3. Results page with personalized risk level (color-coded)
4. Email capture form (integrate with ConvertKit or just a placeholder API route)
5. Mobile responsive

## Deployment
- Vercel

## Notes
- Keep all quiz logic client-side (no server calls needed for scoring)
- Email submission should POST to /api/subscribe
- Prioritize mobile experience — most traffic will be from social media
