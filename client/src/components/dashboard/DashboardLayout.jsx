import { Outlet } from "react-router-dom";

import SidebarMenu from "./SidebarMenu";

function DashboardLayout() {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <SidebarMenu />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
