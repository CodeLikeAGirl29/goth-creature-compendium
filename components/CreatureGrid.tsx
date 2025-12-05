// components/CreatureGrid.tsx

import CreatureCard from "./CreatureCard";
import GothLoader from "./GothLoader";

type Creature = {
  id: string;
  name: string;
  imageUrl: string;
  author: string;
  authorLink: string;
  vibe: string;
};

type CreatureGridProps = {
  creatures: Creature[];
  loading?: boolean;
  error?: string;
};

export default function CreatureGrid({
  creatures,
  loading = false,
  error = "",
}: CreatureGridProps) {
  if (loading) {
    return (
      <div className="mt-4">
        <GothLoader />
      </div>
    );
  }

  if (error) {
    return <p className="text-sm text-red-400 mt-4">Error: {error}</p>;
  }

  if (!loading && creatures.length === 0) {
    return (
      <p className="text-sm text-slate-400 mt-4">
        No creatures answered your call. Try a different search term.
      </p>
    );
  }

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {creatures.map((c) => (
        <CreatureCard key={c.id} {...c} />
      ))}
    </div>
  );
}
