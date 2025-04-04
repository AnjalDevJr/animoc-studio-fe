import AdminHeader from "@/components/header/admin-header.component";
import AdminSidebar from "@/components/sidebar/admin-sidebar.component";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const AdminPageLayout = () => {
  return (
    <div className="flex h-screen w-full">
      <SidebarProvider>
        <AdminSidebar />
        <div className="flex flex-1 flex-col">
          <AdminHeader />
          <main className="flex-1 overflow-auto p-6">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default AdminPageLayout;
