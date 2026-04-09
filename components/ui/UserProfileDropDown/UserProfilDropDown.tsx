"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "../Button";
import Image from "next/image";
import { Typography } from "../Typography/Typography";

interface UserProfileDropdownProps {
  name: string;
  image?: string;
  initials?: string;
  isCollapsed?: boolean;
}

export function UserProfileDropdown({
  name,
  image,
  initials,
  isCollapsed = false,
}: UserProfileDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={`relative ${!isCollapsed && "p-2"}`}>
      {/* Trigger */}
      <div
        onClick={() => !isCollapsed && setOpen(!open)}
        className={`flex items-center justify-between gap-2 p-2 rounded-xl hover:bg-primary-light/50 cursor-pointer transition-colors group ${
          isCollapsed ? "justify-center " : ""
        }`}
        title={isCollapsed ? name : undefined}
      >
        <div className="flex items-center gap-2">
          {image ? (
            <Image
              src={image}
              alt={name}
              className="w-8 h-8 rounded-full object-cover shrink-0"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary shrink-0">
              {initials || name.slice(0, 2).toUpperCase()}
            </div>
          )}

          {!isCollapsed && (
            <Typography variant="regular_12" className="text-foreground">
              {name}
            </Typography>
          )}
        </div>

        {!isCollapsed && (
          <ChevronDown
            size={14}
            className={`transition-transform ${open ? "rotate-180" : ""} text-muted group-hover:text-primary`}
          />
        )}
      </div>

      {/* Dropdown */}
      {!isCollapsed && open && (
        <div className="absolute bottom-full mb-2 w-full bg-white border border-border rounded-xl shadow-lg p-1">
          <Button variant="link" className="w-full text-left px-3 py-2 text-sm">
            Profile
          </Button>
          <Button variant="link" className="w-full text-left px-3 py-2 text-sm">
            Settings
          </Button>
          <Button
            variant="link"
            className="w-full text-left px-3 py-2 text-sm text-danger hover:text-danger"
          >
            Logout
          </Button>
        </div>
      )}
    </div>
  );
}
