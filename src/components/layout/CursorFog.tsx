import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useMemo } from "react";

export function CursorFog() {
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 22, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 120, damping: 22, mass: 0.6 });

  const fogOpacity = useMotionValue(0);
  const fogOpacitySpring = useSpring(fogOpacity, {
    stiffness: 160,
    damping: 26,
    mass: 0.4,
  });

  const gradient = useMemo(() => {
      return `radial-gradient(closest-side, hsl(var(--primary) / 0.30), transparent 72%),
        radial-gradient(closest-side, hsl(var(--accent) / 0.24), transparent 70%)`;
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const finePointer =
      typeof window !== "undefined" &&
      window.matchMedia?.("(pointer: fine)").matches;

    if (!finePointer) return;

    let idleTimer: number | undefined;

    const setIdle = () => {
      fogOpacity.set(0.28);
    };

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      fogOpacity.set(0.85);

      if (idleTimer) window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(setIdle, 350);
    };

    const handleLeave = () => {
      fogOpacity.set(0);
      if (idleTimer) window.clearTimeout(idleTimer);
      idleTimer = undefined;
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerdown", handleMove, { passive: true });
    window.addEventListener("blur", handleLeave);
    document.addEventListener("mouseleave", handleLeave);

    // Start centered + subtle
    x.set(window.innerWidth / 2);
    y.set(window.innerHeight / 2);
    fogOpacity.set(0.28);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleMove);
      window.removeEventListener("blur", handleLeave);
      document.removeEventListener("mouseleave", handleLeave);
      if (idleTimer) window.clearTimeout(idleTimer);
    };
  }, [reduceMotion, fogOpacity, x, y]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none"
      style={{
        position: "fixed",
        left: springX,
        top: springY,
        width: 560,
        height: 560,
        borderRadius: 9999,
        transform: "translate(-50%, -50%)",
        backgroundImage: gradient,
        filter: "blur(40px)",
        opacity: fogOpacitySpring,
        zIndex: 1,
        willChange: "transform, opacity",
      }}
    />
  );
}
