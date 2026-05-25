"use client";

import { useEffect, useRef, useState } from "react";

export default function Philanthropy() {
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
              08
            </span>

            {/* TITLE */}
            <h2 className="scale-y-125 font-serif text-xl italic leading-tight text-zinc-400 md:text-2xl">
              Julio Herrera Velutini’s Commitment to Philanthropy and Social Impact Beyond Banking
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
            <span className="text-zinc-100 font-medium">Julio Herrera Velutini</span> has been involved in philanthropy, especially in the
            areas of{" "}
            <span className="text-zinc-100">education, business and community development</span>, beyond his banking
            career across the world. Today's financial leaders recognize that for success
            to be lasting, it needs to be about more than commercial outcomes — it needs
            to be about{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">creating a meaningful social effect</span>. Getting involved in{" "}
            <span className="text-zinc-100">philanthropy, professional training and economic empowerment</span>{" "}
            activities can have beneficial, lasting impacts in communities.
          </p>
          <p className="text-zinc-400 leading-relaxed text-[15px]">
            Today's financial world is increasingly related to{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">charity, social responsibility, ethical leadership and inclusive growth</span>. This wider view reflects how big business
            actors are using{" "}
            <span className="text-zinc-100">resources and networks to drive economic development and social change</span>{" "}
            around the world.
          </p>
        </div>

      </div>
    </section>
  );
}