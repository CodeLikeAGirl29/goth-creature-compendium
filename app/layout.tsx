// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import GothSparkles from "../components/GothSparkles";
import FairyDustLayer from "../components/FairyDustLayer";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Gothic Creature Compendium",
  description: "Search and discover beautifully dark creatures of the night.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Apply global gothic theme */}
      <body className="gothic-theme min-h-screen">
        <FairyDustLayer />
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="border-b border-goth-accent-soft/60 px-6 py-4 flex items-center justify-between">
            <GothSparkles />
            <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
              <span className="text-goth-accent">Gothic</span> Creature Compendium
            </h1>

            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
              nocturnal archive
            </span>
          </header>

          {/* Main content area */}
          <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
