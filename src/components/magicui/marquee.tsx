import * as React from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
};

export function Marquee({ className, reverse, pauseOnHover = true, children }: MarqueeProps) {
  return (
    <div className={cn("relative flex w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex min-w-max shrink-0 items-center gap-4 py-2 [animation:marquee_35s_linear_infinite]",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-max shrink-0 items-center gap-4 py-2 [animation:marquee_35s_linear_infinite]",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
