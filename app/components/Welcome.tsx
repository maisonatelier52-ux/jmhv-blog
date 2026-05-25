"use client";

import { useEffect, useRef, useState } from "react";

export default function Welcome() {
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
            border-t-2 py-5
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
              Welcome to
              <br />
              my domain
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
          <p>
            As a Creative Director with over two decades of experience across
            cultures, categories, and platforms, I captain teams in creating
            what doesn&apos;t exist. My design-led work comes to life at the
            intersection of science and art, and I don&apos;t play safe.
          </p>

          <p>
            From global agencies in India to entrepreneurial stints in New York
            and Vancouver, my journey spans sales, advertising, design &
            innovation. This breadth enables me to create transmedia stories,
            versatile brand systems, and immersive platforms. I&apos;m also
            quite skilled on the dance floor, in the ring, and with a football.
          </p>

          <p>
            I lead a bold, authentic life. And it&apos;s downright exciting.
          </p>
        </div>

      </div>
    </section>
  );
}