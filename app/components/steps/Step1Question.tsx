"use client";

import { useRef } from "react";
import GifBanner from "@/app/components/GifBanner";

interface Props {
  onYes: () => void;
}

export default function Step1Question({ onYes }: Props) {
  const noRef = useRef<HTMLButtonElement>(null);

  function runAway() {
    const btn = noRef.current;
    if (!btn) return;
    const rx = (Math.random() > 0.5 ? 1 : -1) * (50 + Math.random() * 100);
    const ry = (Math.random() > 0.5 ? 1 : -1) * (30 + Math.random() * 60);
    btn.style.transition = "transform 0.22s ease";
    btn.style.transform = `translate(${rx}px, ${ry}px)`;
    setTimeout(() => {
      if (btn) btn.style.transform = "";
    }, 420);
  }

  return (
    <div>
      <GifBanner
        src="https://media.tenor.com/x8v1oNUOmg4AAAAC/cute-love.gif"
        alt="love"
      />
      <div className="text-4xl sm:text-5xl text-center mb-4 animate-heartbeat">💌</div>
      <h1 className="font-serif text-xl sm:text-2xl text-center text-stone-800 leading-snug mb-2">
        Dayana,{" "}
        <em className="text-rose-600">¿quieres tener una cita conmigo?</em>
      </h1>
      <p className="text-center text-stone-400 text-sm font-light mb-7">
        Tengo algo especial planeado para nosotros ✨
      </p>
      <div className="flex gap-4 justify-center relative">
        <button
          onClick={onYes}
          className="flex-1 max-w-[180px] py-4 rounded-full bg-linear-to-br from-rose-400 to-rose-600 text-white text-lg shadow-lg shadow-rose-200 hover:-translate-y-0.5 hover:shadow-xl transition-all"
        >
          ¡Sí, claro! 💕
        </button>
        <button
          ref={noRef}
          onMouseEnter={runAway}
          onTouchStart={(e) => { e.preventDefault(); runAway(); }}
          className="flex-1 max-w-[120px] py-4 rounded-full border border-stone-200 text-stone-400 text-sm font-light cursor-default select-none"
        >
          No
        </button>
      </div>
    </div>
  );
}
