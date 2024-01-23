import React from "react";
import Sidebar from "./_components/sidebar";
import logo from "./../../public/logo.svg";
import NavBar from "./_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full ">
      <div className="fixed right-0 h-[80px] z-10 inset-y-0 md:w-[calc(100%-208px)] w-full  border-b shadow-sm">
        <NavBar />
      </div>
      <div className="hidden md:flex h-full fixed inset-0 z-50">
        <Sidebar />
      </div>
      <main className="h-full ml-0 md:ml-52">{children}</main>
    </div>
  );
};

export default DashboardLayout;


