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
        primary: [
          "bg-gradient-to-r from-brand-start to-brand-end text-white",
          "hover:from-brand-hover-start hover:to-brand-hover-end",
          "rounded-[8px] px-4",
        ],
        link: [
          "bg-transparent text-foreground",
          "hover:bg-primary-light hover:text-primary",
          "rounded-[8px] px-3",
          "justify-start w-full",
        ],
        chip: [
          "bg-primary-light text-primary",
          "hover:bg-primary/10",
          "rounded-lg px-3",
          "border border-primary/20",
        ],
        ghost: [
          "bg-transparent text-foreground",
          "hover:bg-primary-light hover:text-primary",
          "rounded-[8px]",
        ],
        outline: [
          "bg-transparent border border-border text-foreground",
          "hover:bg-primary-light hover:text-primary hover:border-primary/30",
          "rounded-[8px]",
        ],
      },

      size: {
        sm: "h-8 text-xs px-3",
        md: "h-10 text-sm px-4",
        lg: "h-[46px] text-sm px-5",
        // icon-only sizes — no px, equal w/h
        icon_sm: "h-7 w-7 p-0 text-xs",
        icon_md: "h-9 w-9 p-0 text-sm",
        icon_lg: "h-11 w-11 p-0 text-base",
      },

      isActive: {
        true: "",
        false: "",
      },

      iconOnly: {
        true: "p-0 aspect-square",
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
      iconOnly: false,
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
  iconOnly?: boolean;
  /** Single icon to render when iconOnly=true */
  icon?: React.ReactNode;
  as?: React.ElementType;
  href?: string;
}

// ── Component ───────────────────────────────────────────────────────────────
export function Button({
  className,
  variant,
  size,
  isActive,
  iconOnly,
  icon,
  leftIcon,
  rightIcon,
  children,
  as: Tag,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    buttonVariants({ variant, size, isActive, iconOnly }),
    className,
  );

  // Icon-only mode
  if (iconOnly) {
    return (
      <HeroButton
        as={Tag || "button"}
        href={href}
        className={classes}
        {...props}
      >
        {icon ?? children}
      </HeroButton>
    );
  }

  // Normal mode
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
