"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        isDesktopOpen={isDesktopSidebarOpen}
        isMobileOpen={isMobileSidebarOpen}
        onDesktopToggle={() => setIsDesktopSidebarOpen((open) => !open)}
        onMobileClose={() => setIsMobileSidebarOpen(false)}
      />
      <Topbar
        isSidebarOpen={isDesktopSidebarOpen}
        onMenuClick={() => setIsMobileSidebarOpen(true)}
      />

      <main
        className={`min-h-screen pt-[65px] transition-[margin] duration-300 ${
          isDesktopSidebarOpen ? "md:ml-60" : "md:ml-16"
        }`}
      >
        <div className="min-w-0">{children}</div>
      </main>
    </div>
  );
}
