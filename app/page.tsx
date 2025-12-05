// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import CreatureSearch from "../components/CreatureSearch";
import CreatureGrid from "../components/CreatureGrid";
import { VibeFilter } from "../components/VibeFilter";

type Creature = {
  id: string;
  name: string;
  imageUrl: string;
  author: string;
  authorLink: string;
  vibe: string;
};

export default function HomePage() {
  const [query, setQuery] = useState("gothic animal");
  const [vibe, setVibe] = useState("all");
  const [creatures, setCreatures] = useState<Creature[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchCreatures(q: string, v: string) {
    try {
      setLoading(true);
      setError("");

      const params = new URLSearchParams();
      params.set("q", q);
      params.set("vibe", v);

      const res = await fetch(`/api/creatures?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch creatures");

      const data = await res.json();
      setCreatures(data.creatures);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCreatures(query, vibe);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vibe]);

  return (
    <div className="gothic-theme min-h-screen px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <section className="space-y-3">
          <header className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">
              <span className="text-goth-accent">Gothic</span> Creature Compendium
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              Explore a curated menagerie of gothic creatures—winged, fanged, and beautifully uncanny. Search by name or type, then refine by vibe to summon the perfect familiar for your dark aesthetic.
            </p>
          </header>

          <div className="space-y-3">
            <CreatureSearch
              defaultQuery={query}
              onSearch={(newQuery) => {
                setQuery(newQuery);
                fetchCreatures(newQuery, vibe);
              }}
            />

            <VibeFilter
              active={vibe}
              onChange={(newVibe) => setVibe(newVibe)}
            />
          </div>
        </section>

        <section>
          <CreatureGrid
            creatures={creatures}
            loading={loading}
            error={error}
          />
        </section>
      </div>
    </div>
  );
}