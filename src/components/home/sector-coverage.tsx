import { siteContent } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";

export function SectorCoverage() {
  return (
    <section id="proof" className="pb-24">
      <div className="light-contrast-surface text-black">
        <div className="container-shell py-10 md:py-12">
          <div className="grid gap-12 border-b border-black/10 pb-10 lg:grid-cols-[0.84fr_1.16fr]">
            <Reveal>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-black/42">
                Industries
              </p>
              <h2 className="font-display mt-5 max-w-[8ch] text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.94] tracking-[-0.08em] text-black">
                Built for trust, discretion, and control.
              </h2>
            </Reveal>

            <Reveal className="flex items-end">
              <p className="max-w-[42rem] text-[1rem] leading-8 text-black/64">
                Different environments require different security behavior. We
                adapt system design, access logic, monitoring priorities, and
                response structure to the way each space actually works.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 pt-6 md:grid-cols-2">
            {siteContent.sectors.map((sector) => (
              <Reveal key={sector.name}>
                <article className="ui-card p-6 md:p-7">
                  <h3 className="font-display text-[1.6rem] tracking-[-0.05em] text-black">
                    {sector.name}
                  </h3>
                  <p className="mt-3 text-[0.98rem] leading-7 text-black/64">
                    {sector.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
