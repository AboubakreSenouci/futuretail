"use client";

import { BookOpen, Sparkles } from "lucide-react";

export function Topbar() {
  return (
    <header className="fixed top-0 left-[224px] right-0 h-[56px] bg-white border-b border-border flex items-center justify-end px-6 gap-3 z-20">
      {/* Knowledge Base */}
      <button className="flex items-center gap-2 px-3 h-9 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-primary-light hover:border-primary/30 hover:text-primary transition-all">
        <BookOpen size={15} className="text-muted" />
        <span>Knowledge Base</span>
        {/* notification dot */}
        <span className="w-1.5 h-1.5 rounded-full bg-primary ml-0.5" />
      </button>

      {/* Aura Tips */}
      <button className="flex items-center gap-2 px-3 h-9 rounded-xl border border-primary/40 bg-primary-light text-sm font-medium text-primary hover:bg-primary hover:text-white transition-all relative">
        <Sparkles size={15} />
        <span>Aura Tips</span>
        {/* red badge */}
        <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
          1
        </span>
      </button>
    </header>
  );
}
