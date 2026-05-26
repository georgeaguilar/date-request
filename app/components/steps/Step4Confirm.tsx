"use client";

import GifBanner from "@/app/components/GifBanner";
import { formatDate, formatTime } from "@/app/lib/emailjs";

interface Props {
  date: string;
  time: string;
  food: string;
  onSend: () => void;
  onBack: () => void;
}

export default function Step4Confirm({ date, time, food, onSend, onBack }: Props) {
  const rows = [
    { icon: "📅", label: "Día",           value: formatDate(date) },
    { icon: "⏰", label: "Hora",          value: formatTime(time) },
    { icon: "🍽️", label: "Quiero comer",  value: food },
  ];

  return (
    <div>
      <GifBanner
        src="/gifs/hearts.gif"
        alt="romantic dinner"
        fallbackEmoji="💫"
      />
      <h2 className="font-serif text-xl text-rose-50 mb-1">💫 ¡Todo listo!</h2>
      <p className="text-rose-300/50 text-xs font-light mb-4">
        Confirma los detalles de tu cita
      </p>

      <div className="bg-linear-to-br from-rose-950/50 to-[#1e0d18] border border-rose-900/40 rounded-2xl p-4 mb-5 space-y-3">
        {rows.map((row, i) => (
          <div key={i}>
            {i > 0 && <div className="h-px bg-linear-to-r from-transparent via-rose-800/50 to-transparent mb-3" />}
            <div className="flex items-start gap-3">
              <span className="text-base">{row.icon}</span>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-rose-400/50 mb-0.5">
                  {row.label}
                </p>
                <p className="text-sm text-rose-100">{row.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onSend}
        className="w-full py-4 rounded-full bg-linear-to-br from-rose-500 to-rose-700 text-white shadow-lg shadow-rose-900/50 hover:-translate-y-0.5 transition-all"
      >
        Enviar a Jorge 💌
      </button>
      <button
        onClick={onBack}
        className="w-full py-3 mt-2 rounded-full border border-rose-900/40 text-rose-400/50 text-sm hover:border-rose-700 hover:text-rose-300 transition"
      >
        ← Cambiar algo
      </button>
    </div>
  );
}
