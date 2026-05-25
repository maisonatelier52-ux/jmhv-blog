"use client";

import { useEffect, useRef, useState } from "react";

export default function CrossBorderBanking() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`
        backdrop-blur-xl bg-black/20 px-5 py-8
        transition-all duration-1000 ease-out
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0"
        }
      `}
    >
      <div
        className="
          flex flex-col gap-10 border-t border-zinc-700
          lg:grid lg:grid-cols-2 lg:gap-16
        "
      >

        {/* LEFT */}
        <div
          className={`
            border-t-2 py-10
            transition-all duration-1000 delay-300
            ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }
          `}
        >
          <div
            className="
              sticky lg:top-15
              inline-flex items-start gap-6
            "
          >
            {/* NUMBER */}
            <span className="shrink-0 text-md text-zinc-400">
              07
            </span>

            {/* TITLE */}
            <h2 className="scale-y-125 font-serif text-xl italic leading-tight text-zinc-400 md:text-2xl">
              Cross-Border Banking: How Global Investors Protect and Grow Their Wealth
            </h2>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className={`
            flex flex-col gap-5 py-10 p-5
            transition-all duration-1000 delay-300
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }
          `}
        >
          <p className="text-zinc-400 leading-relaxed text-[15px]">
            <span className="text-zinc-100 font-medium">Cross-border banking</span> has become a vital instrument for global investors wanting
            to safeguard and increase their capital in a more linked world. By distributing
            your assets internationally you can{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">lower risk, get better access to investment possibilities and gain currency flexibility</span>.
          </p>
          <p className="text-zinc-400 leading-relaxed text-[15px]">
            International banking can also promote{" "}
            <span className="text-zinc-100">long-term financial planning, estate administration and wealth preservation</span>,
            when managed professionally and within legal regulations. Today's investors want financial institutions that offer{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">seamless worldwide services and individualized coaching</span>. In the dynamic world
            economy of today, cross-border banking offers{" "}
            <span className="text-zinc-100">stability and the flexibility to respond to changing market conditions</span>.
          </p>
        </div>

      </div>
    </section>
  );
}