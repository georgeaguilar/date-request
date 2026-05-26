"use client";

import { useState } from "react";
import { Step, DateSelection } from "@/app/types";
import { sendDateEmail, formatDate, formatTime } from "@/app/lib/emailjs";
import Petals from "./Petals";
import ProgressDots from "./ProgressDots";
import Step1Question from "./steps/Step1Question";
import Step2DateTime from "./steps/Step2DateTime";
import Step3Food from "./steps/Step3Food";
import Step4Confirm from "./steps/Step4Confirm";
import Step5Sending from "./steps/Step5Sending";
import Step6Success from "./steps/Step6Success";

export default function DateRequest() {
  const [step, setStep] = useState<Step>(1);
  const [selection, setSelection] = useState<DateSelection>({
    date: "",
    time: "19:00",
    food: "",
  });

  async function handleSend() {
    setStep(5);
    try {
      await sendDateEmail({
        date: formatDate(selection.date),
        time: formatTime(selection.time),
        food: selection.food,
      });
      setStep(6);
    } catch (err) {
      console.error("EmailJS error:", err);
      // Fallback: mailto
      const subject = encodeURIComponent("💌 Dayana confirmó su cita contigo");
      const body = encodeURIComponent(
        `Hola Jorge 💕\n\n¡Dayana confirmó la cita!\n\n📅 Día: ${formatDate(selection.date)}\n⏰ Hora: ${formatTime(selection.time)}\n🍽️ Quiere comer: ${selection.food}\n\n¡Prepárate! 🌹`
      );
      window.location.href = `mailto:georgeaguilar11@hotmail.com?subject=${subject}&body=${body}`;
      setStep(6);
    }
  }

  return (
    <div className="min-h-screen bg-[#0e0814] flex items-center justify-center px-4 py-8 relative">
      <Petals />

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-[#170d1a] rounded-3xl p-5 sm:p-10 shadow-[0_8px_60px_rgba(180,30,80,0.18)] border border-rose-900/40 relative overflow-hidden">
          {/* Top gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-rose-200 via-rose-500 to-amber-400 rounded-t-3xl" />

          {/* Step transitions */}
          <div key={step} className="animate-stepIn">
            {step === 1 && (
              <Step1Question onYes={() => setStep(2)} />
            )}
            {step === 2 && (
              <Step2DateTime
                initialDate={selection.date}
                initialTime={selection.time}
                onNext={(date, time) => {
                  setSelection((s) => ({ ...s, date, time }));
                  setStep(3);
                }}
                onBack={() => setStep(1)}
              />
            )}
            {step === 3 && (
              <Step3Food
                initialFood={selection.food}
                onNext={(food) => {
                  setSelection((s) => ({ ...s, food }));
                  setStep(4);
                }}
                onBack={() => setStep(2)}
              />
            )}
            {step === 4 && (
              <Step4Confirm
                date={selection.date}
                time={selection.time}
                food={selection.food}
                onSend={handleSend}
                onBack={() => setStep(3)}
              />
            )}
            {step === 5 && <Step5Sending />}
            {step === 6 && <Step6Success />}
          </div>

          <ProgressDots current={step} />
        </div>
      </div>
    </div>
  );
}
