function GradientMesh({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-soft opacity-20 blur-[100px]" />
      <div className="absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-gradient-brand opacity-15 blur-[110px]" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan opacity-10 blur-[90px]" />
    </div>
  );
}

export default GradientMesh;
