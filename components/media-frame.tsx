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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(240,236,228,0.92))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.9),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(135,150,132,0.16),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.2),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(110deg,rgba(122,132,125,0.08)_0,rgba(122,132,125,0.08)_1px,transparent_1px,transparent_38px)] [background-size:40px_40px]" />
      <div className="absolute left-[20%] top-[16%] h-[48%] w-[34%] rotate-[-12deg] rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(132,149,128,0.82),rgba(104,120,101,0.95))] shadow-[0_35px_70px_rgba(30,33,30,0.18)]" />
      <div className="absolute left-[24%] top-[20%] h-[36%] w-[26%] rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(241,245,238,0.18),rgba(255,255,255,0.02))]" />
      <div className="absolute left-[42%] top-[48%] h-[17%] w-[28%] rotate-[8deg] rounded-[999px] bg-[radial-gradient(circle,rgba(255,255,255,0.98)_0,rgba(255,255,255,0.92)_36%,rgba(255,255,255,0)_72%)] blur-[1px]" />
      <div className="absolute left-[54%] top-[56%] h-[18%] w-[28%] rotate-[-10deg] rounded-[999px] bg-[radial-gradient(circle,rgba(123,147,107,0.9)_0,rgba(123,147,107,0.82)_38%,rgba(123,147,107,0)_72%)] blur-[1px]" />
      <div className="absolute bottom-[18%] right-[12%] h-32 w-32 rounded-full bg-[rgba(132,149,128,0.12)] blur-3xl" />
    </>
  );
}

function ProductBoxStillLife() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(238,233,224,0.92))]" />
      <div className="absolute left-[18%] top-[18%] h-[58%] w-[42%] rounded-[2.2rem] border border-white/85 bg-[linear-gradient(180deg,rgba(251,249,244,0.98),rgba(228,222,211,0.94))] shadow-[0_38px_74px_rgba(30,33,30,0.16)]" />
      <div className="absolute left-[18%] top-[18%] h-[58%] w-[42%] rounded-[2.2rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.36),rgba(255,255,255,0))]" />
      <div className="absolute left-[25%] top-[29%] h-[16%] w-[28%] rounded-[1.25rem] bg-[rgba(133,148,129,0.2)]" />
      <div className="absolute left-[25%] top-[49%] h-[1px] w-[21%] bg-[rgba(30,33,30,0.12)]" />
      <div className="absolute left-[25%] top-[55%] h-[1px] w-[18%] bg-[rgba(30,33,30,0.12)]" />
      <div className="absolute left-[55%] top-[40%] h-[34%] w-[13%] rotate-[10deg] rounded-[1.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(127,145,122,0.8),rgba(95,111,92,0.92))] shadow-[0_18px_40px_rgba(30,33,30,0.18)]" />
      <div className="absolute bottom-[14%] left-[15%] right-[15%] h-16 rounded-full bg-[rgba(30,33,30,0.08)] blur-2xl" />
    </>
  );
}

function SachetMugStillLife() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(252,250,246,0.95),rgba(233,229,222,0.9))]" />
      <div className="absolute left-[18%] top-[54%] h-[20%] w-[24%] rounded-[999px] border border-[rgba(30,33,30,0.08)] bg-[rgba(250,248,243,0.96)] shadow-[0_22px_48px_rgba(30,33,30,0.14)]" />
      <div className="absolute left-[36%] top-[58%] h-[8%] w-[8%] rounded-full border-[10px] border-[rgba(250,248,243,0.96)]" />
      <div className="absolute left-[22%] top-[43%] h-[10%] w-[2px] rounded-full bg-[rgba(255,255,255,0.95)] blur-[1px]" />
      <div className="absolute left-[28%] top-[39%] h-[14%] w-[2px] rounded-full bg-[rgba(255,255,255,0.95)] blur-[1px]" />
      <div className="absolute left-[34%] top-[42%] h-[11%] w-[2px] rounded-full bg-[rgba(255,255,255,0.95)] blur-[1px]" />
      <div className="absolute right-[18%] top-[25%] h-[40%] w-[22%] rotate-[8deg] rounded-[1.7rem] border border-white/70 bg-[linear-gradient(180deg,rgba(128,145,124,0.82),rgba(101,117,97,0.94))] shadow-[0_28px_56px_rgba(30,33,30,0.16)]" />
      <div className="absolute bottom-[16%] left-[14%] right-[14%] h-16 rounded-full bg-[rgba(30,33,30,0.08)] blur-2xl" />
    </>
  );
}

