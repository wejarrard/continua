import Image from "next/image";

import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

export function SiteLogo({
  className,
  priority = false,
}: SiteLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Continua Rise + Restore Rituals"
      width={1426}
      height={927}
      priority={priority}
      sizes="(min-width: 640px) 176px, 152px"
      className={cn("h-auto w-[9.5rem] sm:w-[11rem]", className)}
    />
  );
}
