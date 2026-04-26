// components/CreatureCard.tsx
type CreatureCardProps = {
  name: string;
  imageUrl: string;
  author: string;
  authorLink: string;
  vibe: string;
  onOpen?: (url: string) => void;
};

export default function CreatureCard({
  name, imageUrl, author, authorLink, vibe, onOpen
}: CreatureCardProps) {
  return (
    <article className="bg-gothCard/80 border border-gothAccentSoft/40 rounded-2xl overflow-hidden shadow-lg shadow-black/40 hover:shadow-gothAccent/30 transition-shadow duration-300">
      {/* Wrap the image in a clickable div */}
      <div onClick={() => onOpen(imageUrl)} className="cursor-pointer">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-sm line-clamp-1">{name}</h3>
          <span
            className={`text-[0.65rem] px-2 py-1 rounded-full uppercase tracking-[0.15em] ${vibe === "vampire"
              ? "vibe-vampire"
              : "bg-goth-accent-soft/60 text-goth-accent"
              }`}
          >
            {vibe}
          </span>
        </div>
        <p className="text-xs text-slate-400">
          Captured by{" "}
          <a
            href={authorLink}
            target="_blank"
            className="underline underline-offset-2 hover:text-gothAccent"
          >
            {author}
          </a>
        </p>
      </div>
    </article>
  );
}