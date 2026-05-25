"use client";

import { useEffect, useRef, useState } from "react";

export default function BritanniaFinancialGroup() {
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
              04
            </span>

            {/* TITLE */}
            <h2 className="scale-y-125 font-serif text-xl italic leading-tight text-zinc-400 md:text-2xl">
              How Britannia Financial Group Is Redefining International Private Banking
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
            <span className="text-zinc-100 font-medium">Britannia Financial Group</span> is a financial services company that offers{" "}
            <span className="text-zinc-100">global banking and wealth management services</span> to its clients. The firm offers the
            personal service of a traditional bank, with the latest in{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">financial technology and access to global markets</span>.
          </p>
          <p className="text-zinc-400 leading-relaxed text-[15px]">
            As investors are increasingly crossing boundaries, the demand for{" "}
            <span className="text-zinc-100">adaptable financial solutions</span> has been tremendous. This change is reflected in Britannia's
            focus on{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">innovation, global connectivity and personal service</span>. The organization
            delivers ideas customized to the{" "}
            <span className="text-zinc-100">financial goals of each client</span>, not a one size
            fits all answer. Today's fast-paced financial environment requires{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">sophisticated banking technologies and the trusted relationships of good human beings</span>.
          </p>
        </div>

      </div>
    </section>
  );
}