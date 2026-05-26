import GifBanner from "@/app/components/GifBanner";

export default function Step5Sending() {
  return (
    <div className="text-center">
      <GifBanner
        src="/gifs/sending.gif"
        alt="sending"
      />
      <div className="w-10 h-10 border-4 border-rose-100 border-t-rose-500 rounded-full animate-spin mx-auto mb-4" />
      <h2 className="font-serif text-xl text-stone-800 mb-2">Enviando el mensaje...</h2>
      <p className="text-stone-400 text-sm font-light">Le hacemos saber a Jorge 💕</p>
    </div>
  );
}
