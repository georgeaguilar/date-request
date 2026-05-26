"use client";

import { useState } from "react";
import GifBanner from "@/app/components/GifBanner";
import { FOOD_OPTIONS } from "@/app/lib/foods";

interface Props {
  initialFood: string;
  onNext: (food: string) => void;
  onBack: () => void;
}

export default function Step3Food({ initialFood, onNext, onBack }: Props) {
  const [selected, setSelected] = useState(initialFood);

  return (
    <div>
      <GifBanner
        src="/gifs/food.gif"
        alt="chef kiss"
        fallbackEmoji="🍽️"
      />
      <h2 className="font-serif text-xl text-rose-50 mb-1">🍽️ ¿Qué se te antoja?</h2>
      <p className="text-rose-300/50 text-xs font-light mb-4">
        Escoge lo que más se te provoque comer
      </p>

      <div className="grid grid-cols-2 gap-2.5 mb-5">
        {FOOD_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setSelected(opt.value)}
            className={`flex flex-col items-center gap-1.5 py-3.5 px-2 rounded-2xl border text-xs transition-all ${
              selected === opt.value
                ? "border-rose-500 bg-rose-900/30 text-rose-300 shadow shadow-rose-900/50"
                : "border-rose-900/50 bg-rose-950/30 text-rose-400/60 hover:border-rose-700 hover:-translate-y-0.5"
            }`}
          >
            <span className="text-2xl">{opt.emoji}</span>
            {opt.label}
          </button>
        ))}
      </div>

      <button
        disabled={!selected}
        onClick={() => onNext(selected)}
        className="w-full py-4 rounded-full bg-linear-to-br from-rose-500 to-rose-700 text-white shadow-lg shadow-rose-900/50 hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        Continuar →
      </button>
      <button
        onClick={onBack}
        className="w-full py-3 mt-2 rounded-full border border-rose-900/40 text-rose-400/50 text-sm hover:border-rose-700 hover:text-rose-300 transition"
      >
        ← Volver
      </button>
    </div>
  );
}
