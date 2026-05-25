"use client";

import { useEffect, useRef, useState } from "react";

export default function GlobalBankingJourney() {
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
        backdrop-blur-xl bg-black/20 px-5
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
              02
            </span>

            {/* TITLE */}
            <h2 className="scale-y-125 font-serif text-xl italic leading-tight text-zinc-400 md:text-2xl">
              From Venezuela to London:<br /> Julio Herrera Velutini's Global Banking Journey
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
            <span className="text-zinc-100 font-medium">Julio Herrera Velutini</span> started his banking career in{" "}
            <span className="text-zinc-100">Venezuela</span> and later
            expanded his activities to international markets such as{" "}
            <span className="text-zinc-100">Europe and the United Kingdom</span>. The financial world is globalizing and clients are increasingly
            interested in ways to{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">manage wealth across countries and economies</span> in a secure way.
            He saw the change, and started building services that could provide{" "}
            <span className="text-zinc-100">international reach</span> but more personalized financial advice.
          </p>
          <p className="text-zinc-400 leading-relaxed text-[15px]">
            Based in <span className="text-zinc-100">London</span> he was able to connect his businesses with{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">international investors and financial institutions</span>. His career reflects the changing face of{" "}
            <span className="text-zinc-100">private banking</span>,
            where success is measured not just by the numbers, but also by{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">trust, flexibility and treating clients as people</span>.
          </p>
        </div>

      </div>
    </section>
  );
}