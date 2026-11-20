import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";

export function Logo({
  className,
  imageClassName,
}: {
  className?: string;
  imageClassName?: string;
}) {
  return (
    <Link
      to="/"
      aria-label="Sustain Builds, home"
      className={cn("inline-flex shrink-0 items-center justify-center", className)}
    >
      <img
        src="/sustain-builds-logo.png"
        alt=""
        width={360}
        height={140}
        className={cn("h-12 w-[148px] object-contain", imageClassName)}
      />
    </Link>
  );
}
