"use client";
import React from "react";
import SideBarItem from "./sidbar-item";
import { usePathname } from "next/navigation";
import { BarChart, Compass, Layout, List } from "lucide-react";

function SidebarRoutes() {
  const gustRoutes = [
    { label: "Dashboard", href: "/", icon: Layout },
    { label: "Courses", href: "/courses", icon: Compass },
    { label: "Browse", href: "/search", icon: Layout },
  ];
  const teacherRoutes = [
    { label: "Courses", href: "/teacher/courses", icon: List },
    { label: "Analytics", href: "/teacher/analytics", icon: BarChart },
  ];

  const pathname = usePathname();
  const isTeacher = pathname.includes("/teacher");
  const routes = isTeacher ? teacherRoutes : gustRoutes

  return (
    <div className="pt-6">
      {routes.map((item, index) => {
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
