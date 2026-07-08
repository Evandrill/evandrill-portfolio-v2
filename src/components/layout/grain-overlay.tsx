export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-soft-light"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12) 0.5px, transparent 0.5px), radial-gradient(circle at 80% 40%, rgba(255,255,255,0.08) 0.5px, transparent 0.5px), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px, 4px 4px, 5px 5px",
      }}
    />
  );
}
