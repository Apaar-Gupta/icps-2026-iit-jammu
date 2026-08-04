// Centralized content for the ICPS 2026 site.
// Edit this file to update dates, sponsors, and announcements —
// the components just render whatever is defined here.

export const conference = {
  shortName: "ICPS 2026",
  fullName: "International Conference on Power Systems (ICPS) 2026",
  edition: "12th",
  theme:
    "Leveraging Smart Technologies for Clean, Resilient, and Secure Power Systems",
  venue: "Indian Institute of Technology Jammu, India",
  dates: "December 2026", // update with exact dates once finalized
  host: "Indian Institute of Technology (IIT) Jammu",
  department: "Department of Electrical Engineering, IIT Jammu",
};

// Top navigation bar structure. Items without a `dropdown` render as a
// plain link; items with a `dropdown` render as a hover/tap menu.
export type NavItem = {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
};

export const navMenu: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    dropdown: [
      { label: "Venue", href: "/venue" },
      { label: "Conference Committee", href: "/conference_committee" },
      { label: "Contact Us", href: "/contact_us" },
    ],
  },
  {
    label: "For Authors",
    dropdown: [
      { label: "Call for Papers", href: "/call_for_papers" },
      { label: "Paper Submission", href: "/paper_submission" },
      { label: "Conference Tracks", href: "/conference_tracks" },
      { label: "Camera Ready papers", href: "/camera_ready_papers" },
      { label: "Presentation Guidelines", href: "/presentation_guidelines" },
    ],
  },
  {
    label: "Program",
    dropdown: [
      { label: "Technical Program", href: "/tech_program" },
      { label: "Keynote Speakers and Tutorials", href: "/speakers" },
    ],
  },
  { label: "Registration", href: "/registration" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Accommodation", href: "/accomodation" },
];

// CTA buttons shown inside the Hero section (unrelated to the navbar above).
export const navLinks = [
  { label: "Call for Papers", href: "/docs/CFP-ICPS-2026.pdf" },
  { label: "Submit Paper", href: "/paper_submission" },
];

export const topStrip = {
  text: "The complete conference schedule will be available here.",
 
};

export const aboutParagraphs = [
  `The International Conference on Power Systems (ICPS) 2026, themed "${
    "Leveraging Smart Technologies for Clean, Resilient, and Secure Power Systems"
  }", aims to explore the transformative role of emerging technologies in shaping the future of global power systems. As the power sector enters a new era driven by the need for enhanced sustainability, resilience, and security, ICPS provides a unique forum for researchers, engineers, and policymakers from academia, industry, and practice to engage in thought-provoking discussions and collaborative efforts.`,
  `The 12th edition of ICPS will be held at IIT Jammu, India, bringing together experts to exchange knowledge across a wide range of power systems domains — including Smart Grid and Power Systems, Smart Generation, Transmission & Distribution, Renewable Energy Systems, and Artificial Intelligence and Data Analytics.`,
  `On behalf of the Steering Committee and the Organizing Committee, we cordially invite you to join us at IIT Jammu for ICPS 2026. With a mix of technical sessions, interactive panel discussions, and tutorials by leading experts, this conference will provide valuable opportunities for networking, learning, and collaboration.`,
];

export type Sponsor = { name: string; logo: string; url?: string };

export const sponsorTiers: { tier: string; sponsors: Sponsor[] }[] = [
  {
    tier: "Platinum Sponsors",
    sponsors: [
      // { name: "Sponsor Name", logo: "/images/sponsor.png", url: "https://..." },
    ],
  },
  {
    tier: "Gold Sponsors",
    sponsors: [],
  },
  {
    tier: "Silver Sponsors",
    sponsors: [],
  },
  {
    tier: "Bronze Sponsors",
    sponsors: [],
  },
];

export const coSponsors: Sponsor[] = [
  // { name: "IEEE", logo: "/images/IEEELogo.png", url: "https://ieee.org" },
];

export type DateRow = { event: string; date: string; struckDate?: string };

export const importantDates: DateRow[] = [
  { event: "First call for papers", date: "TBA" },
  { event: "Paper submission opens", date: "TBA" },
  { event: "Full paper submission deadline", date: "TBA" },
  { event: "Notification of paper acceptance", date: "TBA" },
  { event: "Camera-ready paper submission deadline", date: "TBA" },
  { event: "Registration opens", date: "TBA" },
  { event: "Deadline for Author Registration", date: "TBA" },
  { event: "Early bird registration ends", date: "TBA" },
  { event: "Conference dates", date: "December 2026" },
];

export type Update = { date: string; text: string; href?: string };

export const updates: Update[] = [
  {
    date: "31 July 2026",
    text: "Website for ICPS 2026 is now live. More details coming soon.",
  },
];

export const organizers: Sponsor[] = [
  // { name: "IIT Jammu", logo: "/images/IITJammuLogo.png", url: "https://iitjammu.ac.in" },
];

export const technicalCoSponsors: Sponsor[] = [
  // { name: "IEEE", logo: "/images/IEEELogo.png" },
];

export const footer = {
  text: `© ${new Date().getFullYear()} ${conference.shortName}. All rights reserved. | ${conference.shortName} is organized by the ${conference.department}.`,
};
