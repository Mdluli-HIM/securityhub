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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ✅ Resize cleanup (you asked for this)
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

              {/* MOBILE BUTTON */}
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

      {/* ✅ MOBILE MENU (FIXED PROPERLY) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            onClick={closeMobileMenu}
            className="absolute inset-0 bg-black/20"
          />

          <div className="absolute inset-x-0 top-20 h-[calc(100dvh-5rem)] bg-[#f4f4f1]">
            <div className="flex h-full flex-col">
              <div className="container-shell py-4">
                <p className="text-xs uppercase text-black/40">Navigation</p>
              </div>

              <div className="container-shell flex-1 overflow-y-auto">
                {siteContent.nav.map((item) => {
                  const isExpanded = expandedMobile === item.label;

                  if (!item.menu) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="flex justify-between py-4 border-b"
                      >
                        {item.label}
                        <ArrowUpRight />
                      </Link>
                    );
                  }

                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => toggleMobileSection(item.label)}
                        className="flex w-full justify-between py-4"
                      >
                        {item.label}
                        {isExpanded ? <Minus /> : <Plus />}
                      </button>

                      {isExpanded && (
                        <div className="pl-4 pb-4">
                          {item.menu.sections.map((section) => (
                            <div key={section.title}>
                              <p className="text-xs">{section.title}</p>
                              {section.links.map((link) => (
                                <Link
                                  key={link.label}
                                  href={link.href}
                                  onClick={closeMobileMenu}
                                  className="block py-1"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
