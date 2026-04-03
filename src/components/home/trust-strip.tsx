"use client";

import { LockKeyhole, ShieldCheck, Clock3, FileCheck2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const trustItems = [
  {
    icon: LockKeyhole,
    label: "Controlled access",
    copy: "Permissions, movement, and restricted areas designed with intent.",
  },
  {
    icon: ShieldCheck,
    label: "Operational readiness",
    copy: "Structured escalation and response logic for high-trust environments.",
  },
  {
    icon: Clock3,
    label: "Ongoing oversight",
    copy: "Monitoring, review, and support designed to reduce exposure over time.",
  },
  {
    icon: FileCheck2,
    label: "Clear reporting",
    copy: "Practical visibility for decision-makers, operators, and stakeholders.",
  },
];

export function TrustStrip() {
  return (
    <section className="pb-14 sm:pb-18 lg:pb-24">
      <div className="container-shell">
        <div className="border-t border-black/10 pt-8 sm:pt-10 lg:pt-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-[#8b6a45]/20 bg-[#8b6a45]/6 px-3 py-1.5">
              <LockKeyhole className="h-3.5 w-3.5 text-[#8b6a45]" />
              <span className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#8b6a45]">
                Trust Layer
              </span>
            </div>

            <h2 className="font-display mt-4 max-w-[9ch] text-[clamp(2.2rem,11vw,4.6rem)] leading-[0.94] tracking-[-0.07em] text-black">
              Built to feel calm. Designed to perform.
            </h2>

            <p className="mt-4 max-w-[40rem] text-[0.96rem] leading-7 text-black/66 sm:text-[1rem] sm:leading-8">
              Premium security is rarely loud. It is controlled, deliberate, and
              dependable in the moments that matter most.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.label}>
                  <article className="ui-card p-4 sm:p-5 lg:p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-black/34">
                        Detail
                      </span>

                      <div className="flex h-8 w-8 items-center justify-center border border-[#8b6a45]/20 bg-[#8b6a45]/6">
                        <Icon className="h-4 w-4 text-[#8b6a45]" />
                      </div>
                    </div>

                    <h3 className="font-display mt-5 text-[1.2rem] leading-[0.95] tracking-[-0.05em] text-black sm:text-[1.35rem]">
                      {item.label}
                    </h3>

                    <p className="mt-3 text-[0.9rem] leading-6 text-black/62 sm:text-[0.95rem] sm:leading-7">
                      {item.copy}
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
