"use client";

import { Database, Sparkles } from "lucide-react";
import { Typography } from "../ui/Typography/Typography";
import { Badge } from "@heroui/react";
import { Button } from "../ui/Button";

export function Topbar() {
  return (
    <header className="fixed h-[65px] left-60 right-0 bg-white flex items-center justify-end py-4 px-6 gap-3 z-20">
      <Badge.Anchor>
        <Button
          variant="primary"
          className="py-4 border border-border bg-white hover:bg-primary-light hover:border-primary/30 hover:text-primary transition-all text-foreground border border-primary/40"
          size="sm"
        >
          <Database size={15} />
          <Typography variant="medium_14">Knowledge Base</Typography>
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
          <Typography variant="medium_14">Aura Tips</Typography>
          <Badge color="danger" size="sm">
            6
          </Badge>
        </Button>
      </Badge.Anchor>
    </header>
  );
}
