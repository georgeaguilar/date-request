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
    "w-full min-w-0 px-3 py-2 rounded-xl border border-rose-900/50 bg-rose-950/30 text-rose-100 text-sm outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-900/50 transition [color-scheme:dark]";

  return (
    <div>
      <GifBanner src="/gifs/excited.gif" alt="excited" fallbackEmoji="📅" />

      <h2 className="font-serif text-xl text-rose-50 mb-1">📅 ¿Cuándo?</h2>
      <p className="text-rose-300/50 text-xs font-light mb-5">
        Escoge el día y la hora perfectos
      </p>

      <div className="flex gap-3 items-end mb-5">
        <div className="flex-1 min-w-0">
          <label className="block text-[10px] uppercase tracking-widest text-rose-400/60 mb-1.5">
            Día de la cita
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="shrink-0">
          <label className="block text-[10px] uppercase tracking-widest text-rose-400/60 mb-1.5">
            Hora
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <button
        onClick={handleNext}
        className="w-full py-4 rounded-full bg-linear-to-br from-rose-500 to-rose-700 text-white shadow-lg shadow-rose-900/50 hover:-translate-y-0.5 transition-all"
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
