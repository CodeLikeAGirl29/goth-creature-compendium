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
  creatures: any[]; // Or use your Creature type if defined
  loading?: boolean;
  error?: string;
  onImageClick: (url: string) => void; // Add this to the Grid props
};

export default function CreatureGrid({
  creatures,
  loading = false,
  error = "",
  onImageClick,
}: CreatureGridProps) {
  if (loading) return <div className="mt-4"><GothLoader /></div>;
  if (error) return <p className="text-sm text-red-400 mt-4">Error: {error}</p>;

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {creatures.map((c) => (
        <CreatureCard
          key={c.id}
          {...c}
          onOpen={onImageClick}
        />
      ))}
    </div>
  );
}