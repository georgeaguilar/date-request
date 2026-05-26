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

function daysInMonth(m: number, y: number) {
  return new Date(y, m, 0).getDate();
}

function parseDate(iso: string) {
  if (!iso) return { y: 0, m: 0, d: 0 };
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m, d };
}

function parseTime(t: string): { hour12: number; min: number; period: "AM" | "PM" } {
  const [h, min] = (t || "19:00").split(":").map(Number);
  const period: "AM" | "PM" = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 || 12;
  return { hour12, min: min || 0, period };
}

export default function Step2DateTime({ initialDate, initialTime, onNext, onBack }: Props) {
  const now = new Date();
  const init = parseDate(initialDate);
  const initT = parseTime(initialTime);

  const [day, setDay] = useState(init.d || 0);
  const [month, setMonth] = useState(init.m || 0);
  const [year, setYear] = useState(init.y || now.getFullYear());
  const [hour, setHour] = useState(initT.hour12);
  const [minute, setMinute] = useState(initT.min);
  const [period, setPeriod] = useState<"AM" | "PM">(initT.period);

  const currentYear = now.getFullYear();
  const years = [currentYear, currentYear + 1];
  const maxDay = month ? daysInMonth(month, year) : 31;
  const safeDay = day > maxDay ? maxDay : day;

  function handleNext() {
    if (!month || !day) {
      alert("¡Escoge un día! 📅");
      return;
    }
    const h24 = period === "AM" ? hour % 12 : (hour % 12) + 12;
    const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(safeDay).padStart(2, "0")}`;
    const timeStr = `${String(h24).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
    onNext(dateStr, timeStr);
  }

  const sel =
    "w-full px-2 py-2.5 rounded-xl border border-rose-900/50 bg-rose-950/30 text-rose-100 text-sm outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-900/50 transition appearance-none text-center";

  const placeholder = "text-rose-400/40";

  return (
    <div>
      <GifBanner src="/gifs/excited.gif" alt="excited" fallbackEmoji="📅" />

      <h2 className="font-serif text-xl text-rose-50 mb-1">📅 ¿Cuándo?</h2>
      <p className="text-rose-300/50 text-xs font-light mb-5">
        Escoge el día y la hora perfectos
      </p>

      {/* ── DATE ── */}
      <label className="block text-[10px] uppercase tracking-widest text-rose-400/60 mb-2">
        Día de la cita
      </label>
      <div className="grid grid-cols-3 gap-2 mb-5">
        {/* Day */}
        <select
          value={safeDay || ""}
          onChange={(e) => setDay(Number(e.target.value))}
          className={`${sel} ${!day ? placeholder : ""}`}
        >
          <option value="" disabled>Día</option>
          {Array.from({ length: maxDay }, (_, i) => i + 1).map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        {/* Month */}
        <select
          value={month || ""}
          onChange={(e) => {
            const m = Number(e.target.value);
            setMonth(m);
            const max = daysInMonth(m, year);
            if (day > max) setDay(max);
          }}
          className={`${sel} ${!month ? placeholder : ""}`}
        >
          <option value="" disabled>Mes</option>
          {MONTHS.map((name, i) => (
            <option key={i} value={i + 1}>{name}</option>
          ))}
        </select>

        {/* Year */}
        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className={sel}
        >
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      {/* ── TIME ── */}
      <label className="block text-[10px] uppercase tracking-widest text-rose-400/60 mb-2">
        ¿A qué hora?
      </label>
      <div className="grid grid-cols-3 gap-2">
        {/* Hour */}
        <select
          value={hour}
          onChange={(e) => setHour(Number(e.target.value))}
          className={sel}
        >
          {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>

        {/* Minute */}
        <select
          value={minute}
          onChange={(e) => setMinute(Number(e.target.value))}
          className={sel}
        >
          {[0, 15, 30, 45].map((m) => (
            <option key={m} value={m}>:{String(m).padStart(2, "0")}</option>
          ))}
        </select>

        {/* AM / PM */}
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value as "AM" | "PM")}
          className={sel}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>

      <button
        onClick={handleNext}
        className="w-full py-4 rounded-full bg-linear-to-br from-rose-500 to-rose-700 text-white shadow-lg shadow-rose-900/50 hover:-translate-y-0.5 transition-all mt-5"
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
