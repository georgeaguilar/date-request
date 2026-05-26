import GifBanner from "@/app/components/GifBanner";

export default function Step6Success() {
  return (
    <div className="text-center">
      <GifBanner
        src="/gifs/celebrate.gif"
        alt="celebrate"
        fallbackEmoji="🎉"
      />
      <div className="text-5xl sm:text-6xl mb-3 animate-pop">🎉</div>
      <h1 className="font-serif text-2xl text-rose-50 mb-2">
        ¡Ya le avisamos a Jorge!
      </h1>
      <p className="text-rose-300/50 text-sm font-light">
        Tu cita está confirmada. Prepárate para algo especial 🌹
      </p>
    </div>
  );
}
