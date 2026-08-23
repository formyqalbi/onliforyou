import type { Metadata } from "next";
import "./globals.css";
import ParticleField from "@/components/ParticleField";
import CustomCursor from "@/components/CustomCursor";
import AmbientBackground from "@/components/AmbientBackground";
import PhotoTilt from "@/components/PhotoTilt";
import FloatingHearts from "@/components/FloatingHearts";

export const metadata: Metadata = {
  title: "Letters I Never Sent You",
  description: "For my Rani",
};

export const viewport = {
  themeColor: "#170A12",
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
        <FloatingHearts />
        <CustomCursor />
        <PhotoTilt />
        {children}
      </body>
    </html>
  );
}
