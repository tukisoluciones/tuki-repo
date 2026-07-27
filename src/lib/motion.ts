export function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isCoarsePointer() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(pointer: coarse)").matches;
}

export function isDesktopFinePointer() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: fine)").matches && window.innerWidth > 1024
  );
}
