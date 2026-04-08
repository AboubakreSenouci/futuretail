"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Button as HeroButton } from "@heroui/react";
import { cn } from "@/lib/utils";

// ── Variants ────────────────────────────────────────────────────────────────
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        // "New Chat" — purple bg, white text
        primary: [
          "bg-gradient-to-r from-[#715DE3] to-[#8A6FE8] text-white",
          "hover:from-[#6D55F5] hover:to-[#927CF8]",
          "rounded-[8px] px-4",
        ],
        // Nav item — transparent, full width, left-aligned
        link: [
          "bg-transparent text-foreground",
          "hover:bg-primary-light hover:text-primary",
          "rounded-[8px] px-3",
          "justify-start w-full",
        ],
        // Filter chip — "Clear Results ×"
        chip: [
          "bg-primary-light text-primary",
          "hover:bg-primary/10",
          "rounded-lg px-3",
          "border border-primary/20",
        ],
      },

      size: {
        sm: "h-8 text-xs px-3",
        md: "h-10 text-sm px-4", // 40px — nav items
        lg: "h-[46px] text-sm px-5", // 46px — New Chat
      },

      isActive: {
        true: "",
        false: "",
      },
    },

    compoundVariants: [
      {
        variant: "link",
        isActive: true,
        className: "bg-primary-light text-primary font-semibold",
      },
      {
        variant: "link",
        isActive: false,
        className: "text-foreground",
      },
    ],

    defaultVariants: {
      variant: "primary",
      size: "md",
      isActive: false,
    },
  },
);

// ── Props ───────────────────────────────────────────────────────────────────
export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isActive?: boolean;
  /** Render as a different element, e.g. Next.js Link */
  as?: React.ElementType;
  href?: string;
}

// ── Component ───────────────────────────────────────────────────────────────
export function Button({
  className,
  variant,
  size,
  isActive,
  leftIcon,
  rightIcon,
  children,
  as: Tag,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, isActive }), className);

  return (
    <HeroButton as={Tag || "button"} href={href} className={classes} {...props}>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children}
        </div>

        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </div>
    </HeroButton>
  );
}
