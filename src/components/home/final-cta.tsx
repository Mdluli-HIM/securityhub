import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FinalCta() {
  return (
    <section id="contact" className="pb-24">
      <div className="container-shell">
        <div className="border border-black/12 bg-white px-7 py-10 md:px-10 md:py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">Get started</p>
              <h2 className="font-display mt-5 max-w-[10ch] text-[clamp(3rem,5.5vw,5.4rem)] leading-[0.92] tracking-[-0.09em] text-black">
                Define the right security posture for your company.
              </h2>
              <p className="mt-6 max-w-[42rem] text-[1rem] leading-8 text-black/62 md:text-[1.08rem]">
                From executive environments to operational sites, Blackridge
                builds premium protection systems that are structured, calm, and
                ready to perform.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="#" className="ui-button ui-button-solid">
                <span>Request Review</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link href="#solutions" className="ui-button">
                <span>View Capabilities</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
