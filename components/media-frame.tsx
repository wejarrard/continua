import Image from "next/image";

import type { MediaAsset } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type MediaFrameProps = {
  asset: MediaAsset;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

function PowderStillLife() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,255,0.96),rgba(232,219,235,0.94))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.92),transparent_26%),radial-gradient(circle_at_84%_22%,rgba(154,107,143,0.24),transparent_30%),linear-gradient(140deg,rgba(255,255,255,0.28),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(110deg,rgba(126,84,134,0.08)_0,rgba(126,84,134,0.08)_1px,transparent_1px,transparent_38px)] [background-size:40px_40px]" />
      <div className="absolute left-[18%] top-[15%] h-[50%] w-[34%] rotate-[-12deg] rounded-[2rem] border border-white/85 bg-[linear-gradient(180deg,rgba(169,123,176,0.9),rgba(96,58,109,0.97))] shadow-[0_35px_70px_rgba(48,27,58,0.24)]" />
      <div className="absolute left-[22%] top-[19%] h-[37%] w-[26%] rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(244,233,255,0.24),rgba(255,255,255,0.04))]" />
      <div className="absolute left-[40%] top-[49%] h-[17%] w-[28%] rotate-[8deg] rounded-[999px] bg-[radial-gradient(circle,rgba(255,255,255,0.98)_0,rgba(255,255,255,0.92)_38%,rgba(255,255,255,0)_72%)] blur-[1px]" />
      <div className="absolute left-[55%] top-[54%] h-[19%] w-[27%] rotate-[-8deg] rounded-[999px] bg-[radial-gradient(circle,rgba(154,107,143,0.88)_0,rgba(154,107,143,0.76)_36%,rgba(154,107,143,0)_72%)] blur-[1px]" />
      <div className="absolute left-[60%] top-[38%] h-[10%] w-[10%] rounded-full bg-[rgba(230,203,245,0.56)] blur-xl" />
      <div className="absolute bottom-[16%] right-[12%] h-32 w-32 rounded-full bg-[rgba(109,61,99,0.16)] blur-3xl" />
    </>
  );
}

function ProductBoxStillLife() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,255,0.96),rgba(229,217,234,0.94))]" />
      <div className="absolute left-[18%] top-[18%] h-[58%] w-[42%] rounded-[2.2rem] border border-white/85 bg-[linear-gradient(180deg,rgba(255,251,255,0.98),rgba(231,220,236,0.94))] shadow-[0_38px_74px_rgba(48,27,58,0.18)]" />
      <div className="absolute left-[18%] top-[18%] h-[58%] w-[42%] rounded-[2.2rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.42),rgba(255,255,255,0))]" />
      <div className="absolute left-[25%] top-[29%] h-[16%] w-[28%] rounded-[1.25rem] bg-[linear-gradient(180deg,rgba(192,158,211,0.34),rgba(109,61,99,0.24))]" />
      <div className="absolute left-[25%] top-[49%] h-[1px] w-[21%] bg-[rgba(36,23,20,0.12)]" />
      <div className="absolute left-[25%] top-[55%] h-[1px] w-[18%] bg-[rgba(36,23,20,0.12)]" />
      <div className="absolute left-[55%] top-[40%] h-[34%] w-[13%] rotate-[10deg] rounded-[1.2rem] border border-white/75 bg-[linear-gradient(180deg,rgba(169,123,176,0.88),rgba(96,58,109,0.95))] shadow-[0_18px_40px_rgba(48,27,58,0.22)]" />
      <div className="absolute bottom-[14%] left-[15%] right-[15%] h-16 rounded-full bg-[rgba(48,27,58,0.1)] blur-2xl" />
    </>
  );
}

function SachetMugStillLife() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,251,255,0.96),rgba(232,220,237,0.92))]" />
      <div className="absolute left-[18%] top-[54%] h-[20%] w-[24%] rounded-[999px] border border-[rgba(36,23,20,0.08)] bg-[rgba(253,249,244,0.98)] shadow-[0_22px_48px_rgba(52,29,16,0.14)]" />
      <div className="absolute left-[21%] top-[57%] h-[9%] w-[18%] rounded-[999px] bg-[linear-gradient(180deg,rgba(201,166,219,0.88),rgba(109,61,99,0.88))]" />
      <div className="absolute left-[36%] top-[58%] h-[8%] w-[8%] rounded-full border-[10px] border-[rgba(250,248,243,0.96)]" />
      <div className="absolute left-[22%] top-[43%] h-[10%] w-[2px] rounded-full bg-[rgba(255,255,255,0.95)] blur-[1px]" />
      <div className="absolute left-[28%] top-[39%] h-[14%] w-[2px] rounded-full bg-[rgba(255,255,255,0.95)] blur-[1px]" />
      <div className="absolute left-[34%] top-[42%] h-[11%] w-[2px] rounded-full bg-[rgba(255,255,255,0.95)] blur-[1px]" />
      <div className="absolute right-[18%] top-[25%] h-[40%] w-[22%] rotate-[8deg] rounded-[1.7rem] border border-white/75 bg-[linear-gradient(180deg,rgba(169,123,176,0.88),rgba(96,58,109,0.95))] shadow-[0_28px_56px_rgba(48,27,58,0.18)]" />
      <div className="absolute bottom-[16%] left-[14%] right-[14%] h-16 rounded-full bg-[rgba(48,27,58,0.08)] blur-2xl" />
    </>
  );
}

