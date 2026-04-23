import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLSpanElement>;

export function AnimatedGradientText({ className, ...props }: Props) {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300 bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradient_6s_ease_infinite]",
        className
      )}
      {...props}
    />
  );
}
