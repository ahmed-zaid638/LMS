"use client";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { LogOut } from "lucide-react";

function NavbarRoutes() {
  const router = useRouter();
  const pathname = usePathname();
  const isTeacher = pathname.includes("/teacher");
  const isPlayer = pathname.includes("/player");

  return (
    <div className="flex items-center gap-3 ">
      <div className="">
        {isTeacher ? <div className=""></div> : <div className=""></div>}

        {isTeacher || isPlayer ? (
          <Link href={"/"}>
            <Button className="" size={"sm"} variant={"ghost"}>
              <LogOut className="mr-3" />
              Exit
            </Button>
          </Link>
        ) : (
          <Link href="/teacher/courses">
            <Button size={"sm"} variant={"ghost"}>
              Teacher mode
            </Button>
          </Link>
        )}
      </div>
      {/* {<UserButton
      afterSignOutUrl="/" />} */}
    </div>
  );
}

export default NavbarRoutes;
