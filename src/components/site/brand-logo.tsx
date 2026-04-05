import Image from "next/image";

type BrandLogoProps = {
  variant?: "header" | "loader" | "seal" | "watermark";
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  variant = "header",
  className = "",
  priority = false,
}: BrandLogoProps) {
  if (variant === "watermark") {
    return (
      <div
        className={`pointer-events-none absolute overflow-hidden ${className}`}
        aria-hidden="true"
      >
        <Image
          src="/images/dingiswayo-logo.png"
          alt=""
          fill
          priority={priority}
          className="object-contain opacity-[0.055] saturate-[0.9] contrast-[1.05] mix-blend-multiply"
          sizes="40vw"
        />
      </div>
    );
  }

  if (variant === "seal") {
    return (
      <div className={`relative ${className}`}>
        <Image
          src="/images/dingiswayo-logo.png"
          alt="Dingiswayo Security"
          width={120}
          height={120}
          priority={priority}
          className="h-10 w-auto object-contain"
        />
      </div>
    );
  }

  if (variant === "loader") {
    return (
      <div className={`relative ${className}`}>
        <Image
          src="/images/dingiswayo-logo.png"
          alt="Dingiswayo Security"
          width={420}
          height={220}
          priority={priority}
          className="h-auto w-[220px] object-contain sm:w-[280px] lg:w-[320px]"
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/dingiswayo-logo.png"
        alt="Dingiswayo Security"
        width={340}
        height={140}
        priority={priority}
        className="h-auto w-[170px] object-contain sm:w-[190px] lg:w-[220px]"
      />
    </div>
  );
}
