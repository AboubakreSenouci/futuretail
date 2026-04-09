"use client";

import { useState } from "react";
import { PanelLeft, MessageCirclePlus } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { NavLink } from "./Navlink";
import Logo from "@/public/images/logo.png";
import { UserProfileDropdown } from "../ui/UserProfileDropDown/UserProfilDropDown";
import Avatar from "@/public/images/avatar.svg";
import { NAV_ITEMS } from "@/constants/NavItem";

type SidebarProps = {
  isOpen: boolean;
  onToggle: (state: boolean) => void;
};

export function Sidebar({ isOpen = true, onToggle }: SidebarProps) {
  return (
    <aside
      className={`fixed top-0 left-0 z-30 h-screen bg-white border-r border-border flex flex-col transition-all duration-300 ease-in-out ${
        isOpen ? "w-60" : "w-16"
      }`}
    >
      {/* Logo row */}
      <div className="flex items-center justify-between px-2 py-2">
        <div className="flex items-center gap-2 overflow-hidden">
          <Image src={Logo} alt="Logo" width={70} height={70} />
        </div>

        <Button
          onClick={() => onToggle(!isOpen)}
          className="w-8 h-8 flex items-center justify-center rounded-md bg-white"
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          iconOnly
        >
          <PanelLeft size={20} className="text-muted" />
        </Button>
      </div>

      {/* New Chat */}
      <div className="px-3 py-2">
        <Button
          variant="primary"
          size="lg"
          className={`w-full rounded-[14px] ${isOpen ? "justify-between" : "justify-center px-0"}`}
          leftIcon={isOpen && <MessageCirclePlus size={20} />}
          rightIcon={
            isOpen ? (
              <div className="flex gap-1 items-center">
                <div className="bg-[#FFFFFF33] px-1 py-0.5 rounded-[4px]">
                  ⌘
                </div>
                <div className="bg-[#FFFFFF33] px-1.5 py-0.5 rounded-[4px]">
                  K
                </div>
              </div>
            ) : null
          }
          iconOnly={!isOpen}
        >
          {isOpen ? "New Chat" : <MessageCirclePlus size={20} />}
        </Button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2 flex flex-col gap-1 py-1">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.href} item={item} isCollapsed={!isOpen} />
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-2">
        <UserProfileDropdown
          name={isOpen ? "Ilyes Boudjelthia" : ""}
          image={Avatar}
          isCollapsed={!isOpen}
        />
      </div>
    </aside>
  );
}
