"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      <Topbar />

      <main
        className={`transition-all duration-300 pt-16.25 min-h-screen ${
          isOpen ? "ml-60" : "ml-16"
        }`}
      >
        <div>{children}</div>
      </main>
    </div>
  );
}
