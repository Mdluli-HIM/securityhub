"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  LockKeyhole,
  ShieldCheck,
  Building2,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { siteContent } from "@/content/site";

const serviceOptions = [
  "24/7 Monitoring",
  "Access Control",
  "Incident Response",
  "Executive Protection",
  "Risk Review",
];

const consultationItems = [
  "Site and exposure review",
  "Security posture discussion",
  "Access and movement assessment",
  "Recommended next-step priorities",
];

export function ContactSection() {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [environment, setEnvironment] = useState("Corporate Office");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "24/7 Monitoring",
  ]);

  const summaryName = fullName.trim() || "Your team";
  const summaryCompany = company.trim() || "Your company";

  const summaryServices = useMemo(() => {
    if (selectedServices.length === 0) return "General consultation";
    return selectedServices.join(", ");
  }, [selectedServices]);

  const toggleService = (service: string) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  };

  return (
    <section id="contact" className="pb-14 sm:pb-18 lg:pb-24">
      <div className="container-shell">
        <div className="border border-black/12 bg-white">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="border-b border-black/10 p-4 sm:p-6 lg:border-b-0 lg:border-r lg:p-8 xl:p-10">
              <div className="inline-flex items-center gap-2 border border-[#8b6a45]/20 bg-[#8b6a45]/6 px-3 py-1.5">
                <LockKeyhole className="h-3.5 w-3.5 text-[#8b6a45]" />
                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#8b6a45]">
                  Consultation
                </span>
              </div>

              <h2 className="font-display mt-4 max-w-[9ch] text-[clamp(2.2rem,11vw,4.8rem)] leading-[0.92] tracking-[-0.08em] text-black">
                Let’s define the right security posture.
              </h2>

              <p className="mt-4 max-w-[34rem] text-[0.96rem] leading-7 text-black/66 sm:text-[1rem] sm:leading-8">
                Use this form to start a structured conversation around your
                site, risks, operations, and protection priorities.
              </p>

              <div className="mt-8 border-t border-black/10 pt-6">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-black/34">
                  What the consultation covers
                </p>

                <div className="mt-4 grid gap-3">
                  {consultationItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center border border-[#8b6a45]/20 bg-[#8b6a45]/6">
                        <Check className="h-3.5 w-3.5 text-[#8b6a45]" />
                      </div>
                      <p className="text-[0.92rem] leading-6 text-black/64">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-black/10 pt-6">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-black/34">
                  Live request summary
                </p>

                <div className="mt-4 border border-black/10 bg-[#f7f6f2] p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-black/34">
                        Consultation request
                      </p>
                      <h3 className="font-display mt-3 text-[1.3rem] leading-[0.95] tracking-[-0.05em] text-black sm:text-[1.5rem]">
                        {summaryCompany}
                      </h3>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center border border-[#8b6a45]/20 bg-[#8b6a45]/6">
                      <ShieldCheck className="h-4.5 w-4.5 text-[#8b6a45]" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 border-t border-black/10 pt-4">
                    <div>
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-black/34">
                        Contact
                      </p>
                      <p className="mt-1 text-[0.92rem] leading-6 text-black/64">
                        {summaryName}
                      </p>
                    </div>

                    <div>
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-black/34">
                        Environment
                      </p>
                      <p className="mt-1 text-[0.92rem] leading-6 text-black/64">
                        {environment}
                      </p>
                    </div>

                    <div>
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-black/34">
                        Priority layers
                      </p>
                      <p className="mt-1 text-[0.92rem] leading-6 text-black/64">
                        {summaryServices}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="p-4 sm:p-6 lg:p-8 xl:p-10">
              <form className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                      Full name
                    </span>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your name"
                      className="mt-3 h-12 w-full border border-black/12 bg-transparent px-4 text-[0.98rem] text-black outline-none placeholder:text-black/28 focus:border-black"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                      Company
                    </span>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your company"
                      className="mt-3 h-12 w-full border border-black/12 bg-transparent px-4 text-[0.98rem] text-black outline-none placeholder:text-black/28 focus:border-black"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                      Email
                    </span>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="mt-3 h-12 w-full border border-black/12 bg-transparent px-4 text-[0.98rem] text-black outline-none placeholder:text-black/28 focus:border-black"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                      Phone
                    </span>
                    <input
                      type="tel"
                      placeholder="+27 ..."
                      className="mt-3 h-12 w-full border border-black/12 bg-transparent px-4 text-[0.98rem] text-black outline-none placeholder:text-black/28 focus:border-black"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                      Environment
                    </span>
                    <select
                      value={environment}
                      onChange={(e) => setEnvironment(e.target.value)}
                      className="mt-3 h-12 w-full border border-black/12 bg-transparent px-4 text-[0.98rem] text-black outline-none focus:border-black"
                    >
                      <option>Corporate Office</option>
                      <option>Luxury Residential</option>
                      <option>Retail & Hospitality</option>
                      <option>Industrial Site</option>
                      <option>Multi-Site Operation</option>
                      <option>Executive Protection</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                      Timeline
                    </span>
                    <select className="mt-3 h-12 w-full border border-black/12 bg-transparent px-4 text-[0.98rem] text-black outline-none focus:border-black">
                      <option>Immediate</option>
                      <option>Within 30 days</option>
                      <option>Within 90 days</option>
                      <option>Exploratory</option>
                    </select>
                  </label>
                </div>

                <div>
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                    Priority services
                  </span>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {serviceOptions.map((service) => {
                      const selected = selectedServices.includes(service);

                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`inline-flex items-center gap-2 border px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition ${
                            selected
                              ? "border-[#8b6a45]/30 bg-[#8b6a45]/10 text-[#6f5132]"
                              : "border-black/12 bg-transparent text-black/58 hover:border-black/20 hover:text-black"
                          }`}
                        >
                          <Building2 className="h-3.5 w-3.5" />
                          <span>{service}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <label className="block">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                    Project overview
                  </span>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your site, risk profile, existing setup, or what you want to improve."
                    className="mt-3 w-full border border-black/12 bg-transparent px-4 py-4 text-[0.98rem] text-black outline-none placeholder:text-black/28 focus:border-black"
                  />
                </label>

                <div className="flex flex-col gap-4 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[26rem] text-[0.84rem] leading-6 text-black/46">
                    This form is ready for your real backend or email workflow.
                    Connect it to your API route before launch.
                  </p>

                  <button type="submit" className="ui-button ui-button-solid">
                    <span>Request Consultation</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </form>

              <div className="mt-6 flex items-center gap-3 border-t border-black/10 pt-5">
                <div className="flex h-8 w-8 items-center justify-center border border-[#8b6a45]/20 bg-[#8b6a45]/6">
                  <LockKeyhole className="h-4 w-4 text-[#8b6a45]" />
                </div>
                <p className="text-[0.84rem] leading-6 text-black/46">
                  {siteContent.companyName} consultation requests should route
                  to your real email or CRM workflow before launch.
                </p>
              </div>

              <div className="mt-4">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-black/56 transition hover:text-black"
                >
                  <span>Need a direct contact route</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
