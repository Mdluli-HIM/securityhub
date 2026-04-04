"use client";

import Link from "next/link";
import { LockKeyhole } from "lucide-react";
import { siteContent } from "@/content/site";

const topGroups = [
  {
    title: "Building Security",
    links: [
      "24/7 Monitoring",
      "Access Control",
      "Perimeter Protection",
      "CCTV Systems",
      "Alarm Integration",
      "Risk Reviews",
    ],
  },
  {
    title: "Property Types",
    links: [
      "Office Buildings",
      "Apartment Blocks",
      "Retail Properties",
      "Warehouses",
      "Industrial Facilities",
      "Schools",
    ],
  },
  {
    title: "Support",
    links: [
      "Site Assessment",
      "Security Consultation",
      "System Design",
      "Response Planning",
      "Operational Review",
      "Contact",
    ],
  },
];

const bottomGroups = [
  {
    title: "Company",
    links: ["About Blackridge", "Our Method", "Services", "Contact"],
  },
  {
    title: "Core Services",
    links: [
      "Monitoring",
      "Access Control",
      "Perimeter Protection",
      "Risk Reviews",
    ],
  },
  {
    title: "Property Types",
    links: [
      "Office Buildings",
      "Apartment Blocks",
      "Retail Properties",
      "Industrial Facilities",
    ],
  },
];

const smallTags = ["Buildings", "Access", "Monitoring", "Protection"];

export function SiteFooter() {
  return (
    <footer className="mt-0">
      <div className="border-t border-white/10 bg-[#0d1822] text-[#f3efe7]">
        <div className="container-shell pt-10 sm:pt-12 lg:pt-16">
          <div className="grid gap-10 border-b border-white/10 pb-10 sm:gap-12 sm:pb-12 lg:grid-cols-4 lg:pb-16">
            <div>
              <div className="inline-flex items-center gap-2 border border-white/12 bg-white/[0.03] px-3 py-1.5">
                <LockKeyhole className="h-3.5 w-3.5 text-[#9db6cf]" />
                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#c2d0de]">
                  Blackridge
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-5">
                <p className="font-display text-[1.5rem] leading-none tracking-[-0.05em] text-[#f3efe7] sm:text-[1.75rem] lg:text-[2.15rem]">
                  Building Security
                </p>
                <p className="max-w-[26rem] text-[0.94rem] leading-7 text-[#f3efe7]/66 sm:text-[1rem] sm:leading-8">
                  Security systems focused on protecting buildings, facilities,
                  and the people and operations inside them.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                {smallTags.map((tag) => (
                  <div
                    key={tag}
                    className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-3 py-2"
                  >
                    <LockKeyhole className="h-3.5 w-3.5 text-[#9db6cf]" />
                    <span className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#f3efe7]/72">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {topGroups.map((group) => (
              <div key={group.title}>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.26em] text-[#f3efe7]/36 sm:text-[0.68rem]">
                  {group.title}
                </p>

                <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-5">
                  {group.links.map((link) => (
                    <Link
                      key={link}
                      href="#"
                      className="text-[0.96rem] leading-none tracking-[-0.02em] text-[#f3efe7]/82 transition hover:text-white sm:text-[1.02rem] lg:text-[1.05rem]"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-10 py-10 sm:gap-12 sm:py-12 lg:grid-cols-3 lg:py-14">
            {bottomGroups.map((group, index) => (
              <div key={group.title}>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.26em] text-[#f3efe7]/36 sm:text-[0.68rem]">
                  {group.title}
                </p>

                <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-5">
                  {group.links.map((link) => (
                    <Link
                      key={link}
                      href="#"
                      className={
                        index === 0
                          ? "font-display text-[1.25rem] leading-none tracking-[-0.05em] text-[#f3efe7] transition hover:text-white sm:text-[1.45rem] lg:text-[1.7rem]"
                          : "text-[0.96rem] leading-none tracking-[-0.02em] text-[#f3efe7]/82 transition hover:text-white sm:text-[1.02rem] lg:text-[1.05rem]"
                      }
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#2a1115] text-[#f3efe7]">
        <div className="container-shell pt-10 sm:pt-12 md:pt-16">
          <p className="font-display text-[clamp(2.8rem,16vw,9.5rem)] leading-[0.88] tracking-[-0.1em] text-[#f3efe7]">
            Protect the building.
          </p>

          <div className="mt-6 flex flex-col gap-4 pb-8 text-[0.88rem] text-[#f3efe7]/78 sm:mt-8 md:mt-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8">
              <span>© 2026 {siteContent.companyName} inc.</span>
              <Link href="#" className="transition hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="transition hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="transition hover:text-white">
                Cookie Policy
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <span>Follow us</span>
              <Link
                href="#"
                className="inline-flex h-6 w-6 items-center justify-center border border-white/24 text-[0.7rem] font-semibold"
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
