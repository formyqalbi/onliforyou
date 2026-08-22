import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Letters I Never Sent You",
  description: "For my Rani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="floating-heart" style={{ left: '10%', animationDelay: '0s' }}>❤️</div>
        <div className="floating-heart" style={{ left: '30%', animationDelay: '5s', fontSize: '1.5rem' }}>💖</div>
        <div className="floating-heart" style={{ left: '60%', animationDelay: '2s' }}>💕</div>
        <div className="floating-heart" style={{ left: '85%', animationDelay: '8s', fontSize: '1.2rem' }}>💓</div>
        <div className="floating-heart" style={{ left: '20%', animationDelay: '12s', fontSize: '1rem', opacity: 0.5 }}>✨</div>
        <div className="floating-heart" style={{ left: '75%', animationDelay: '14s', fontSize: '1.8rem', opacity: 0.7 }}>💗</div>
        <div className="floating-heart" style={{ left: '50%', animationDelay: '7s', fontSize: '1.3rem' }}>💞</div>
        <div className="floating-heart" style={{ left: '5%', animationDelay: '11s', fontSize: '2rem' }}>💖</div>
        {children}
      </body>
    </html>
  );
}
