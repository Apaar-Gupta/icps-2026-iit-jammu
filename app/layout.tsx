import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
// @ts-ignore
import "./globals.css";
import Navbar from "@/components/Navbar";


const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "ICPS 2026 | IIT Jammu",
  description:
    "International Conference on Power Systems (ICPS) 2026, hosted at IIT Jammu, India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}