export default function Logo({ className = 'h-8' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 flex items-center justify-center shadow-md shadow-brand-500/30">
        <div className="absolute inset-1 rounded-lg bg-white/10 backdrop-blur-sm" />
        <span className="relative text-white font-black text-lg leading-none">P</span>
      </div>
      <span className="font-black text-xl tracking-tight">
        pixel<span className="gradient-text">.</span>
      </span>
    </div>
  );
}
