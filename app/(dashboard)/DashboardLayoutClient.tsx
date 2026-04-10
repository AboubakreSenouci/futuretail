"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { useDashboardLayout } from "@/hooks/useDashboardLayout";

export default function DashboardLayoutClient({
  children,
  initialSidebarOpen,
}: {
  children: React.ReactNode;
  initialSidebarOpen: boolean;
}) {
  const {
    isDesktopSidebarOpen,
    isMobileSidebarOpen,
    toggleDesktopSidebar,
    openMobileSidebar,
    closeMobileSidebar,
    mainClassName,
  } = useDashboardLayout({ initialSidebarOpen });

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        isDesktopOpen={isDesktopSidebarOpen}
        isMobileOpen={isMobileSidebarOpen}
        onDesktopToggle={toggleDesktopSidebar}
        onMobileClose={closeMobileSidebar}
      />
      <Topbar
        isSidebarOpen={isDesktopSidebarOpen}
        onMenuClick={openMobileSidebar}
      />
      <main className={mainClassName}>
        <div className="min-w-0">{children}</div>
      </main>
    </div>
  );
}
