import type { Metadata } from "next";
import { ThemeProvider } from "@turner-strategic/ui";
import { Header } from "./_components/Header";
import { LeftNav } from "./_components/LeftNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Turner Strategic — Reading Room",
  description: "Turner Strategic reading room.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex flex-1">
              <LeftNav />
              <main className="min-w-0 flex-1">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
