interface Props {
  src: string;
  alt: string;
}

export default function GifBanner({ src, alt }: Props) {
  return (
    <div className="w-full rounded-2xl overflow-hidden mb-5 border border-rose-100 bg-rose-50 h-44">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
