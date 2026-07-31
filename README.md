# ICPS 2026 — IIT Jammu (Website)

Structure and page flow replicated from icps2025.in, restyled for IIT Jammu.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## File structure

```
icps-jammu/
├── app/
│   ├── layout.tsx        # root layout, fonts, metadata
│   ├── page.tsx           # home page — composes all sections below
│   └── globals.css        # tailwind base + shared utility classes
├── components/
│   ├── TopStrip.tsx        # thin announcement bar at very top
│   ├── Hero.tsx             # logo, title, venue, CTA buttons, sponsor strip
│   ├── About.tsx            # "About ICPS 2026" text block
│   ├── Sponsors.tsx         # Platinum/Gold/Silver/Bronze sponsor tiers
│   ├── ImportantDates.tsx   # dates table (submission, registration, etc.)
│   ├── Updates.tsx          # running list of announcements
│   ├── Organizers.tsx       # organizer logos (IIT Jammu, etc.)
│   └── Footer.tsx
├── lib/
│   └── siteData.ts          # ALL editable content lives here
└── public/
    ├── images/               # logos — replace ICPSLogo.png with the real one
    └── docs/                 # CFP PDF, schedule PDFs, etc.
```

## Editing content

Everything text-based (dates, sponsor names, updates, organizer logos) is in
`lib/siteData.ts`. You shouldn't need to touch the component files just to
update content — only for layout/design changes.

## Next steps to flesh this out

- Drop the real ICPS/IIT Jammu logo into `public/images/`
- Add sponsor & organizer logos, then list them in `lib/siteData.ts`
- Fill in `importantDates` and `updates` with real values
- Build out subpages: `/submission`, `/tech-program`, `/registration`,
  `/accomodation`, `/camera-ready`, `/sponsorship` (each as
  `app/<route>/page.tsx`) to match the original site's structure
- Add a favicon at `app/favicon.ico`
