import GifBanner from "@/app/components/GifBanner";

export default function Step5Sending() {
  return (
    <div className="text-center">
      <GifBanner
        src="/gifs/sending.gif"
        alt="sending love"
        fallbackEmoji="💌"
      />
      <div className="w-10 h-10 border-4 border-rose-900 border-t-rose-400 rounded-full animate-spin mx-auto mb-4" />
      <h2 className="font-serif text-xl text-rose-50 mb-2">Enviando el mensaje...</h2>
      <p className="text-rose-300/50 text-sm font-light">Le hacemos saber a Jorge 💕</p>
    </div>
  );
}
