import React from "react";
import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";

function Sidebar() {
  return (
    <div className="shadow-r-md border-r py-4 h-full w-52">
      <Logo  />
      <SidebarRoutes />
    </div>
  );
}

export default Sidebar;
