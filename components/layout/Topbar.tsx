"use client";

import { Database, Menu, Sparkles } from "lucide-react";
import { Typography } from "../ui/Typography/Typography";
import { Badge } from "@heroui/react";
import { Button } from "../ui/Button";

interface TopbarProps {
  isSidebarOpen: boolean;
  onMenuClick: () => void;
}

export function Topbar({ isSidebarOpen, onMenuClick }: TopbarProps) {
  return (
    <header
      className={`fixed top-0 right-0 left-0 z-20 flex h-[65px] items-center justify-between gap-3 bg-white px-4 py-4 transition-[left] duration-300 sm:px-6 ${
        isSidebarOpen ? "md:left-60" : "md:left-16"
      }`}
    >
      <Button
        iconOnly
        variant="ghost"
        className="h-9 w-9 rounded-md border border-border bg-white md:hidden"
        onClick={onMenuClick}
        aria-label="Open navigation"
      >
        <Menu size={18} className="text-foreground" />
      </Button>

      <div className="ml-auto flex flex-wrap items-center justify-end gap-2 sm:gap-3">
      <Badge.Anchor>
        <Button
          variant="primary"
          className="border border-primary/40 bg-white py-4 text-foreground transition-all hover:border-primary/30 hover:bg-primary-light hover:text-primary"
          size="sm"
        >
          <Database size={15} />
          <Typography variant="medium_14" className="hidden sm:block">
            Knowledge Base
          </Typography>
          <Badge
            color="success"
            className="w-2.5 h-2.5 min-h-0 min-w-0 p-0 rounded-full"
          />
        </Button>
      </Badge.Anchor>

      <Badge.Anchor>
        <Button
          variant="primary"
          className="bg-primary-light text-primary hover:bg-primary hover:text-white border border-primary/40"
        >
          <Sparkles size={15} />
          <Typography variant="medium_14" className="hidden sm:block">
            Aura Tips
          </Typography>
          <Badge color="danger" size="sm">
            6
          </Badge>
        </Button>
      </Badge.Anchor>
      </div>
    </header>
  );
}
