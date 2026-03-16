import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-5",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-title text-4xl leading-[1.02] sm:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="max-w-3xl text-lg leading-8 text-[color:rgba(41,43,45,0.76)]">
          {body}
        </p>
      ) : null}
    </div>
  );
}
