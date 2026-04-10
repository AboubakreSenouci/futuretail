import { useState } from "react";

const COOKIE_KEY = "futuretail:desktop-sidebar-open";

interface UseDashboardLayoutOptions {
  initialSidebarOpen?: boolean;
}

interface UseDashboardLayoutReturn {
  isDesktopSidebarOpen: boolean;
  isMobileSidebarOpen: boolean;
  toggleDesktopSidebar: () => void;
  openMobileSidebar: () => void;
  closeMobileSidebar: () => void;
  mainClassName: string;
}

export function useDashboardLayout({
  initialSidebarOpen = false,
}: UseDashboardLayoutOptions = {}): UseDashboardLayoutReturn {
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

  const openMobileSidebar = () => setIsMobileSidebarOpen(true);
  const closeMobileSidebar = () => setIsMobileSidebarOpen(false);

  const mainClassName = `min-h-screen pt-[65px] transition-[margin] duration-300 ${
    isDesktopSidebarOpen ? "md:ml-60" : "md:ml-16"
  }`;

  return {
    isDesktopSidebarOpen,
    isMobileSidebarOpen,
    toggleDesktopSidebar,
    openMobileSidebar,
    closeMobileSidebar,
    mainClassName,
  };
}
