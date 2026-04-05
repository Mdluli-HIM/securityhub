"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/content/site";
import { BrandWatermark } from "@/components/site/brand-watermark";
import { BrandLogo } from "@/components/site/brand-logo";

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

      gsap.set(title, { y: 46, opacity: 0 });
      gsap.set(stats, { y: 18, opacity: 0 });

      if (panel) {
        gsap.set(panel, { y: 52, opacity: 0 });
      }

      const intro = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
      });

      intro
        .to(title, {
          y: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.12,
        })
        .to(
          panel,
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power4.out",
          },
          "-=0.55",
        )
        .to(
          stats,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.5",
        );

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

      const loaderActive =
        typeof document !== "undefined" &&
        document.documentElement.dataset.loaderState === "active";

      const playIntro = () => {
        if (!intro.isActive()) {
          intro.play(0);
        }
      };

      if (loaderActive) {
        const onLoaderFinished = () => playIntro();
        window.addEventListener(
          "blackridge:loader-finished",
          onLoaderFinished,
          { once: true },
        );

        return () => {
          window.removeEventListener(
            "blackridge:loader-finished",
            onLoaderFinished,
          );
        };
      } else {
        playIntro();
      }
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="overflow-clip pb-14 pt-6 sm:pb-18 sm:pt-8 lg:pb-24 lg:pt-14"
    >
      <div className="container-shell">
        <div className="mb-8 grid gap-6 sm:mb-10 sm:gap-8 lg:mb-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <h1 className="hero-reveal font-display max-w-[7ch] text-[clamp(3.9rem,19vw,8.8rem)] leading-[0.88] tracking-[-0.1em] text-black">
              {hero.title}
            </h1>
          </div>

          <div className="hero-reveal max-w-[40rem] text-[0.98rem] leading-7 text-black/66 sm:text-[1.06rem] sm:leading-8 md:text-[1.18rem]">
            {hero.subtitle}
          </div>
        </div>

        <div className="hero-panel relative overflow-hidden border border-white/10 bg-[#2a1115] text-[#f3efe7]">
          <BrandLogo
            variant="watermark"
            className="right-[-6%] top-[-8%] h-[130%] w-[55%]"
          />

          <BrandWatermark tone="light" className="inset-0 opacity-60" />

          <div className="hero-bg-shift absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#311318_0%,#260e12_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.035),transparent_0,transparent_26%),radial-gradient(circle_at_82%_12%,rgba(255,255,255,0.02),transparent_0,transparent_20%)]" />
          </div>

          <div className="relative grid gap-8 px-4 py-5 sm:px-6 sm:py-7 md:px-8 md:py-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-14 lg:py-14">
            <div>
              <p className="mb-4 text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-white/48 sm:text-[0.7rem]">
                Enterprise protection
              </p>

              <h2 className="font-display max-w-[8ch] whitespace-pre-line text-[clamp(2.2rem,12vw,5.2rem)] leading-[0.92] tracking-[-0.08em]">
                {hero.panelTitle}
              </h2>

              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
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

            <div className="max-w-[44rem] text-[0.96rem] leading-7 text-white/76 sm:text-[1rem] sm:leading-8 md:text-[1.08rem]">
              {hero.panelCopy}
            </div>
          </div>
        </div>

        <div className="mt-4 border border-black/10 sm:mt-5">
          <div className="grid gap-0 md:grid-cols-3">
            {hero.stats.map((item, index) => (
              <div
                key={item.label}
                className={`hero-stat px-4 py-4 sm:px-5 sm:py-5 ${
                  index !== 0
                    ? "border-t border-black/10 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <div className="font-display text-[1.7rem] leading-none tracking-[-0.06em] text-black sm:text-[1.9rem] md:text-[2.05rem]">
                  {item.value}
                </div>
                <div className="mt-2 text-[0.72rem] uppercase tracking-[0.14em] text-black/48 sm:mt-3 sm:text-[0.8rem] md:text-[0.86rem]">
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
