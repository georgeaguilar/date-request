import GifBanner from "@/app/components/GifBanner";

export default function Step6Success() {
  return (
    <div className="text-center">
      <GifBanner
        src="https://media.tenor.com/ZebSB0DDTbsAAAAC/happy-celebrate.gif"
        alt="celebrate"
      />
      <div className="text-6xl mb-3 animate-pop">🎉</div>
      <h1 className="font-serif text-2xl text-stone-800 mb-2">
        ¡Ya le avisamos a Jorge!
      </h1>
      <p className="text-stone-400 text-sm font-light">
        Tu cita está confirmada. Prepárate para algo especial 🌹
      </p>
    </div>
  );
}
