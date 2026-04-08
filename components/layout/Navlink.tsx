"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  children?: { label: string; href: string }[];
}

export function NavLink({ item }: { item: NavItem }) {
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
        className="rounded-[8px]"
        rightIcon={
          hasChildren ? (
            <span className="text-muted">
              {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </span>
          ) : undefined
        }
        onClick={
          hasChildren
            ? (e) => {
                e.preventDefault();
                setOpen((o) => !o);
              }
            : undefined
        }
        {...(!hasChildren ? { as: Link, href: item.href } : {})}
      >
        {item.label}
      </Button>

      {hasChildren && open && (
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
              {child.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
