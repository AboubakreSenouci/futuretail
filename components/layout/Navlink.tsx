"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Typography } from "../ui/Typography/Typography";

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
  const isActive = pathname.startsWith(item.href);
  const hasChildren = !!item.children?.length;
  const [open, setOpen] = useState(isActive);

  return (
    <div>
      <Button
        variant="link"
        size="md"
        isActive={isActive}
        leftIcon={item.icon}
        className="rounded-[8px] w-full flex justify-start gap-2"
        rightIcon={
          !isCollapsed && hasChildren ? (
            <span className="text-muted">
              {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </span>
          ) : undefined
        }
        onClick={
          hasChildren && !isCollapsed
            ? (e) => {
                e.preventDefault();
                setOpen((o) => !o);
              }
            : undefined
        }
        {...(!hasChildren && !isCollapsed ? { as: Link, href: item.href } : {})}
      >
        {!isCollapsed && <Typography variant="regular_14">{item.label}</Typography>}
      </Button>

      {/* Children links */}
      {hasChildren && open && !isCollapsed && (
        <div className="ml-8 mt-1 flex flex-col gap-0.5">
          {item.children!.map((child) => (
            <Button
              key={child.href}
              variant="link"
              size="sm"
              isActive={pathname === child.href}
              as={Link}
              href={child.href}
              className="rounded-[8px]"
            >
              <Typography variant="regular_14">{child.label}</Typography>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}