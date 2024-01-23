import { UserButton } from "@clerk/nextjs";
import React from "react";

function NavbarRoutes() {
  return (
    <div className="block">
      <UserButton />
    </div>
  );
}

export default NavbarRoutes;
