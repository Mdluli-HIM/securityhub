"use client";

import { LockKeyhole, ShieldCheck, Eye } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { siteContent } from "@/content/site";

const icons = [LockKeyhole, ShieldCheck, Eye];

export function TrustDetails() {
  return (
    <section className="pb-14 sm:pb-18 lg:pb-24">
      <div className="container-shell">
        <div className="grid gap-8 border-t border-black/10 pt-8 sm:gap-10 sm:pt-10 lg:grid-cols-[0.84fr_1.16fr] lg:gap-12 lg:pt-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-[#8b6a45]/20 bg-[#8b6a45]/6 px-3 py-1.5">
              <LockKeyhole className="h-3.5 w-3.5 text-[#8b6a45]" />
              <span className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#8b6a45]">
                Why Blackridge
              </span>
            </div>

            <h2 className="font-display mt-4 max-w-[8ch] text-[clamp(2.2rem,11vw,4.8rem)] leading-[0.94] tracking-[-0.07em] text-black">
              Small details. Stronger trust.
            </h2>

            <p className="mt-4 max-w-[30rem] text-[0.96rem] leading-7 text-black/66 sm:text-[1rem] sm:leading-8">
              Premium protection is felt in the details: how movement is
              controlled, how response is handled, and how the environment
              remains calm while still being secure.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
            {siteContent.trustMarks.map((item, index) => {
              const Icon = icons[index] ?? LockKeyhole;
              const displayIndex = String(index + 1).padStart(2, "0");

              return (
                <Reveal key={`${item.title}-${index}`}>
                  <article className="ui-card p-4 sm:p-5 lg:p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-black/34">
                        {displayIndex}
                      </span>

                      <div className="flex h-8 w-8 items-center justify-center border border-[#8b6a45]/20 bg-[#8b6a45]/6">
                        <Icon className="h-4 w-4 text-[#8b6a45]" />
                      </div>
                    </div>

                    <h3 className="font-display mt-5 text-[1.2rem] leading-[0.95] tracking-[-0.05em] text-black sm:text-[1.35rem]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[0.9rem] leading-6 text-black/62 sm:text-[0.95rem] sm:leading-7">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
