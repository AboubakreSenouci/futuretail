"use client";

import { MessageCirclePlus, PanelLeft, X } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { NavLink } from "./Navlink";
import Logo from "@/public/images/logo.png";
import { UserProfileDropdown } from "../ui/UserProfileDropDown/UserProfilDropDown";
import Avatar from "@/public/images/avatar.svg";
import { NAV_ITEMS } from "@/constants/NavItem";

type SidebarProps = {
  isDesktopOpen: boolean;
  isMobileOpen: boolean;
  onDesktopToggle: () => void;
  onMobileClose: () => void;
};

export function Sidebar({
  isDesktopOpen = true,
  isMobileOpen,
  onDesktopToggle,
  onMobileClose,
}: SidebarProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-foreground/20 transition-opacity duration-300 md:hidden ${
          isMobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onMobileClose}
      />

      <aside
        className={`fixed top-0 left-0 z-40 flex h-screen max-w-[calc(100vw-1rem)] flex-col border-r border-border bg-white transition-all duration-300 ease-in-out md:z-30 ${
          isDesktopOpen ? "md:w-60" : "md:w-16"
        } ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } w-72 md:translate-x-0`}
      >
        <div className="flex items-center justify-between px-2 py-2">
          <div className="flex items-center gap-2 overflow-hidden">
            <Image src={Logo} alt="Logo" width={70} height={70} />
          </div>

          <Button
            onClick={onDesktopToggle}
            className="hidden h-8 w-8 items-center justify-center rounded-md bg-white md:inline-flex"
            aria-label={
              isDesktopOpen ? "Collapse sidebar" : "Expand sidebar"
            }
            iconOnly
          >
            <PanelLeft size={20} className="text-muted" />
          </Button>

          <Button
            onClick={onMobileClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white md:hidden"
            aria-label="Close navigation"
            iconOnly
          >
            <X size={18} className="text-muted" />
          </Button>
        </div>

        <div className="px-3 py-2">
          <Button
            variant="primary"
            size="lg"
            className={`w-full rounded-[14px] ${
              isDesktopOpen
                ? "justify-between md:justify-between"
                : "md:justify-center md:px-0"
            }`}
            leftIcon={
              (isDesktopOpen || isMobileOpen) && <MessageCirclePlus size={20} />
            }
            rightIcon={
              isDesktopOpen ? (
                <div className="hidden items-center gap-1 md:flex">
                  <div className="bg-[color:var(--white-translucent)] px-1 py-0.5 rounded-[4px]">
                    ⌘
                  </div>
                  <div className="bg-[color:var(--white-translucent)] px-1.5 py-0.5 rounded-[4px]">
                    K
                  </div>
                </div>
              ) : null
            }
            iconOnly={!isDesktopOpen && !isMobileOpen}
          >
            {isDesktopOpen || isMobileOpen ? "New Chat" : <MessageCirclePlus size={20} />}
          </Button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-2 py-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              isCollapsed={!isDesktopOpen && !isMobileOpen}
            />
          ))}
        </nav>

        <div className="p-2">
          <UserProfileDropdown
            name={isDesktopOpen || isMobileOpen ? "Ilyes Boudjelthia" : ""}
            image={Avatar}
            isCollapsed={!isDesktopOpen && !isMobileOpen}
          />
        </div>
      </aside>
    </>
  );
}
