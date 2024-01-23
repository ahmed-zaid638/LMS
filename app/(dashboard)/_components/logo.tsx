import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg";

function Logo() {
  return (
    <div className="pl-6">
      <Image src={logo} alt={"alt"} />
    </div>
  );
}

export default Logo;
