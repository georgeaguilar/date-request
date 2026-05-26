"use client";

import { useState } from "react";
import GifBanner from "@/app/components/GifBanner";

interface Props {
  initialDate: string;
  initialTime: string;
  onNext: (date: string, time: string) => void;
  onBack: () => void;
}

const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const HOURS = Array.from({ length: 17 }, (_, i) => {
  const h = i + 7; // 7am – 11pm
  return h.toString().padStart(2, "0");
});

const MINUTES = ["00", "15", "30", "45"];

const YEARS = [2025, 2026, 2027, 2028];

function parseDate(d: string) {
  if (!d) return { y: "", m: "", day: "" };
  const [y, m, day] = d.split("-");
  return { y, m: String(parseInt(m)), day: String(parseInt(day)) };
}

function buildDate(y: string, m: string, d: string) {
  if (!y || !m || !d) return "";
  return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
}

function daysInMonth(year: string, month: string) {
  const y = parseInt(year) || 2025;
  const m = parseInt(month) || 1;
  return new Date(y, m, 0).getDate();
}

const selectClass =
  "w-full px-3 py-3 rounded-xl border border-rose-900/50 bg-rose-950/30 text-rose-100 text-sm outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-900/50 transition appearance-none cursor-pointer";

export default function Step2DateTime({ initialDate, initialTime, onNext, onBack }: Props) {
  const parsed = parseDate(initialDate);
  const initTime = initialTime || "19:00";

  const [day, setDay]   = useState(parsed.day);
  const [month, setMonth] = useState(parsed.m);
  const [year, setYear]  = useState(parsed.y || String(YEARS[0]));
  const [hour, setHour]  = useState(initTime.split(":")[0]);
  const [min, setMin]    = useState(initTime.split(":")[1] || "00");

  function handleNext() {
    const dateStr = buildDate(year, month, day);
    if (!dateStr) { alert("¡Escoge un día completo! 📅"); return; }
    onNext(dateStr, `${hour}:${min}`);
  }

  const totalDays = daysInMonth(year, month);

  return (
    <div>
      <GifBanner src="/gifs/excited.gif" alt="excited" fallbackEmoji="📅" />

      <h2 className="font-serif text-xl text-rose-50 mb-1">📅 ¿Cuándo?</h2>
      <p className="text-rose-300/50 text-xs font-light mb-5">
        Escoge el día y la hora perfectos
      </p>

      {/* ── Fecha ── */}
      <label className="block text-[10px] uppercase tracking-widest text-rose-400/60 mb-2">
        Día de la cita
      </label>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {/* Día */}
        <div className="relative">
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className={selectClass}
          >
            <option value="" disabled>Día</option>
            {Array.from({ length: totalDays }, (_, i) => i + 1).map((d) => (
              <option key={d} value={String(d)}>{d}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-rose-400/50 text-xs">▾</span>
        </div>

        {/* Mes */}
        <div className="relative">
          <select
            value={month}
            onChange={(e) => { setMonth(e.target.value); setDay(""); }}
            className={selectClass}
          >
            <option value="" disabled>Mes</option>
            {MONTHS.map((name, i) => (
              <option key={i} value={String(i + 1)}>{name}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-rose-400/50 text-xs">▾</span>
        </div>

        {/* Año */}
        <div className="relative">
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className={selectClass}
          >
            {YEARS.map((y) => (
              <option key={y} value={String(y)}>{y}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-rose-400/50 text-xs">▾</span>
        </div>
      </div>

      {/* ── Hora ── */}
      <label className="block text-[10px] uppercase tracking-widest text-rose-400/60 mb-2">
        ¿A qué hora?
      </label>

      <div className="grid grid-cols-2 gap-2 mb-5">
        {/* Hora */}
        <div className="relative">
          <select
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            className={selectClass}
          >
            {HOURS.map((h) => (
              <option key={h} value={h}>{h}:00 hrs</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-rose-400/50 text-xs">▾</span>
        </div>

        {/* Minutos */}
        <div className="relative">
          <select
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className={selectClass}
          >
            {MINUTES.map((m) => (
              <option key={m} value={m}>:{m} min</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-rose-400/50 text-xs">▾</span>
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
