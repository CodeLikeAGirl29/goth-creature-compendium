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
      {/* 1. We apply 'gothic-theme' to the body.
        2. 'bg-goth-bg' ensures the dark background is set from your CSS variable.
      */}
      <body className="gothic-theme bg-goth-bg min-h-screen font-sans antialiased text-foreground">
        <FairyDustLayer />

        <div className="flex flex-col min-h-screen relative z-10">
          {/* Header with your specific goth-accent-soft border */}
          <header className="border-b border-goth-accent-soft px-6 py-6 flex items-center justify-between backdrop-blur-md sticky top-0 z-50 bg-goth-bg/80">
            <div className="flex items-center gap-3">
              <GothSparkles />
              <h1 className="text-xl md:text-2xl font-bold tracking-[0.15em] uppercase">
                <span className="text-goth-accent">Gothic</span> Compendium
              </h1>
            </div>

            <span className="hidden sm:block text-[10px] uppercase tracking-[0.3em] text-slate-500">
              Curated curiosities from the void
            </span>
          </header>

          {/* Main content area */}
          <main className="flex-1 w-full mx-auto">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}