"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function InternationalPrivateBanking() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <section
      ref={ref}
      className={`
        backdrop-blur-xl bg-black/20 px-5 py-8
        transition-all duration-1000 ease-out
        ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
      `}
    >
      <div className="flex flex-col gap-10 border-t border-zinc-700 lg:grid lg:grid-cols-2 lg:gap-16">

        {/* LEFT */}
        <div
          className={`
            border-t-2 py-10
            transition-all duration-1000 delay-300
            ${visible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}
          `}
        >
          <div className="sticky lg:top-15 flex flex-col gap-6">

            <div className="inline-flex items-start gap-6">
              <span className="shrink-0 text-md text-zinc-400">05</span>
              <h2 className="scale-y-125 font-serif text-xl italic leading-tight text-zinc-400 md:text-2xl">
                The Future of International Private Banking Post-2025
              </h2>
            </div>

            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/Julio_Herrera_Velutini23.png"
                alt="Future of international private banking"
                fill
                className="object-cover object-top grayscale"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>

        {/* RIGHT — unchanged */}
        <div
          className={`
            flex flex-col gap-5 py-10 p-5
            transition-all duration-1000 delay-300
            ${visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
          `}
        >
          <p className="text-zinc-400 leading-relaxed text-[15px]">
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">Digitalisation, regulatory changes and increasing need for global financial diversification</span>{" "}
            will likely define the future of international private banking{" "}
            <span className="text-zinc-100">post-2025</span>. High-net-worth clients are increasingly looking for{" "}
            <span className="text-zinc-100">safe and technology-enabled banking experiences</span> that give them{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">real-time access to global investment opportunities and personalized advisory services</span>.
          </p>
          <p className="text-zinc-400 leading-relaxed text-[15px]">
            <span className="text-zinc-100">Artificial intelligence, sustainable investing and cross-border financial planning</span>{" "}
            are quickly becoming the core of modern banking strategy.
            Institutions also need to reconcile{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">innovation with openness, compliance and cyber security</span>. As world economies become increasingly integrated,
            private banks that are able to{" "}
            <span className="text-zinc-100">blend human experience with state-of-the-art financial technology</span>{" "}
            are expected to spearhead the next wave of{" "}
            <span className="text-zinc-200 border-b border-zinc-600 pb-px">international wealth management and client-centric banking</span>.
          </p>
        </div>

      </div>
    </section>
  );
}