"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { siteContent } from "@/content/site";

export function SiteHeader() {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  const activeItem = useMemo(
    () =>
      siteContent.nav.find((item) => item.label === activeLabel && item.menu),
    [activeLabel],
  );

  const activeMenu = activeItem?.menu;

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(244,244,241,0.84)] backdrop-blur-xl">
      <div onMouseLeave={() => setActiveLabel(null)}>
        <div className="container-shell grid h-20 grid-cols-[auto_1fr_auto] items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center border border-black/20 bg-black transition duration-200 hover:rotate-45">
              <span className="h-2 w-2 bg-white" />
            </span>

            <span className="font-display text-[1.85rem] tracking-[-0.07em] text-black">
              {siteContent.companyName}
            </span>
          </Link>

          <nav className="hidden items-center justify-center gap-10 lg:flex">
            {siteContent.nav.map((item) =>
              item.menu ? (
                <button
                  key={item.label}
                  type="button"
                  onMouseEnter={() => setActiveLabel(item.label)}
                  className="group inline-flex items-center gap-1 text-[0.98rem] font-medium tracking-[-0.02em] text-black/75 transition hover:text-black"
                >
                  <span className="premium-link">{item.label}</span>
                  <span className="text-black/55 transition group-hover:text-black">
                    {activeLabel === item.label ? "−" : "+"}
                  </span>
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setActiveLabel(null)}
                  className="premium-link text-[0.98rem] font-medium tracking-[-0.02em] text-black/75 transition hover:text-black"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden lg:flex">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-black/38">
              Blackridge / Security Systems
            </span>
          </div>
        </div>

        <div
          className={`overflow-hidden border-t border-black/10 bg-[rgba(244,244,241,0.94)] transition-[max-height,opacity] duration-300 ease-out ${
            activeMenu
              ? "pointer-events-auto max-h-[34rem] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          {activeMenu ? (
            <div className="container-shell grid gap-0 py-8 lg:grid-cols-[1fr_1fr_1fr_0.9fr]">
              {activeMenu.sections.map((section) => (
                <div
                  key={section.title}
                  className="translate-y-0 px-2 py-3 transition duration-300 lg:px-4"
                >
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-black/38">
                    {section.title}
                  </p>

                  <div className="mt-7 flex flex-col gap-5">
                    {section.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="group block"
                      >
                        <span className="font-display text-[1.25rem] leading-none tracking-[-0.04em] text-black/82 transition group-hover:text-black">
                          {link.label}
                        </span>

                        {link.description ? (
                          <p className="mt-2 max-w-[22rem] text-[0.94rem] leading-6 text-black/52">
                            {link.description}
                          </p>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="border-black/10 px-4 py-3 lg:border-l lg:pl-12">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-black/38">
                  {activeMenu.asideLabel ?? "Overview"}
                </p>

                <h3 className="font-display mt-7 max-w-[12ch] text-[1.9rem] leading-[0.95] tracking-[-0.06em] text-black">
                  {activeMenu.asideTitle}
                </h3>

                <p className="mt-5 max-w-[24rem] text-[1rem] leading-7 text-black/56">
                  {activeMenu.asideCopy}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
