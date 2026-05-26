"use client";

import { useState } from "react";
import GifBanner from "@/app/components/GifBanner";

interface Props {
  initialDate: string;
  initialTime: string;
  onNext: (date: string, time: string) => void;
  onBack: () => void;
}

export default function Step2DateTime({ initialDate, initialTime, onNext, onBack }: Props) {
  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(initialTime || "19:00");

  function handleNext() {
    if (!date) { alert("¡Escoge un día! 📅"); return; }
    if (!time) { alert("¡Escoge una hora! ⏰"); return; }
    onNext(date, time);
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-rose-100 bg-rose-50/50 text-stone-800 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition mb-4";

  return (
    <div>
      <GifBanner
        src="/gifs/excited.gif"
        alt="excited"
      />
      <h2 className="font-serif text-xl text-stone-800 mb-1">📅 ¿Cuándo?</h2>
      <p className="text-stone-400 text-xs font-light mb-5">
        Escoge el día y la hora perfectos
      </p>

      <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1.5">
        Día de la cita
      </label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={inputClass}
      />

      <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1.5">
        ¿A qué hora?
      </label>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className={inputClass}
      />

      <button
        onClick={handleNext}
        className="w-full py-4 rounded-full bg-linear-to-br from-rose-400 to-rose-600 text-white shadow-lg shadow-rose-200 hover:-translate-y-0.5 transition-all"
      >
        Continuar →
      </button>
      <button
        onClick={onBack}
        className="w-full py-3 mt-2 rounded-full border border-stone-200 text-stone-400 text-sm hover:border-rose-200 hover:text-rose-400 transition"
      >
        ← Volver
      </button>
    </div>
  );
}
