"use client";

import Link from "next/link";
import { ArrowUpRight, LockKeyhole, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#f4f4f1] pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20"
    >
      <div className="container-shell">
        <div className="border-t border-black/10 pt-8 sm:pt-10 lg:pt-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <Reveal>
              <div className="inline-flex items-center gap-2 border border-[#8b6a45]/18 bg-[#8b6a45]/6 px-3 py-1.5">
                <LockKeyhole className="h-3.5 w-3.5 text-[#8b6a45]" />
                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#8b6a45]">
                  Contact
                </span>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                <h2 className="font-display max-w-[8ch] text-[clamp(2.8rem,11vw,5.8rem)] leading-[0.9] tracking-[-0.08em] text-black">
                  Secure the property.
                </h2>

                <div className="max-w-[24rem] pt-1">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/34">
                    Let’s start the conversation
                  </p>
                  <p className="mt-3 text-[0.94rem] leading-7 text-black/58 sm:text-[0.98rem]">
                    Tell us about the building, the access points, the current
                    setup, and the protection issues you want to improve.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="border-t border-black/10 pt-6 lg:pt-8">
                <h3 className="font-display text-[1.8rem] leading-[0.95] tracking-[-0.05em] text-black sm:text-[2.1rem]">
                  Need help?
                </h3>

                <p className="mt-4 max-w-[26rem] text-[0.92rem] leading-7 text-black/56 sm:text-[0.96rem]">
                  For building security reviews, monitoring questions, access
                  control planning, or property protection consultations, use
                  the form or contact us directly.
                </p>

                <div className="mt-8 grid gap-4">
                  <div className="flex items-start gap-3 border-t border-black/10 pt-4">
                    <Mail className="mt-1 h-4 w-4 text-[#8b6a45]" />
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/34">
                        Email
                      </p>
                      <p className="mt-1 text-[0.94rem] text-black/62">
                        replace@blackridge.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-black/10 pt-4">
                    <Phone className="mt-1 h-4 w-4 text-[#8b6a45]" />
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/34">
                        Phone
                      </p>
                      <p className="mt-1 text-[0.94rem] text-black/62">
                        +27 XX XXX XXXX
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="#"
                  className="mt-8 group inline-flex h-12 min-w-[228px] items-center justify-between border border-black/18 bg-transparent px-5 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-black transition duration-300 hover:border-black hover:bg-black hover:text-[#f4f4f1]"
                >
                  <span className="whitespace-nowrap">Open Direct Contact</span>
                  <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center border border-black/12 transition duration-300 group-hover:border-white/16">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <form className="grid gap-10">
                <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10">
                  <label className="block">
                    <span className="text-[0.72rem] font-medium tracking-[0.01em] text-black/78">
                      Full Name
                    </span>
                    <input
                      type="text"
                      placeholder=""
                      className="mt-4 h-12 w-full border-0 border-b border-black/18 bg-transparent px-0 text-[1rem] text-black outline-none placeholder:text-black/26 focus:border-black"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[0.72rem] font-medium tracking-[0.01em] text-black/78">
                      Email Address
                    </span>
                    <input
                      type="email"
                      placeholder=""
                      className="mt-4 h-12 w-full border-0 border-b border-black/18 bg-transparent px-0 text-[1rem] text-black outline-none placeholder:text-black/26 focus:border-black"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[0.72rem] font-medium tracking-[0.01em] text-black/78">
                      Phone
                    </span>
                    <input
                      type="tel"
                      placeholder=""
                      className="mt-4 h-12 w-full border-0 border-b border-black/18 bg-transparent px-0 text-[1rem] text-black outline-none placeholder:text-black/26 focus:border-black"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[0.72rem] font-medium tracking-[0.01em] text-black/78">
                      Company / Property Owner
                    </span>
                    <input
                      type="text"
                      placeholder=""
                      className="mt-4 h-12 w-full border-0 border-b border-black/18 bg-transparent px-0 text-[1rem] text-black outline-none placeholder:text-black/26 focus:border-black"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-[0.72rem] font-medium tracking-[0.01em] text-black/78">
                    Property Type
                  </span>
                  <input
                    type="text"
                    placeholder="Office building, apartment block, retail property, warehouse..."
                    className="mt-4 h-12 w-full border-0 border-b border-black/18 bg-transparent px-0 text-[1rem] text-black outline-none placeholder:text-black/30 focus:border-black"
                  />
                </label>

                <label className="block">
                  <span className="text-[0.72rem] font-medium tracking-[0.01em] text-black/78">
                    Message
                  </span>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the building, access points, perimeter, current systems, and the security challenges you want to solve."
                    className="mt-4 min-h-[120px] w-full resize-none border-0 border-b border-black/18 bg-transparent px-0 py-0 text-[1rem] leading-8 text-black outline-none placeholder:text-black/30 focus:border-black"
                  />
                </label>

                <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center border border-black bg-black px-8 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-transparent hover:text-black"
                  >
                    Send Request
                  </button>

                  <p className="max-w-[26rem] text-[0.82rem] leading-6 text-black/42">
                    Connect this form to your real email or API route before
                    launch.
                  </p>
                </div>
              </form>
            </Reveal>

            <Reveal>
              <div className="border-t border-black/10 pt-6 lg:pt-0">
                <div className="lg:pl-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/34">
                    Building security scope
                  </p>

                  <div className="mt-6 grid gap-5">
                    {[
                      "Office buildings and commercial properties",
                      "Apartment blocks and residential complexes",
                      "Warehouses and industrial facilities",
                      "Access control, monitoring, and perimeter planning",
                    ].map((item) => (
                      <div
                        key={item}
                        className="border-t border-black/10 pt-4 text-[0.94rem] leading-7 text-black/58"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
