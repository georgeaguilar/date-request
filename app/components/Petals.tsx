"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  char: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

const CHARS = ["🌸", "💕", "✨", "🌹", "💗", "🌺", "💖", "⭐"];

export default function Petals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
        left: Math.random() * 100,
        duration: 7 + Math.random() * 9,
        delay: Math.random() * 10,
        size: 10 + Math.random() * 10,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute animate-fall opacity-0"
          style={{
            left: `${p.left}vw`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.char}
        </div>
      ))}
    </div>
  );
}
