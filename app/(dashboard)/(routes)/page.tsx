import { UserButton } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div className=" md:hidden">
      <UserButton />
    </div>
  );
}

export default page;
