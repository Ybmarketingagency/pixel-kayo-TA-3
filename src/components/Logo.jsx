export default function Logo({ className = 'h-9' }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="Pixel"
        className="h-full w-auto object-contain"
      />
    </div>
  );
}
