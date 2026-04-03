"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const modules = [
  {
    eyebrow: "Monitoring",
    title: "Visibility across the building.",
    description:
      "Use this section for a control-room image, building surveillance view, or monitoring environment that reinforces live visibility across entrances, common areas, and vulnerable points.",
    src: "/images/security-ops.jpg",
    caption: "Building monitoring / CCTV / operational visibility",
  },
  {
    eyebrow: "Access",
    title: "Entry points that stay controlled.",
    description:
      "Use this section for a premium building-access image: gate control, entrance architecture, reception control, or layered access systems that show how the property is protected.",
    src: "/images/security-access.jpg",
    caption: "Access control / perimeter / building entry",
  },
];

export function ImageStory() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!root.current) return;

      const panels = gsap.utils.toArray<HTMLElement>(".image-story-panel");

      panels.forEach((panel) => {
        const media = panel.querySelector(".image-story-media");

        if (!media) return;

        gsap.to(media, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="pb-14 sm:pb-18 lg:pb-24">
      <div className="container-shell">
        <div className="border-t border-black/10 pt-8 sm:pt-10 lg:pt-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-[#8b6a45]/20 bg-[#8b6a45]/6 px-3 py-1.5">
              <LockKeyhole className="h-3.5 w-3.5 text-[#8b6a45]" />
              <span className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#8b6a45]">
                Building Protection
              </span>
            </div>

            <h2 className="font-display mt-4 max-w-[9ch] text-[clamp(2.2rem,11vw,4.8rem)] leading-[0.94] tracking-[-0.07em] text-black">
              Images that show how the building is protected.
            </h2>

            <p className="mt-4 max-w-[38rem] text-[0.96rem] leading-7 text-black/66 sm:text-[1rem] sm:leading-8">
              These visuals should support the story of building security —
              entrances, surveillance, access control, perimeter protection, and
              live visibility.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-10 sm:mt-10 lg:gap-12">
            {modules.map((item, index) => (
              <article
                key={item.title}
                className="image-story-panel grid gap-5 border-t border-black/10 pt-5 sm:gap-6 sm:pt-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10"
              >
                <Reveal className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-[280px] overflow-hidden border border-black/12 bg-black sm:h-[360px] lg:h-[460px]">
                    <div className="image-story-media h-full w-full">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={1600}
                        height={1000}
                        className="h-full w-full object-cover opacity-[0.9]"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>

                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.16)_28%,rgba(0,0,0,0.72)_100%)]" />

                    <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 lg:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="inline-flex items-center gap-2 border border-white/14 bg-white/5 px-3 py-1.5">
                          <LockKeyhole className="h-3.5 w-3.5 text-[#d2b188]" />
                          <span className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-white/74">
                            {item.eyebrow}
                          </span>
                        </div>

                        <span className="text-[0.66rem] uppercase tracking-[0.16em] text-white/44">
                          Blackridge
                        </span>
                      </div>

                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.16em] text-white/46">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex h-full flex-col justify-center">
                    <div className="inline-flex items-center gap-2 border border-[#8b6a45]/20 bg-[#8b6a45]/6 px-3 py-1.5">
                      <LockKeyhole className="h-3.5 w-3.5 text-[#8b6a45]" />
                      <span className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#8b6a45]">
                        {item.eyebrow}
                      </span>
                    </div>

                    <h3 className="font-display mt-4 max-w-[11ch] text-[clamp(1.8rem,9vw,3.2rem)] leading-[0.94] tracking-[-0.06em] text-black">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-[32rem] text-[0.94rem] leading-7 text-black/62 sm:text-[0.98rem]">
                      {item.description}
                    </p>

                    <Link
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-black/58 transition hover:text-black"
                    >
                      <span>Discuss this property layer</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
