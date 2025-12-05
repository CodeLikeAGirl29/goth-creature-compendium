export default function Footer() {
  return (
    <footer className="relative mt-auto w-full px-6 py-6 text-center text-xs text-slate-400">
      {/* Spiderwebs */}
      <svg
        className="footer-web left"
        viewBox="0 0 100 100"
        fill="none"
        stroke="white"
        strokeWidth="1"
      >
        <path d="M0 0 L100 0 L0 100 Z" />
        <path d="M0 0 L80 0 L0 80 Z" opacity="0.6" />
        <path d="M0 0 L60 0 L0 60 Z" opacity="0.4" />
        <path d="M0 0 L40 0 L0 40 Z" opacity="0.3" />
      </svg>

      <svg
        className="footer-web right"
        viewBox="0 0 100 100"
        fill="none"
        stroke="white"
        strokeWidth="1"
      >
        <path d="M100 0 L0 0 L100 100 Z" />
        <path d="M100 0 L20 0 L100 80 Z" opacity="0.6" />
        <path d="M100 0 L40 0 L100 60 Z" opacity="0.4" />
        <path d="M100 0 L60 0 L100 40 Z" opacity="0.3" />
      </svg>

      {/* Bloodline divider */}
      <div className="bloodline" />
      <p>&copy; {new Date().getFullYear()} Created by lindseyk | All rights reserved.</p>
    </footer>
  );
}
