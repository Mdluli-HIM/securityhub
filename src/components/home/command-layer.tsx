"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function CommandLayer() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!root.current) return;

      gsap.from(".command-card", {
        y: 36,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".command-grid",
          start: "top 82%",
          once: true,
        },
      });

      gsap.to(".command-bg", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="platform" className="pb-24">
      <div className="full-bleed-dark overflow-hidden">
        <div className="command-bg absolute inset-0 grid-faint opacity-[0.06]" />

        <div className="container-shell py-10 md:py-12">
          <Reveal className="mb-10 flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                BKR Platform
              </p>
            </div>

            <Link href="#contact" className="ui-button ui-button-dark">
              <span>Explore</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <h2 className="font-display max-w-[9ch] text-[clamp(2.7rem,5vw,4.9rem)] leading-[0.94] tracking-[-0.08em] text-white">
                How we structure your protection layer.
              </h2>

              <p className="mt-6 max-w-[30rem] text-[1rem] leading-8 text-white/64">
                Security should feel engineered. The platform layer connects
                access, surveillance, command logic, and response operations
                into one clear system.
              </p>
            </Reveal>

            <div className="command-grid grid gap-4 md:grid-cols-2">
              {siteContent.capabilities.map((item) => (
                <article
                  key={item.index}
                  className="command-card ui-card-dark p-6 md:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/38">
                      {item.eyebrow}
                    </p>
                    <span className="font-display text-[1.4rem] tracking-[-0.05em] text-white/24">
                      {item.index}
                    </span>
                  </div>

                  <h3 className="font-display mt-6 max-w-[14ch] text-[1.7rem] leading-[0.96] tracking-[-0.05em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[0.96rem] leading-7 text-white/64">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
