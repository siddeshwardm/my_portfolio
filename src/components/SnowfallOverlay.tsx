import { useEffect, useMemo, useState } from "react";
import Snowfall from "react-snowfall";

export function SnowfallOverlay() {
  const [isLight, setIsLight] = useState(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("light")
  );

  useEffect(() => {
    const el = document.documentElement;

    const update = () => setIsLight(el.classList.contains("light"));
    update();

    const observer = new MutationObserver(update);
    observer.observe(el, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const snowflakeCount = useMemo(() => {
    if (typeof window === "undefined") return 120;
    return window.innerWidth < 640 ? 70 : 140;
  }, []);

  const color = isLight ? "rgba(15, 23, 42, 0.25)" : "rgba(255, 255, 255, 0.75)";

  return (
    <Snowfall
      color={color}
      snowflakeCount={snowflakeCount}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 40,
        pointerEvents: "none",
      }}
    />
  );
}
