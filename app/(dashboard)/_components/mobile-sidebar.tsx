import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import SidebarRoutes from "./sidebar-routes";
import Sidebar from "./sidebar";

function MobileSidebar() {
  return (
    <div className="md:hidden pr-4 hover:opacity-75 transition">
      <Sheet>
        <SheetTrigger className="">
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side="left"  className="p-0 bg-white w-52 border-r-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileSidebar;
