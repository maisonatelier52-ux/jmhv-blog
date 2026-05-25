"use client";

import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <footer className="bg-black text-white px-6 md:px-16 py-4">
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* ANIMATED LINE */}
        <div className="overflow-hidden">
          <div
            className={`
              h-[4px] bg-white
              origin-left
              transition-transform duration-3000 ease-out
              ${visible ? "scale-x-100" : "scale-x-0"}
            `}
          />
        </div>

        {/* COPYRIGHT */}
        <div className="mt-4 font-serif text-lg italic text-zinc-600 tracking-wide">
          © 2026 JMHV
        </div>

      </div>
    </footer>
  );
}