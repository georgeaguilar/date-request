import { Step } from "@/app/types";

interface Props {
  current: Step;
}

export default function ProgressDots({ current }: Props) {
  if (current >= 5) return null;

  return (
    <div className="flex justify-center gap-2 mt-7">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            i < current
              ? "bg-rose-200"
              : i === current
              ? "bg-rose-500 scale-125"
              : "bg-rose-100"
          }`}
        />
      ))}
    </div>
  );
}
