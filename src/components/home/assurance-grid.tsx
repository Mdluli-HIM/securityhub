import { siteContent } from "@/content/site";

export function AssuranceGrid() {
  return (
    <section id="solutions" className="pb-24">
      <div className="container-shell">
        <div className="grid gap-12 section-line pt-12 lg:grid-cols-[0.84fr_1.16fr]">
          <div>
            <p className="eyebrow">Secure</p>
            <h2 className="font-display mt-5 max-w-[8ch] text-[clamp(2.8rem,5vw,4.6rem)] leading-[0.96] tracking-[-0.07em]">
              Your built-in security architecture.
            </h2>
            <p className="mt-6 max-w-[30rem] text-[1.02rem] leading-8 text-black/66">
              {siteContent.servicesIntro}
            </p>
          </div>

          <div>
            {siteContent.services.map((service, index) => (
              <article
                key={service.title}
                className="grid gap-5 border-t border-black/10 py-6 md:grid-cols-[72px_1fr]"
              >
                <div className="font-display text-[1.5rem] tracking-[-0.05em] text-black/28">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="font-display text-[1.7rem] tracking-[-0.05em] text-black">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-[44rem] text-[0.98rem] leading-7 text-black/64">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
