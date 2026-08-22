import type { Metadata } from "next";
import "./globals.css";
import ParticleField from "@/components/ParticleField";
import CustomCursor from "@/components/CustomCursor";
import AmbientBackground from "@/components/AmbientBackground";
import PhotoTilt from "@/components/PhotoTilt";

export const metadata: Metadata = {
  title: "Letters I Never Sent You",
  description: "For my Rani",
};

export const viewport = {
  themeColor: "#0E0B0B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AmbientBackground />
        <ParticleField />
        <CustomCursor />
        <PhotoTilt />
        {children}
      </body>
    </html>
  );
}
