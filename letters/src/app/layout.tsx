import type { Metadata } from "next";
import { Manrope, Fraunces, Alex_Brush, Architects_Daughter } from "next/font/google";
import "./globals.css";
import ParticleField from "@/components/ParticleField";
import CustomCursor from "@/components/CustomCursor";
import AmbientBackground from "@/components/AmbientBackground";
import PhotoTilt from "@/components/PhotoTilt";
import FloatingHearts from "@/components/FloatingHearts";

// Loaded via next/font (self-hosted at build time) rather than a plain CSS
// @import — a raw @import to fonts.googleapis.com gets silently stripped in
// production builds, so the custom fonts never actually loaded there.
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ui-loaded",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif-loaded",
});
const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script-loaded",
});
const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans-loaded",
});

export const metadata: Metadata = {
  title: "Letters I Never Sent You",
  description: "For my Rani",
};

export const viewport = {
  themeColor: "#170A12",
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} ${alexBrush.variable} ${architectsDaughter.variable}`}
    >
      <body>
        <AmbientBackground />
        <ParticleField />
        <FloatingHearts />
        <CustomCursor />
        <PhotoTilt />
        {children}
      </body>
    </html>
  );
}
