import React from "react";
import MobileSidebar from "./mobile-sidebar";
import NavbarRoutes from "@/components/navbar-routes";

function NavBar() {
  return (
    <div className="p-4 flex  md:justify-end justify-between items-center  h-full">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
}

export default NavBar;