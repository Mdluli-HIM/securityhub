"use client";

import Image from "next/image";
import { LockKeyhole } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const cards = [
  {
    index: "01",
    title: "Command visibility",
    copy: "A premium image card for monitoring desks, control surfaces, or live oversight environments.",
    src: "/images/security-command.jpg",
  },
  {
    index: "02",
    title: "Perimeter logic",
    copy: "A premium image card for gates, perimeter systems, vehicle access, or layered entry conditions.",
    src: "/images/security-perimeter.jpg",
  },
  {
    index: "03",
    title: "Human presence",
    copy: "A premium image card for discreet team presence, operator review, or high-trust protection moments.",
    src: "/images/security-team.jpg",
  },
];

export function VisualProofStrip() {
  return (
    <section className="pb-14 sm:pb-18 lg:pb-24">
      <div className="container-shell">
        <div className="border-t border-black/10 pt-8 sm:pt-10 lg:pt-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-[#8b6a45]/20 bg-[#8b6a45]/6 px-3 py-1.5">
              <LockKeyhole className="h-3.5 w-3.5 text-[#8b6a45]" />
              <span className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#8b6a45]">
                Visual Proof
              </span>
            </div>

            <h2 className="font-display mt-4 max-w-[10ch] text-[clamp(2.2rem,11vw,4.6rem)] leading-[0.94] tracking-[-0.07em] text-black">
              Smaller image cards that still feel exacting.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3">
            {cards.map((card) => (
              <Reveal key={card.index}>
                <article className="ui-card overflow-hidden">
                  <div className="relative h-[240px] border-b border-black/10 bg-black sm:h-[260px]">
                    <Image
                      src={card.src}
                      alt={card.title}
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover opacity-[0.92]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.16)_28%,rgba(0,0,0,0.7)_100%)]" />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 border border-white/14 bg-white/5 px-3 py-1.5">
                      <LockKeyhole className="h-3.5 w-3.5 text-[#d2b188]" />
                      <span className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-white/74">
                        Layer {card.index}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="font-display text-[1.22rem] leading-[0.95] tracking-[-0.05em] text-black sm:text-[1.35rem]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[0.9rem] leading-6 text-black/62 sm:text-[0.95rem] sm:leading-7">
                      {card.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
