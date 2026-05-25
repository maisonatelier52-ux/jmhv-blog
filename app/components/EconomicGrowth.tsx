"use client";

import { useEffect, useRef, useState } from "react";

export default function EconomicGrowth() {
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
              06
            </span>

            {/* TITLE */}
            <h2 className="scale-y-125 font-serif text-xl italic leading-tight text-zinc-400 md:text-2xl">
              Supporting SMEs Is the Key To Economic Growth in Latin America
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
            <span className="text-zinc-100 font-medium">Small and medium-sized firms (SMEs)</span> are vital sources of{" "}
            <span className="text-zinc-100">employment, innovation and economic resilience</span> in Latin America. Often, these enterprises constitute the{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">backbone of local economies</span>, and provide chances for entrepreneurship and
            community development. Still, many SMEs face difficulties in accessing{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">finance, international banking support and long-term investment resources</span>.
          </p>
          <p className="text-zinc-400 leading-relaxed text-[15px]">
            By pushing for{" "}
            <span className="text-zinc-100">financial inclusion and responsible lending solutions</span>, we can help to unlock{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">sustainable growth across the region</span>. Active support of
            SMEs by financial institutions not only serves to contribute to{" "}
            <span className="text-zinc-100">economic expansion</span>{" "}
            but also to{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">social mobility, market competitiveness and improved regional stability</span>{" "}
            in an increasingly globalised business environment.
          </p>
        </div>

      </div>
    </section>
  );
}