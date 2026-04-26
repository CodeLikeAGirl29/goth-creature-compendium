const VIBES = ["all", "cute", "spooky", "demonic", "ethereal", "vampire"] as const;

type VibeFilterProps = {
  active: string;
  onChange: (vibe: string) => void;
};

export function VibeFilter({ active, onChange }: VibeFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {VIBES.map((v) => (
        <button
          key={v}
          onClick={() => onChange(v)}
          className={`px-3 py-1 rounded-full text-xs uppercase tracking-[0.16em] border transition ${active === v
            ? "bg-goth-accent border-goth-accent text-black"
            : "border-goth-accent-soft/60 text-slate-300 hover:border-goth-accent hover:text-goth-accent"
            }`}
        >
          {v}
        </button>
      ))}
    </div>
  );
}
