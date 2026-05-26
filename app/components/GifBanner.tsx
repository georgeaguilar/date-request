"use client";

import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  fallbackEmoji?: string;
}

export default function GifBanner({ src, alt, fallbackEmoji = "💕" }: Props) {
  const [error, setError] = useState(false);

  return (
    <div className="w-full rounded-2xl overflow-hidden mb-5 border border-rose-900/40 bg-[#1e0d18] h-36 sm:h-44">
      {error ? (
        <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-rose-950/60 to-[#1e0d18]">
          <span className="text-5xl">{fallbackEmoji}</span>
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}
