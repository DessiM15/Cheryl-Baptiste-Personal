"use client";

import { useEffect, useState } from "react";

const PALETTES = [
  { id: "cocoa", label: "Cocoa & Cream", deep: "#3B2C21", accent: "#8A6A50" },
  { id: "sage", label: "Sage & Stone", deep: "#32402E", accent: "#71835F" },
  { id: "blue", label: "Soft Blue & Ivory", deep: "#2B3A47", accent: "#6E8CA0" },
  { id: "mono", label: "Ink & Bone", deep: "#191919", accent: "#7A736C" },
  { id: "rosewood", label: "Rosewood", deep: "#54332E", accent: "#A97B6F" },
];

export default function PalettePill() {
  const [active, setActive] = useState("cocoa");

  useEffect(() => {
    const saved = localStorage.getItem("palette");
    if (saved && PALETTES.some((p) => p.id === saved)) {
      setActive(saved);
      document.documentElement.dataset.palette = saved;
    }
  }, []);

  const pick = (id: string) => {
    setActive(id);
    document.documentElement.dataset.palette = id;
    localStorage.setItem("palette", id);
  };

  return (
    <div className="palette-pill" role="group" aria-label="Preview color palette">
      <span className="label">Palette</span>
      {PALETTES.map((p) => (
        <button
          key={p.id}
          type="button"
          title={p.label}
          aria-label={p.label}
          aria-pressed={active === p.id}
          onClick={() => pick(p.id)}
          style={{ background: `linear-gradient(135deg, ${p.deep} 50%, ${p.accent} 50%)` }}
        />
      ))}
    </div>
  );
}
