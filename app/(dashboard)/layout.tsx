import { cookies } from "next/headers";
import DashboardLayoutClient from "./DashboardLayoutClient";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const saved = cookieStore.get("futuretail:desktop-sidebar-open");
  const isOpen = saved ? saved.value === "true" : true;

  return (
    <DashboardLayoutClient initialSidebarOpen={isOpen}>
      {children}
    </DashboardLayoutClient>
  );
}
