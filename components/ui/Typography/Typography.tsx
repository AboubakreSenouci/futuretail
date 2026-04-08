import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva(
  "font-['Open_Sauce_Two'] tracking-normal align-middle",
  {
    variants: {
      variant: {
        regular_14: "font-normal text-[14px] leading-[20px]",
        semibold_24: "font-semibold text-[24px] leading-[28px]",
        medium_14: "font-medium text-[14px] leading-[16px] text-center",
        regular_12: "font-normal text-[12px] leading-[16px]",
        regular_10: "font-normal text-[10px] leading-[12px]",
        medium_12: "font-medium text-[12px] leading-[16px]",
        bold_12: "font-bold text-[12px] leading-[16px]",
        medium_8: "font-medium text-[8px] leading-[12px]",
      },
    },
    defaultVariants: {
      variant: "regular_14",
    },
  },
);

type TypographyVariant = NonNullable<
  VariantProps<typeof typographyVariants>["variant"]
>;

const defaultTags: Record<
  TypographyVariant,
  keyof React.JSX.IntrinsicElements
> = {
  semibold_24: "h2",
  regular_14: "p",
  medium_14: "p",
  regular_12: "p",
  regular_10: "span",
  medium_12: "p",
  bold_12: "p",
  medium_8: "span",
};

export interface TypographyProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: keyof React.JSX.IntrinsicElements;
}

export function Typography({
  as,
  variant,
  className,
  children,
  ...props
}: TypographyProps) {
  const Tag = (as ??
    defaultTags[variant as TypographyVariant] ??
    "p") as React.ElementType;

  return (
    <Tag className={cn(typographyVariants({ variant }), className)} {...props}>
      {children}
    </Tag>
  );
}

export { typographyVariants };
