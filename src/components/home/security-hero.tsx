"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/content/site";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function SecurityHero() {
  const root = useRef<HTMLElement | null>(null);
  const { hero } = siteContent;

  useGSAP(
    () => {
      if (!root.current) return;

      const title = root.current.querySelectorAll(".hero-reveal");
      const stats = root.current.querySelectorAll(".hero-stat");
      const panel = root.current.querySelector(".hero-panel");
      const bg = root.current.querySelector(".hero-bg-shift");

      gsap.from(title, {
        y: 42,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      if (panel) {
        gsap.from(panel, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          delay: 0.1,
        });
      }

      gsap.from(stats, {
        y: 20,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.3,
      });

      if (panel && bg) {
        gsap.to(bg, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: root },
  );

  return (
    <section ref={root} className="overflow-clip pb-20 pt-10 sm:pb-24 sm:pt-14">
      <div className="container-shell">
        <div className="mb-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <h1 className="hero-reveal font-display max-w-[7ch] text-[clamp(4.8rem,12vw,8.8rem)] leading-[0.88] tracking-[-0.1em] text-black">
              {hero.title}
            </h1>
          </div>

          <div className="hero-reveal max-w-[42rem] pb-2 text-[1.12rem] leading-8 text-black/66 md:text-[1.26rem]">
            {hero.subtitle}
          </div>
        </div>

        <div className="hero-panel relative overflow-hidden border border-black/12 bg-black text-white">
          <div className="hero-bg-shift absolute inset-0 opacity-90">
            <div className="grid-faint absolute inset-0" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(0,0,0,0.05)_22%,rgba(0,0,0,0.72)_70%,#000_100%)]" />
          </div>

          <div className="relative grid gap-10 px-7 py-8 md:px-10 md:py-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-14 lg:py-14">
            <div>
              <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-white/48">
                Enterprise protection
              </p>

              <h2 className="font-display max-w-[8ch] whitespace-pre-line text-[clamp(2.9rem,6vw,5.2rem)] leading-[0.94] tracking-[-0.08em]">
                {hero.panelTitle}
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#contact" className="ui-button ui-button-dark">
                  <span>{hero.primaryCta}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link href="#solutions" className="ui-button ui-button-dark">
                  <span>{hero.secondaryCta}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="max-w-[46rem] text-[1rem] leading-8 text-white/78 md:text-[1.12rem]">
              {hero.panelCopy}
            </div>
          </div>
        </div>

        <div className="mt-8 border border-black/10">
          <div className="grid gap-0 md:grid-cols-3">
            {hero.stats.map((item, index) => (
              <div
                key={item.label}
                className={`hero-stat px-6 py-6 ${
                  index !== 0
                    ? "border-t border-black/10 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <div className="font-display text-[2.05rem] leading-none tracking-[-0.06em] text-black">
                  {item.value}
                </div>
                <div className="mt-3 text-[0.86rem] uppercase tracking-[0.14em] text-black/48">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
