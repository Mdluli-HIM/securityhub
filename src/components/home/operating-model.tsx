import { siteContent } from "@/content/site";

export function OperatingModel() {
  return (
    <section id="insights" className="pb-24">
      <div className="container-shell">
        <div className="grid gap-12 section-line pt-12 lg:grid-cols-[0.84fr_1.16fr]">
          <div>
            <p className="eyebrow">Method</p>
            <h2 className="font-display mt-5 max-w-[8ch] text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.07em]">
              The operating model behind the protection.
            </h2>
            <p className="mt-6 max-w-[30rem] text-[1rem] leading-8 text-black/66">
              Premium security is not just equipment. It is architecture,
              process, documentation, accountability, and continuous review.
            </p>
          </div>

          <div className="border-t border-black/10">
            {siteContent.process.map((step) => (
              <article
                key={step.index}
                className="grid gap-5 border-b border-black/10 py-6 md:grid-cols-[84px_1fr]"
              >
                <div className="font-display text-[1.6rem] tracking-[-0.05em] text-black/28">
                  {step.index}
                </div>

                <div>
                  <h3 className="font-display text-[1.7rem] tracking-[-0.05em] text-black">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[44rem] text-[0.98rem] leading-7 text-black/64">
                    {step.description}
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
