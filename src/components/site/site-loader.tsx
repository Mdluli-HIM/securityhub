"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ArrowUpRight, LockKeyhole } from "lucide-react";

function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function SiteLoader() {
  const root = useRef<HTMLDivElement | null>(null);
  const bgGlow = useRef<HTMLDivElement | null>(null);
  const hydrated = useHydrated();

  const [ready, setReady] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [exiting, setExiting] = useState(false);

  const shouldShow = hydrated && !dismissed;

  useEffect(() => {
    if (!shouldShow) return;

    document.documentElement.dataset.loaderState = "active";
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setReady(true);
    }, 3000);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
      document.documentElement.dataset.loaderState = "done";
    };
  }, [shouldShow]);

  useLayoutEffect(() => {
    if (!shouldShow || !root.current) return;

    gsap.set(".loader-line", {
      scaleX: 0,
      transformOrigin: "left center",
    });

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
    });

    tl.fromTo(
      ".loader-badge",
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.6 },
    )
      .fromTo(
        ".loader-title-line",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 },
        "-=0.3",
      )
      .fromTo(
        ".loader-copy",
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "-=0.55",
      )
      .fromTo(
        ".loader-progress-wrap",
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.5",
      )
      .to(
        ".loader-line",
        {
          scaleX: 1,
          duration: 3,
          ease: "power1.inOut",
        },
        "-=0.4",
      );

    const drift = gsap.to(bgGlow.current, {
      yPercent: -4,
      xPercent: 2,
      scale: 1.03,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    return () => {
      tl.kill();
      drift.kill();
    };
  }, [shouldShow]);

  useLayoutEffect(() => {
    if (!shouldShow || !root.current) return;

    gsap.set(".loader-line", {
      scaleX: 0,
      transformOrigin: "left center",
    });

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
    });

    tl.fromTo(
      ".loader-badge",
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.6 },
    )
      .fromTo(
        ".loader-title-line",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 },
        "-=0.3",
      )
      .fromTo(
        ".loader-copy",
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "-=0.55",
      )
      .fromTo(
        ".loader-progress-wrap",
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.5",
      )
      .to(
        ".loader-line",
        {
          scaleX: 1,
          duration: 3,
          ease: "power1.inOut",
        },
        "-=0.4",
      );

    const drift = gsap.to(bgGlow.current, {
      yPercent: -4,
      xPercent: 2,
      scale: 1.03,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    return () => {
      tl.kill();
      drift.kill();
    };
  }, [shouldShow]);

  useLayoutEffect(() => {
    if (!ready || !root.current) return;

    const button = root.current.querySelector(".loader-enter");
    if (!button) return;

    gsap.fromTo(
      button,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      },
    );
  }, [ready]);

  const handleEnter = () => {
    if (!root.current || exiting) return;

    setExiting(true);

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        document.body.style.overflow = "";
        document.documentElement.dataset.loaderState = "done";
        window.dispatchEvent(new CustomEvent("blackridge:loader-finished"));
        setDismissed(true);
      },
    });

    tl.to(".loader-enter", {
      opacity: 0,
      duration: 0.25,
    })
      .to(
        ".loader-inner",
        {
          opacity: 0,
          y: -10,
          duration: 0.55,
        },
        "-=0.05",
      )
      .to(
        root.current,
        {
          opacity: 0,
          duration: 0.65,
        },
        "-=0.2",
      );
  };

  if (!hydrated || !shouldShow || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      ref={root}
      className="fixed inset-0 z-[200] h-[100dvh] w-screen overflow-hidden bg-[#050608] text-white"
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:52px_52px]" />

      <div
        ref={bgGlow}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(255,255,255,0.05),transparent_0,transparent_24%),radial-gradient(circle_at_50%_100%,rgba(170,22,22,0.1),transparent_0,transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.025),rgba(0,0,0,0.18)_34%,rgba(0,0,0,0.95)_100%)]"
      />

      <div className="loader-inner relative flex h-full items-center justify-center px-4">
        <div className="flex w-full max-w-[760px] flex-col items-center text-center">
          <div className="loader-badge inline-flex items-center gap-2 border border-white/12 bg-white/5 px-3 py-2">
            <LockKeyhole className="h-3.5 w-3.5 text-[#a61f1f]" />
            <span className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-white/72">
              Initializing
            </span>
          </div>

          <div className="mt-8">
            <div className="overflow-hidden">
              <p className="loader-title-line font-display text-[clamp(3rem,12vw,7rem)] leading-[0.88] tracking-[-0.09em] text-white">
                BLACKRIDGE
              </p>
            </div>
            <div className="overflow-hidden">
              <p className="loader-title-line font-display text-[clamp(3rem,12vw,7rem)] leading-[0.88] tracking-[-0.09em] text-white/68">
                SECURITY
              </p>
            </div>
          </div>

          <p className="loader-copy mt-5 max-w-[28rem] text-[0.9rem] leading-6 text-white/44 sm:text-[0.96rem] sm:leading-7">
            Structured protection. Controlled access. Operational readiness.
          </p>

          <div className="loader-progress-wrap mt-10 w-full max-w-[500px]">
            <div className="mb-3 flex items-center justify-between gap-4">
              <span className="text-[0.66rem] uppercase tracking-[0.18em] text-white/30">
                Opening experience
              </span>
              <span className="text-[0.66rem] uppercase tracking-[0.18em] text-white/30">
                Stand by
              </span>
            </div>

            <div className="h-[2px] w-full overflow-hidden bg-white/10">
              <div className="loader-line h-full w-full bg-[#a61f1f]" />
            </div>
          </div>

          {ready ? (
            <button
              type="button"
              onClick={handleEnter}
              className="loader-enter mt-10 inline-flex items-center gap-2 border border-white/14 bg-white/[0.04] px-5 py-3 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-white/88 transition duration-300 hover:border-white/24 hover:bg-white/[0.08] hover:text-white"
            >
              <span>Enter Site</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          ) : null}

          <p className="loader-copy mt-8 text-[0.66rem] uppercase tracking-[0.18em] text-white/24">
            Premium security systems
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