function LabelPanelStillLife() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,248,243,0.95),rgba(236,232,225,0.9))]" />
      <div className="absolute left-[18%] top-[16%] h-[68%] w-[52%] rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(252,250,246,0.98),rgba(232,226,217,0.95))] shadow-[0_36px_72px_rgba(30,33,30,0.16)]" />
      <div className="absolute left-[28%] top-[28%] h-[4%] w-[22%] rounded-full bg-[rgba(132,149,128,0.2)]" />
      <div className="absolute left-[28%] top-[40%] h-[1px] w-[30%] bg-[rgba(30,33,30,0.14)]" />
      <div className="absolute left-[28%] top-[47%] h-[1px] w-[26%] bg-[rgba(30,33,30,0.14)]" />
      <div className="absolute left-[28%] top-[54%] h-[1px] w-[29%] bg-[rgba(30,33,30,0.14)]" />
      <div className="absolute left-[28%] top-[61%] h-[1px] w-[20%] bg-[rgba(30,33,30,0.14)]" />
      <div className="absolute right-[16%] top-[34%] h-[18%] w-[10%] rounded-[1rem] border border-[rgba(30,33,30,0.08)] bg-white/80" />
      <div className="absolute bottom-[16%] left-[16%] right-[16%] h-16 rounded-full bg-[rgba(30,33,30,0.08)] blur-2xl" />
    </>
  );
}

function ScienceWaveStillLife() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(132,149,128,0.22),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.7),transparent_24%),linear-gradient(180deg,rgba(247,244,238,0.95),rgba(234,229,221,0.92))]" />
      <div className="absolute left-[12%] top-[30%] h-[40%] w-[76%] rounded-[999px] border border-[rgba(30,33,30,0.08)]" />
      <div className="absolute left-[18%] top-[22%] h-[56%] w-[64%] rounded-[999px] border border-[rgba(132,149,128,0.18)]" />
      <div className="absolute left-[24%] top-[14%] h-[72%] w-[52%] rounded-[999px] border border-[rgba(30,33,30,0.08)]" />
      <div className="absolute left-[26%] top-[44%] h-5 w-5 rounded-full bg-[rgba(132,149,128,0.7)] shadow-[0_0_0_14px_rgba(132,149,128,0.12)]" />
      <div className="absolute left-[49%] top-[34%] h-4 w-4 rounded-full bg-[rgba(30,33,30,0.72)] shadow-[0_0_0_12px_rgba(30,33,30,0.08)]" />
      <div className="absolute left-[64%] top-[54%] h-6 w-6 rounded-full bg-[rgba(132,149,128,0.56)] shadow-[0_0_0_16px_rgba(132,149,128,0.1)]" />
    </>
  );
}

function PortraitStillLife() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(240,239,235,0.96),rgba(219,219,214,0.94))]" />
      <div className="absolute inset-x-[18%] bottom-[10%] top-[10%] rounded-[2.4rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0.08))] shadow-[0_34px_72px_rgba(30,33,30,0.18)]" />
      <div className="absolute left-[34%] top-[24%] h-[23%] w-[32%] rounded-full bg-[rgba(52,55,56,0.74)]" />
      <div className="absolute left-[28%] top-[43%] h-[34%] w-[44%] rounded-[40%_40%_28%_28%] bg-[rgba(52,55,56,0.88)]" />
      <div className="absolute left-[24%] top-[20%] h-[15%] w-[26%] rounded-[999px] bg-[rgba(255,255,255,0.18)] blur-2xl" />
      <div className="absolute bottom-[12%] left-[18%] right-[18%] h-16 rounded-full bg-[rgba(30,33,30,0.12)] blur-2xl" />
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
        "relative isolate overflow-hidden rounded-[2rem] border border-[color:rgba(30,33,30,0.1)] bg-[rgba(255,255,255,0.6)] shadow-[0_26px_80px_rgba(30,33,30,0.1)]",
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
