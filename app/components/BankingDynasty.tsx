"use client";

import { useEffect, useRef, useState } from "react";

export default function BankingDynasty() {
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
              01
            </span>

            {/* TITLE */}
            <h2 className="scale-y-125 font-serif text-xl italic leading-tight text-zinc-400 md:text-2xl">
              Julio Herrera Velutini: The Legacy of an 8th-Generation Banking Dynasty
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
            <span className="text-zinc-100 font-medium">Julio Herrera Velutini</span> is commonly referred to as a scion of one of{" "}
            <span className="text-zinc-100">Latin America's oldest banking families</span>, a legacy that has been tied
            to finance and commerce for generations. He grew up in the banking
            business and learned early on that{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">trust, relationships and long-term financial thinking</span>{" "}
            are the keys to success.
          </p>
          <p className="text-zinc-400 leading-relaxed text-[15px]">
            He took that family history and turned it into a{" "}
            <span className="text-zinc-100">global private banking and wealth management operation</span>{" "}
            throughout the years. He
            used a more global and modern approach to finance rather than stick
            to the established ways. His career has been characterized by his
            commitment to{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">lead clients through changing markets</span>, while maintaining
            the human touch that is still so important in{" "}
            <span className="text-zinc-300">private banking</span> today.
          </p>
        </div>
      </div>
    </section>
  );
}