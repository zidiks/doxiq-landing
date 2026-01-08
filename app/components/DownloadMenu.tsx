"use client";

import { useEffect, useRef } from "react";

type DownloadMenuProps = {
  buttonClassName: string;
};

const DOWNLOAD_LINK =
  "https://github.com/zidiks/doxiq-releases/releases/download/v0.1.0/DoxiQ_0.1.0_x64-setup.exe";

export default function DownloadMenu({ buttonClassName }: DownloadMenuProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const details = detailsRef.current;
      if (!details || !details.open) {
        return;
      }
      if (event.target instanceof Node && details.contains(event.target)) {
        return;
      }
      details.removeAttribute("open");
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <details ref={detailsRef} className="relative">
      <summary
        className={`list-none cursor-pointer rounded-full ${buttonClassName}`}
      >
        Скачать
      </summary>
      <div className="absolute right-0 z-10 mt-3 w-52 rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-soft">
        <a
          className="block rounded-xl px-3 py-2 text-sm text-white transition hover:bg-white/10"
          href={DOWNLOAD_LINK}
        >
          Windows
        </a>
        <div className="rounded-xl px-3 py-2 text-sm text-slate-400">
          MacOS (скоро)
        </div>
      </div>
    </details>
  );
}
