import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg";
import Link from "next/link";

function Logo() {
  return (
    <Link className="pl-6 block" href={'/'}>
      <Image src={logo} alt={"alt"} />
    </Link>
  );
}

export default Logo;
