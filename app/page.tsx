"use client";

import { useState, useEffect } from "react";
import CreatureGrid from "@/components/CreatureGrid";
import CreatureSearch from "@/components/CreatureSearch";
import { VibeFilter } from "@/components/VibeFilter";

interface Creature {
  id: string;
  name: string;
  imageUrl: string;
  author: string;
  authorLink: string;
  vibe: string;
}

export default function HomePage() {
  const [creatures, setCreatures] = useState<Creature[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVibe, setSelectedVibe] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCreatures() {
      try {
        const res = await fetch("/api/creatures");
        if (!res.ok) throw new Error("Failed to summon creatures");
        const data = await res.json();
        setCreatures(data.creatures || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCreatures();
  }, []);

  const filteredCreatures = creatures.filter((creature) => {
    const matchesSearch = creature.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVibe = selectedVibe === "all" || creature.vibe === selectedVibe;
    return matchesSearch && matchesVibe;
  });

  return (
    <> {/* Added Fragment to wrap everything */}
      <div className="max-w-6xl mx-auto space-y-12">
        {/* CONTROLS: Search and Filter */}
        <section className="bg-gothCard/20 p-6 rounded-3xl border border-gothAccentSoft/10 backdrop-blur-md space-y-6">
          <div className="max-w-2xl mx-auto">
            <CreatureSearch
              defaultQuery={searchQuery}
              onSearch={(query) => setSearchQuery(query)}
            />
          </div>

          <div className="flex justify-center border-t border-gothAccentSoft/10 pt-6">
            <VibeFilter
              active={selectedVibe}
              onChange={(vibe) => setSelectedVibe(vibe)}
            />
          </div>
        </section>

        {/* RESULTS GRID */}
        <section className="min-h-[400px]">
          <CreatureGrid
            creatures={filteredCreatures}
            loading={loading}
            error={error}
            onImageClick={(url) => setSelectedImage(url)}
          />

          {!loading && filteredCreatures.length === 0 && (
            <div className="text-center py-20 animate-pulse">
              <p className="text-slate-500 italic text-lg">The shadows remain empty...</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedVibe("all"); }}
                className="text-gothAccent text-sm underline mt-2"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>
      </div>

      {/* LIGHTBOX MODAL - Now inside the return statement correctly */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[85vh] border-2 border-gothAccentSoft/30 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Creature magnification"
              className="w-full h-full object-contain shadow-[0_0_100px_rgba(191,90,242,0.2)]"
            />
            <button
              className="absolute top-4 right-4 bg-black/60 text-white hover:text-gothAccent p-2 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}