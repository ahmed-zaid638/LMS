"use client";
import React from "react";
import SideBarItem from "./sidbar-item";
import { Label } from "@radix-ui/react-label";
import { usePathname } from "next/navigation";
import { BarChart, Compass, Layout, List } from "lucide-react";


import { Archive } from "lucide-react";
function SidebarRoutes() {
  const sidebarLinks = [
    { label: "Dashboard", href: "/", icon: Layout },
    { label: "Courses", href: "/courses", icon: Compass },
    { label: "Browse", href: "/search", icon: Layout },
  ];
  const route = usePathname();
  const isActive = route;

  return (
    <div className="pt-4">
      {sidebarLinks.map((item, index) => {
        return (
          <div key={index} className="flex flex-col">
            <SideBarItem label={item.label} href={item.href} icon={item.icon} />
          </div>
        );
      })}
    </div>
  );
}

export default SidebarRoutes;
