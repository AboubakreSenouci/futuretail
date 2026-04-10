"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Typography } from "../ui/Typography/Typography";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  children?: { label: string; href: string }[];
}

interface NavLinkProps {
  item: NavItem;
  isCollapsed?: boolean;
}

export function NavLink({ item, isCollapsed = false }: NavLinkProps) {
  const pathname = usePathname();
  const hasChildren = !!item.children?.length;
  const hasActiveChild = !!item.children?.some((child) => pathname === child.href);
  const isActive = hasChildren ? false : pathname.startsWith(item.href);
  const [open, setOpen] = useState(hasActiveChild);

  return (
    <div>
      {hasChildren && !isCollapsed ? (
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={cn(
            "flex h-10 w-full items-center gap-2 rounded-[8px] px-3 text-foreground transition-colors hover:bg-primary-light hover:text-primary",
          )}
          aria-expanded={open}
          aria-label={open ? `Collapse ${item.label}` : `Expand ${item.label}`}
        >
          <span className="shrink-0">{item.icon}</span>
          <Typography variant="regular_14">{item.label}</Typography>
          <span className="ml-auto shrink-0 text-muted">
            {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </span>
        </button>
      ) : hasChildren ? (
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-full items-center justify-center rounded-[8px] text-foreground transition-colors hover:bg-primary-light hover:text-primary"
          aria-expanded={open}
          aria-label={open ? `Collapse ${item.label}` : `Expand ${item.label}`}
        >
          <span className="shrink-0">{item.icon}</span>
        </button>
      ) : (
        <Link
          href={item.href}
          className={cn(
            "flex h-10 items-center rounded-[8px] text-foreground transition-colors hover:bg-primary-light hover:text-primary",
            isCollapsed ? "justify-center px-0" : "gap-2 px-3",
            isActive && "bg-primary-light font-semibold text-primary",
          )}
        >
          <span className="shrink-0">{item.icon}</span>
          {!isCollapsed && (
            <Typography variant="regular_14">{item.label}</Typography>
          )}
        </Link>
      )}

      {hasChildren && open && !isCollapsed && (
        <div className="ml-8 mt-1 flex flex-col gap-0.5">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                "flex h-8 items-center rounded-[8px] px-3 text-foreground transition-colors hover:bg-primary-light hover:text-primary",
                pathname === child.href &&
                  "bg-primary-light font-semibold text-primary",
              )}
            >
              <Typography variant="regular_14">{child.label}</Typography>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
