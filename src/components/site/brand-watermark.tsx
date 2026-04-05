type BrandWatermarkProps = {
  className?: string;
  tone?: "light" | "blue" | "red";
};

export function BrandWatermark({
  className = "",
  tone = "light",
}: BrandWatermarkProps) {
  const tones = {
    light: {
      border: "border-white/8",
      innerBorder: "border-white/6",
      fill: "bg-white/[0.06]",
      text: "text-white/[0.05]",
    },
    blue: {
      border: "border-[#9db6cf]/12",
      innerBorder: "border-[#9db6cf]/10",
      fill: "bg-[#9db6cf]/10",
      text: "text-[#9db6cf]/[0.06]",
    },
    red: {
      border: "border-[#b44a51]/12",
      innerBorder: "border-[#b44a51]/10",
      fill: "bg-[#b44a51]/10",
      text: "text-[#b44a51]/[0.06]",
    },
  };

  const current = tones[tone];

  return (
    <div
      className={`pointer-events-none absolute overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[340px] w-[340px] rotate-[14deg] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]">
          <div className={`absolute inset-0 border ${current.border}`} />
          <div
            className={`absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 border ${current.innerBorder}`}
          />
          <div
            className={`absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 sm:h-8 sm:w-8 ${current.fill}`}
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        <span
          className={`font-display text-[5rem] leading-none tracking-[-0.08em] ${current.text} sm:text-[7rem] lg:text-[10rem]`}
        >
          BLACKRIDGE
        </span>
      </div>
    </div>
  );
}
