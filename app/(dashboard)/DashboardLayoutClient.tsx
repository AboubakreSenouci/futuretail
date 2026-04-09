"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

const COOKIE_KEY = "futuretail:desktop-sidebar-open";

export default function DashboardLayoutClient({
  children,
  initialSidebarOpen,
}: {
  children: React.ReactNode;
  initialSidebarOpen: boolean;
}) {
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] =
    useState(initialSidebarOpen);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleDesktopSidebar = () => {
    setIsDesktopSidebarOpen((prev) => {
      const next = !prev;
      document.cookie = `${COOKIE_KEY}=${next}; path=/; max-age=31536000`;
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        isDesktopOpen={isDesktopSidebarOpen}
        isMobileOpen={isMobileSidebarOpen}
        onDesktopToggle={toggleDesktopSidebar}
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
