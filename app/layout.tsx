import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MindScribe",
  description: "AI-assisted notes & to-do app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}