function LabelPanelStillLife() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,255,0.95),rgba(233,221,237,0.9))]" />
      <div className="absolute left-[18%] top-[16%] h-[68%] w-[52%] rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,251,255,0.98),rgba(231,220,236,0.95))] shadow-[0_36px_72px_rgba(48,27,58,0.18)]" />
      <div className="absolute left-[28%] top-[28%] h-[4%] w-[22%] rounded-full bg-[rgba(169,123,176,0.26)]" />
      <div className="absolute left-[28%] top-[40%] h-[1px] w-[30%] bg-[rgba(36,23,20,0.14)]" />
      <div className="absolute left-[28%] top-[47%] h-[1px] w-[26%] bg-[rgba(36,23,20,0.14)]" />
      <div className="absolute left-[28%] top-[54%] h-[1px] w-[29%] bg-[rgba(36,23,20,0.14)]" />
      <div className="absolute left-[28%] top-[61%] h-[1px] w-[20%] bg-[rgba(36,23,20,0.14)]" />
      <div className="absolute right-[16%] top-[34%] h-[18%] w-[10%] rounded-[1rem] border border-[rgba(36,23,20,0.08)] bg-[linear-gradient(180deg,rgba(246,237,252,0.9),rgba(255,255,255,0.82))]" />
      <div className="absolute bottom-[16%] left-[16%] right-[16%] h-16 rounded-full bg-[rgba(48,27,58,0.08)] blur-2xl" />
    </>
  );
}

function ScienceWaveStillLife() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(154,107,143,0.24),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.72),transparent_24%),linear-gradient(180deg,rgba(247,240,249,0.95),rgba(231,220,236,0.92))]" />
      <div className="absolute left-[12%] top-[30%] h-[40%] w-[76%] rounded-[999px] border border-[rgba(36,23,20,0.08)]" />
      <div className="absolute left-[18%] top-[22%] h-[56%] w-[64%] rounded-[999px] border border-[rgba(154,107,143,0.22)]" />
      <div className="absolute left-[24%] top-[14%] h-[72%] w-[52%] rounded-[999px] border border-[rgba(36,23,20,0.08)]" />
      <div className="absolute left-[26%] top-[44%] h-5 w-5 rounded-full bg-[rgba(109,61,99,0.74)] shadow-[0_0_0_14px_rgba(109,61,99,0.12)]" />
      <div className="absolute left-[49%] top-[34%] h-4 w-4 rounded-full bg-[rgba(36,23,20,0.72)] shadow-[0_0_0_12px_rgba(36,23,20,0.08)]" />
      <div className="absolute left-[64%] top-[54%] h-6 w-6 rounded-full bg-[rgba(188,152,190,0.64)] shadow-[0_0_0_16px_rgba(188,152,190,0.12)]" />
    </>
  );
}

function PortraitStillLife() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,237,247,0.96),rgba(219,205,226,0.94))]" />
      <div className="absolute inset-x-[18%] bottom-[10%] top-[10%] rounded-[2.4rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0.08))] shadow-[0_34px_72px_rgba(30,33,30,0.18)]" />
      <div className="absolute left-[34%] top-[24%] h-[23%] w-[32%] rounded-full bg-[rgba(58,41,38,0.72)]" />
      <div className="absolute left-[28%] top-[43%] h-[34%] w-[44%] rounded-[40%_40%_28%_28%] bg-[rgba(58,41,38,0.9)]" />
      <div className="absolute left-[24%] top-[20%] h-[15%] w-[26%] rounded-[999px] bg-[rgba(239,223,247,0.24)] blur-2xl" />
      <div className="absolute bottom-[12%] left-[18%] right-[18%] h-16 rounded-full bg-[rgba(48,27,58,0.12)] blur-2xl" />
    </>
  );
}

function PlaceholderArt({ variant }: { variant: MediaAsset["variant"] }) {
  switch (variant) {
    case "powder":
      return <PowderStillLife />;
    case "product-box":
      return <ProductBoxStillLife />;
    case "sachet-mug":
      return <SachetMugStillLife />;
    case "label-panel":
      return <LabelPanelStillLife />;
    case "science-wave":
      return <ScienceWaveStillLife />;
    case "portrait":
      return <PortraitStillLife />;
    default:
      return null;
  }
}

export function MediaFrame({
  asset,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: MediaFrameProps) {
  const isPortrait = asset.variant === "portrait";

  return (
    <div
      aria-label={!asset.src ? asset.alt : undefined}
      role={!asset.src ? "img" : undefined}
      className={cn(
        "relative isolate overflow-hidden rounded-[2rem] border border-[color:rgba(109,61,99,0.12)] bg-[rgba(255,249,255,0.82)] shadow-[0_26px_80px_rgba(76,48,74,0.12)]",
        className,
      )}
    >
      {asset.src ? (
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            "object-cover",
            isPortrait && "grayscale contrast-[1.02] saturate-0",
          )}
        />
      ) : (
        <PlaceholderArt variant={asset.variant} />
      )}

      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/40" />
    </div>
  );
}
