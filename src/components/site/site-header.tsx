"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Menu, X, ArrowUpRight, Plus, Minus } from "lucide-react";
import { siteContent } from "@/content/site";

export function SiteHeader() {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  const activeItem = useMemo(
    () =>
      siteContent.nav.find((item) => item.label === activeLabel && item.menu),
    [activeLabel],
  );

  const activeMenu = activeItem?.menu;

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setExpandedMobile(null);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => {
      if (prev) setExpandedMobile(null);
      return !prev;
    });
  };

  const toggleMobileSection = (label: string) => {
    setExpandedMobile((prev) => (prev === label ? null : label));
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setExpandedMobile(null);
  };

  return (
    <>
      {/* HEADER */}
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

            {/* DESKTOP NAV */}
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

            {/* RIGHT SIDE */}
            <div className="flex items-center justify-end gap-4">
              <div className="hidden lg:flex">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-black/38">
                  Blackridge / Security Systems
                </span>
              </div>

              <button
                onClick={toggleMobileMenu}
                className="inline-flex h-11 w-11 items-center justify-center border border-black/12 lg:hidden"
              >
                {mobileOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* DESKTOP DROPDOWN */}
          <div
            className={`overflow-hidden border-t border-black/10 bg-[rgba(244,244,241,0.94)] transition-all duration-300 ${
              activeMenu ? "max-h-[34rem] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {activeMenu && (
              <div className="container-shell grid py-8 lg:grid-cols-[1fr_1fr_1fr_0.9fr]">
                {activeMenu.sections.map((section) => (
                  <div key={section.title} className="px-4">
                    <p className="text-xs uppercase text-black/40">
                      {section.title}
                    </p>

                    <div className="mt-6 space-y-4">
                      {section.links.map((link) => (
                        <Link key={link.label} href={link.href}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            onClick={closeMobileMenu}
            className="absolute inset-0 bg-black/20"
          />

          <div className="absolute inset-x-0 top-20 h-[calc(100dvh-5rem)] bg-[#f4f4f1]">
            <div className="flex h-full flex-col">
              {/* ✅ 1. TOP INTRO (TIGHTENED) */}
              <div className="container-shell border-b border-black/10 py-4">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-black/34">
                  Navigation
                </p>
                <p className="mt-2 max-w-[16rem] text-[0.84rem] leading-5 text-black/46">
                  Structured protection for modern business.
                </p>
              </div>

              {/* ✅ 6. SCROLL CONTAINER */}
              <div className="container-shell min-h-0 flex-1 overflow-y-auto py-1">
                {siteContent.nav.map((item) => {
                  const isExpanded = expandedMobile === item.label;

                  if (!item.menu) {
                    return (
                      /* ✅ 2. TIGHT ROW */
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="flex items-center justify-between border-b border-black/10 py-3.5"
                      >
                        <span className="font-display text-[1.65rem] leading-none tracking-[-0.055em] text-black">
                          {item.label}
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-black/42" />
                      </Link>
                    );
                  }

                  return (
                    <div key={item.label} className="border-b border-black/10">
                      {/* ✅ 3. TIGHT ACCORDION */}
                      <button
                        onClick={() => toggleMobileSection(item.label)}
                        className="flex w-full items-center justify-between py-3.5 text-left"
                      >
                        <span className="font-display text-[1.65rem] leading-none tracking-[-0.055em] text-black">
                          {item.label}
                        </span>
                        {isExpanded ? (
                          <Minus className="h-3.5 w-3.5 text-black/42" />
                        ) : (
                          <Plus className="h-3.5 w-3.5 text-black/42" />
                        )}
                      </button>

                      {isExpanded && (
                        /* ✅ 4. TIGHT CONTENT */
                        <div className="pb-3">
                          <div className="grid gap-5 pt-1">
                            {item.menu.sections.map((section) => (
                              <div key={section.title}>
                                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-black/34">
                                  {section.title}
                                </p>

                                <div className="mt-2.5 flex flex-col gap-2.5">
                                  {section.links.map((link) => (
                                    <Link
                                      key={link.label}
                                      href={link.href}
                                      onClick={closeMobileMenu}
                                      className="block"
                                    >
                                      <span className="text-[0.92rem] leading-5 text-black/80">
                                        {link.label}
                                      </span>

                                      {link.description && (
                                        <p className="mt-1 max-w-[18rem] text-[0.8rem] leading-5 text-black/44">
                                          {link.description}
                                        </p>
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}

                            <div className="border-t border-black/10 pt-3.5">
                              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-black/34">
                                {item.menu.asideLabel ?? "Overview"}
                              </p>
                              <h3 className="font-display mt-2.5 text-[1.08rem] leading-[0.95] tracking-[-0.045em] text-black">
                                {item.menu.asideTitle}
                              </h3>
                              <p className="mt-1.5 max-w-[18rem] text-[0.82rem] leading-5 text-black/46">
                                {item.menu.asideCopy}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* ✅ 5. FOOTER BAR */}
              <div className="border-t border-black/10 bg-[#f4f4f1]">
                <div className="container-shell flex items-center justify-between py-3">
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-black/34">
                      Blackridge
                    </p>
                    <p className="mt-0.5 text-[0.8rem] text-black/48">
                      Security Systems
                    </p>
                  </div>

                  <Link
                    href="#contact"
                    onClick={closeMobileMenu}
                    className="ui-button ui-button-solid"
                  >
                    <span>Contact</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
