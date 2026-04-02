"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/content/site";

const topGroups = [
  {
    title: "Blackridge",
    links: ["About", "Careers", "Press", "Contact", "Legal", "Security"],
  },
  {
    title: "Capabilities",
    links: [
      "Monitoring",
      "Intelligence",
      "Access Control",
      "Incident Response",
      "Governance",
      "Integrations",
      "Features",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Corporate Security Systems",
      "Executive Protection",
      "Professional Security Services",
      "Site Risk Reviews",
      "AI Deployment",
      "Perimeter Control",
      "Processes",
    ],
  },
];

const bottomGroups = [
  {
    title: "Resources",
    links: [
      "Pricing",
      "Editorial",
      "Events",
      "Partners",
      "Help Center",
      "Developers",
    ],
  },
  {
    title: "Customers",
    links: [
      "Our Impact",
      "Blackridge for Enterprise",
      "Blackridge for Scale Ups",
      "Blackridge for Start Ups",
      "Blackridge for SaaS",
      "Blackridge for Security",
    ],
  },
  {
    title: "Migration Guides",
    links: [
      "Switch from Legacy CCTV",
      "Switch from Legacy Access",
      "Switch from Fragmented Vendors",
      "Switch from Manual Guard Logs",
      "Switch from Basic Monitoring",
      "Switch from Outdated Systems",
    ],
  },
];

const complianceBadges = ["ISO 27001", "SOC II", "CCPA", "GDPR"];

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#f4f4f1] pt-16">
      <div className="container-shell">
        <div className="grid gap-12 border-b border-black/10 pb-16 lg:grid-cols-4">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-black/36">
              {topGroups[0].title}
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {topGroups[0].links.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="font-display text-[2.15rem] leading-none tracking-[-0.05em] text-black transition hover:text-black/65"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-black/36">
              {topGroups[1].title}
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {topGroups[1].links.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-[1.05rem] leading-none tracking-[-0.02em] text-black/82 transition hover:text-black/60"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-black/36">
              {topGroups[2].title}
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {topGroups[2].links.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-[1.05rem] leading-none tracking-[-0.02em] text-black/82 transition hover:text-black/60"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-black/36">
              Recognized as a world-leader by
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-b border-black/10 pb-8">
              <span className="font-display text-[2.1rem] tracking-[-0.05em] text-black/58">
                Gartner.
              </span>
              <span className="font-display text-[2.1rem] tracking-[-0.05em] text-black/58">
                IDC
              </span>
              <span className="font-display text-[2.1rem] tracking-[-0.05em] text-black/58">
                G2
              </span>
              <span className="text-[0.95rem] leading-5 text-black/48">
                880+ reviews
              </span>
            </div>

            <p className="mt-8 max-w-[24rem] text-[1rem] leading-8 text-black/56">
              {siteContent.companyName} is built to keep your people, property,
              and operations secure. We put privacy and security front and
              centre, so you don’t have to.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {complianceBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex h-14 min-w-14 items-center justify-center border border-black/12 px-4 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-black/56"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-12 py-14 lg:grid-cols-4">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-black/36">
              {bottomGroups[0].title}
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {bottomGroups[0].links.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="font-display text-[2rem] leading-none tracking-[-0.05em] text-black transition hover:text-black/65"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-black/36">
              {bottomGroups[1].title}
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {bottomGroups[1].links.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-[1.05rem] leading-none tracking-[-0.02em] text-black/82 transition hover:text-black/60"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-black/36">
              {bottomGroups[2].title}
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {bottomGroups[2].links.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-[1.05rem] leading-none tracking-[-0.02em] text-black/82 transition hover:text-black/60"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <label className="block">
              <span className="text-[0.98rem] text-black/42">
                Email Address*
              </span>
              <input
                type="email"
                placeholder=""
                className="mt-5 h-10 w-full border-0 border-b border-black/35 bg-transparent px-0 text-[1rem] text-black outline-none placeholder:text-black/28 focus:border-black"
              />
            </label>

            <label className="mt-8 flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 border border-black/15 bg-transparent accent-black"
              />
              <span className="max-w-[24rem] text-[0.9rem] leading-6 text-black/42">
                I agree to {siteContent.companyName} processing my personal data
                in accordance with the Privacy Policy.
              </span>
            </label>

            <button className="mt-8 inline-flex h-12 items-center gap-2 border border-black bg-black px-5 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-transparent hover:text-black">
              <span>Subscribe to our newsletter</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
