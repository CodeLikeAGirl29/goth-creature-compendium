// components/CreatureSearch.tsx
"use client";

import { FormEvent } from "react";

type CreatureSearchProps = {
  defaultQuery: string;
  onSearch: (query: string) => void;
};

export default function CreatureSearch({
  defaultQuery,
  onSearch,
}: CreatureSearchProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = (formData.get("q") as string) || "";
    onSearch(query);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3 md:items-center"
    >
      <div className="flex-1 relative">
        <input
          name="q"
          defaultValue={defaultQuery}
          placeholder="Search for bats, wolves, ravens, gothic cats..."
          className="w-full bg-gothCard/70 border border-gothAccentSoft/60 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-gothAccent focus:ring-1 focus:ring-gothAccent"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 rounded-xl text-sm font-medium bg-gothAccent text-black hover:bg-gothAccent/90 transition"
      >
        Summon Creatures
      </button>
    </form>
  );
}
