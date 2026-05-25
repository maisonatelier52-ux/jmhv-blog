"use client";

import { useEffect, useRef, useState } from "react";

export default function PrivateBanking() {
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
              03
            </span>

            {/* TITLE */}
            <h2 className="scale-y-125 font-serif text-xl italic leading-tight text-zinc-400 md:text-2xl">
              What Is Private Banking<br /> and Who Is It For?
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
            <span className="text-zinc-100 font-medium">Private banking</span> is for people who want to handle their money in a more personal way.
            It's not traditional banking services, but rather is focused on the construction of{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">tailored financial plans</span> based on a client's{" "}
            <span className="text-zinc-100">lifestyle, desires and life goals</span>. The
            clientele are mainly{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">entrepreneurs, professionals, investors or families</span> that want
            to build up and protect their money in the long run.
          </p>
          <p className="text-zinc-400 leading-relaxed text-[15px]">
            Services can encompass{" "}
            <span className="text-zinc-100">investment management, estate planning, overseas banking and guidance</span>{" "}
            in a range of fields. But it's the{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">relationship between the client and the advisor</span>{" "}
            that makes private banking special. In a more complex financial
            environment, many people seek the comfort of{" "}
            <span className="text-zinc-100">trustworthy help that is personal, reliable and suited to their specific situation</span>.
          </p>
        </div>

      </div>
    </section>
  );
}