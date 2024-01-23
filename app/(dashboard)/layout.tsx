import React from "react";
import Sidebar from "./_components/sidebar";
import logo from "./../../public/logo.svg";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full fixed inset-0">
        <Sidebar />
      </div>
      <main className="h-full ml-0 md:ml-52">{children}</main>
    </div>
  );
};

export default DashboardLayout;
