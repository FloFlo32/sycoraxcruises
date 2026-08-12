import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

/**
 * BookButton — opens the Yetti booking widget modal (see the global script
 * mounted in app/layout.tsx). Pass `activityId` for a package-specific booking
 * button, or omit it for a general "book our boat today" CTA. The click is
 * handled by Yetti's own global delegated listener via the data attribute;
 * no onClick wiring needed here.
 */
export function BookButton({
  activityId = "",
  className,
  variant,
  size,
  children,
  ...props
}: {
  activityId?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<"button">, "type"> &
  VariantProps<typeof buttonVariants>) {
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      data-yetti-activity={activityId}
      className={cn(className)}
      {...props}
    >
      {children}
    </Button>
  );
}
