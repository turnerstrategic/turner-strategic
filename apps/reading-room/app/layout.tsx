import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Turner Strategic — Reading Room",
  description: "Turner Strategic reading room.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
