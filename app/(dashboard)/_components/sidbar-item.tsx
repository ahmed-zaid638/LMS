"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

import { LucideIcon } from "lucide-react";

interface SideBarItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
}

function SideBarItem({ label, href, icon: Icon }: SideBarItemProps) {
  const route = usePathname();
  const router = useRouter();
  const isActive = (route == "/" && href == "/") || route == href;

  return (
    <button
      className={cn(`${
        isActive
          ? " text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
          : ""
      }  h-full  w-full flex items-center gap-x-2 pl-6 text-slate-500 text-sm font-[500] relative
       transition-all hover:text-slate-600 hover:bg-slate-300/20`)}
      onClick={() => router.push(href)}
      type="button"
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon className={cn("text-slate-500", isActive && "text-sky-700")} />
        {label}
      </div>
      <div
        className={cn(` absolute opacity-0 w-1 h-full right-0 top-0  bg-sky-500
       ${isActive ? "opacity-1" : ""}
        `)}
      ></div>
    </button>
  );
}

export default SideBarItem;
