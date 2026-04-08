"use client";

import { PanelLeft, MessageCirclePlus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NavLink } from "./Navlink";
import Logo from "@/public/images/Logo.svg";
import Image from "next/image";
import { UserProfileDropdown } from "../ui/UserProfileDropDown/UserProfilDropDown";
import Avatar from "@/public/images/avatar.svg";
import { NAV_ITEMS } from "@/constants/NavItem";

export function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-60 bg-white border-r border-border flex flex-col z-30">
      {/* Logo row */}
      <div className="flex items-center justify-between pt-4 px-2">
        <Image src={Logo} alt="Logo" />

        <button className="w-7 h-7 mb-4">
          <PanelLeft
            width={"20px"}
            height={"20px"}
            className="text-muted hover:text-foreground"
          />
        </button>
      </div>

      {/* New Chat */}
      <div className="px-3 pb-2">
        <Button
          variant="primary"
          size="lg"
          className="w-full justify-between"
          leftIcon={<MessageCirclePlus size={20} />}
          rightIcon={
            <div className="flex gap-1 items-center">
              <div className=" bg-[#FFFFFF33] px-1 py-0.5 rounded-[4px]">⌘</div>
              <div className="bg-[#FFFFFF33] px-1.5 py-0.5 rounded-[4px]">
                K
              </div>
            </div>
          }
        >
          New Chat
        </Button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2 flex flex-col gap-1 py-1">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </nav>
      {/* User Profile */}
      <UserProfileDropdown name="Ilyes Boudjelthia" image={Avatar} />
    </aside>
  );
}
