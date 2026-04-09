"use client";

import { Tabs as HeroTabs, Tab } from "@heroui/react";
import { cn } from "@/lib/utils";

// ── Types ────────────────────────────────────────────────────────────────────
export interface TabItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  count?: number;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  activeKey?: string;
  defaultKey?: string;
  onChange?: (key: string) => void;
  className?: string;
}

// ── Component ─────────────────────────────────────────────────────────────────
export function Tabs({
  items,
  activeKey,
  defaultKey,
  onChange,
  className,
}: TabsProps) {
  return (
    <HeroTabs
      aria-label="Tabs"
      variant="light"
      items={items} // ✅ pass items here
      selectedKey={activeKey}
      defaultSelectedKey={defaultKey ?? items[0]?.key}
      onSelectionChange={(key) => onChange?.(key as string)}
      classNames={{
        base: cn("bg-[#F4F3FB] rounded-full px-1 py-1", className),
        tabList: "gap-1 bg-transparent p-0",
        tab: "rounded-full px-3 py-1.5 text-[13px] font-medium text-muted data-[selected=true]:text-primary",
        cursor: "bg-white border border-primary/40 shadow-sm rounded-full",
      }}
    >
      {(item) => (
        <Tab key={item.key} isDisabled={item.disabled}>
          <div className="flex items-center gap-1.5">
            {item.icon && <span>{item.icon}</span>}
            {item.label}
            {item.count !== undefined && (
              <span className="text-[12px] font-semibold">{item.count}</span>
            )}
          </div>
        </Tab>
      )}
    </HeroTabs>
  );
}
