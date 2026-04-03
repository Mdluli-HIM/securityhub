"use client";

import Link from "next/link";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { siteContent } from "@/content/site";

const topGroups = [
  {
    title: "Services",
    links: [
      "24/7 Monitoring",
      "Access Control",
      "Incident Response",
      "Executive Protection",
      "Risk Reviews",
      "Security Consultation",
    ],
  },
  {
    title: "Environments",
    links: [
      "Corporate Offices",
      "Luxury Residential",
      "Retail & Hospitality",
      "Industrial Sites",
      "Multi-Site Operations",
      "Executive Movement",
    ],
  },
  {
    title: "Support",
    links: [
      "Operational Planning",
      "System Design",
      "Response Workflows",
      "Visitor Control",
      "Perimeter Logic",
      "Review Cycles",
    ],
  },
];

const bottomGroups = [
  {
    title: "Company",
    links: ["About Blackridge", "Our Method", "Capabilities", "Consultation"],
  },
  {
    title: "Useful Links",
    links: ["Security Review", "Contact", "Industries", "Solutions"],
  },
  {
    title: "Launch Notes",
    links: [
      "Replace with your phone number",
      "Replace with your email address",
      "Replace with your service area",
      "Replace with your social links",
    ],
  },
];

const smallTags = ["Monitoring", "Access", "Response", "Risk"];

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#f4f4f1] pt-10 sm:pt-12 lg:pt-16">
      <div className="container-shell">
        <div className="grid gap-10 border-b border-black/10 pb-10 sm:gap-12 sm:pb-12 lg:grid-cols-4 lg:pb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#8b6a45]/20 bg-[#8b6a45]/6 px-3 py-1.5">
              <LockKeyhole className="h-3.5 w-3.5 text-[#8b6a45]" />
              <span className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#8b6a45]">
                Blackridge
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-5">
              <p className="font-display text-[1.5rem] leading-none tracking-[-0.05em] text-black sm:text-[1.75rem] lg:text-[2.15rem]">
                Security Systems
              </p>
              <p className="max-w-[26rem] text-[0.94rem] leading-7 text-black/58 sm:text-[1rem] sm:leading-8">
                Premium integrated protection for people, property, operations,
                and business continuity.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              {smallTags.map((tag) => (
                <div
                  key={tag}
                  className="inline-flex items-center gap-2 border border-[#8b6a45]/18 bg-[#8b6a45]/6 px-3 py-2"
                >
                  <LockKeyhole className="h-3.5 w-3.5 text-[#8b6a45]" />
                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-black/62">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {topGroups.map((group) => (
            <div key={group.title}>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.26em] text-black/36 sm:text-[0.68rem]">
                {group.title}
              </p>

              <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-5">
                {group.links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-[0.96rem] leading-none tracking-[-0.02em] text-black/82 transition hover:text-black/60 sm:text-[1.02rem] lg:text-[1.05rem]"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-10 py-10 sm:gap-12 sm:py-12 lg:grid-cols-4 lg:py-14">
          {bottomGroups.map((group, index) => (
            <div key={group.title}>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.26em] text-black/36 sm:text-[0.68rem]">
                {group.title}
              </p>

              <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-5">
                {group.links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className={
                      index === 0
                        ? "font-display text-[1.25rem] leading-none tracking-[-0.05em] text-black transition hover:text-black/65 sm:text-[1.45rem] lg:text-[1.7rem]"
                        : "text-[0.96rem] leading-none tracking-[-0.02em] text-black/82 transition hover:text-black/60 sm:text-[1.02rem] lg:text-[1.05rem]"
                    }
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <label className="block">
              <span className="text-[0.94rem] text-black/42 sm:text-[0.98rem]">
                Email Address*
              </span>
              <input
                type="email"
                className="mt-4 h-10 w-full border-0 border-b border-black/35 bg-transparent px-0 text-[1rem] text-black outline-none placeholder:text-black/28 focus:border-black"
              />
            </label>

            <label className="mt-6 flex items-start gap-3 sm:mt-8">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 border border-black/15 bg-transparent accent-black"
              />
              <span className="max-w-[24rem] text-[0.86rem] leading-6 text-black/42 sm:text-[0.9rem]">
                I agree to {siteContent.companyName} processing my personal data
                in accordance with the Privacy Policy.
              </span>
            </label>

            <button className="mt-6 inline-flex h-11 items-center gap-2 border border-black bg-black px-4 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-transparent hover:text-black sm:mt-8 sm:h-12 sm:px-5 sm:text-[0.8rem] sm:tracking-[0.18em]">
              <span>Subscribe to updates</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="border-t border-black/10 pt-10 sm:pt-12 md:pt-16">
          <p className="font-display text-[clamp(2.8rem,16vw,9.5rem)] leading-[0.88] tracking-[-0.1em] text-black">
            Controlled. Refined. Ready.
          </p>

          <div className="mt-6 flex flex-col gap-4 pb-8 text-[0.88rem] text-black/78 sm:mt-8 md:mt-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8">
              <span>© 2026 {siteContent.companyName} inc.</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 bg-[#8b6a45]" />
                Status
              </span>
              <Link href="#" className="transition hover:text-black/55">
                Terms of Service
              </Link>
              <Link href="#" className="transition hover:text-black/55">
                Privacy Policy
              </Link>
              <Link href="#" className="transition hover:text-black/55">
                Cookie Policy
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <span>Follow us</span>
              <Link
                href="#"
                className="inline-flex h-6 w-6 items-center justify-center border border-black/60 text-[0.7rem] font-semibold"
              >
                in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
