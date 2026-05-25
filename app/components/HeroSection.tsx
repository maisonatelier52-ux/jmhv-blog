"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isPinned, setIsPinned] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleScroll = () => {
      setIsPinned(window.scrollY > 120);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">

      {/* IMAGE */}
      <div
        className={`
          fixed top-0 z-0 h-screen overflow-hidden
          transition-all duration-2000 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            isPinned
              ? "right-0 w-full md:w-1/3"
              : "right-0 w-full"
          }
        `}
      >
        <Image
          src="/Julio_Herrera_Velutini.jpg"
          alt="Hero"
          fill
          priority
          className={`
            transition-all duration-[2000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isPinned
                ? "scale-100 object-top"
                : "scale-125 object-top"
            }

            object-cover
          `}
        />      
      </div>

      {/* CONTENT */}
      <div
        className={`
          relative z-20 flex h-screen items-center px-6 md:px-16
          transition-all duration-700
          ${isPinned ? "lg:w-2/3" : "w-full"}
        `}
      >
        {/* TEXT ANIMATION WRAPPER */}
        <div
          className={`
            max-w-2xl
            transition-all duration-[1400ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }
          `}
        >
          <div
            className="text-5xl md:text-7xl lg:text-8xl"
            style={{
              backgroundImage:
                "linear-gradient(54deg, rgb(255,255,255) -22%, rgba(0,0,0,0) 134%)",
              WebkitBackgroundClip: "text",
              WebkitTextStroke: "1px transparent",
              willChange: "transform",
              backgroundClip: "text",
            }}
          >
            {/* TOP TEXT */}
            <span
              className={`
                block font-serif italic scale-y-125 text-white/90
                transition-all duration-[1600ms] delay-100
                ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }
              `}
            >
              Let&apos;s build
            </span>

            {/* MAIN TEXT */}
            <div className="lg:text-[120px] font-bold leading-[0.85] overflow-hidden">
              <h1 className="font-sans font-extrabold tracking-tight">
                
                <span
                  className={`
                    block transition-all duration-[1400ms] delay-200
                    ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-24 opacity-0"
                    }
                  `}
                >
                  what
                </span>

                <span
                  className={`
                    block transition-all duration-[1400ms] delay-300
                    ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-24 opacity-0"
                    }
                  `}
                >
                  doesn&apos;t
                </span>

                <span
                  className={`
                    block transition-all duration-[1400ms] delay-500
                    ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-24 opacity-0"
                    }
                  `}
                >
                  exist.
                </span>

              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}