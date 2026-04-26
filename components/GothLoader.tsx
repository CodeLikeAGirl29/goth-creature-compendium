export default function GothLoader() {
  return (
    <div className="goth-loader text-sm text-slate-300">
      <div className="relative">
        <div className="goth-loader-ring" />
        <div className="goth-loader-orb" />
      </div>
      <span className="italic">Conjuring shadows…</span>
    </div>
  );
}
