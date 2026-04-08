"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "../Button";

interface UserProfileDropdownProps {
  name: string;
  image?: string;
  initials?: string;
}

export function UserProfileDropdown({
  name,
  image,
  initials,
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
    <div ref={ref} className="relative px-3 pb-4 pt-2 border-t border-border">
      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-2 px-2 py-2 rounded-xl hover:bg-primary-light/50 cursor-pointer transition-colors group"
      >
        <div className="flex items-center gap-2">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-8 h-8 rounded-full object-cover shrink-0"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary shrink-0">
              {initials || name.slice(0, 2).toUpperCase()}
            </div>
          )}

          <span className="text-sm font-medium text-foreground truncate">
            {name}
          </span>
        </div>

        <ChevronDown
          size={14}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          } text-muted group-hover:text-primary`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute bottom-full mb-2 w-full bg-background border border-border rounded-xl shadow-lg p-1">
          {/* <button className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-primary-light/50">
            Profile
          </button> */}
          <Button variant="link">Profile</Button>
          <button className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-primary-light/50">
            Settings
          </button>
          <button className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-primary-light/50 text-red-500">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
