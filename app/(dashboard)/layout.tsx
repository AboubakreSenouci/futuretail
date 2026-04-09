import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Topbar />

      <main className="ml-60 pt-[65px] min-h-screen">
        <div>{children}</div>
      </main>
    </div>
  );
}
