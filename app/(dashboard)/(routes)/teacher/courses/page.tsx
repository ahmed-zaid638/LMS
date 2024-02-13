import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="">
      <Link href={"/teacher/create"}>
        <Button className="">New Course</Button>
      </Link>
    </div>
  );
}

export default page;
