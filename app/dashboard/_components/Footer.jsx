import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-primary p-3  mt-10 ">
      <div className=" font-semibold flex items-center justify-center gap-5 text-white font-mono">
        <Image src={"/logo.svg"} height={40} width={40} alt="logo" />
        All rights reserved - Abhishek
        <Image src={"/logo.svg"} height={40} width={40} alt="logo" />
      </div>
      <Link href={"https://abhirai-portfolio.netlify.app/"} target="_blank">
        <div className=" text-center text-white underline">
          Visit My Portfolio
        </div>
      </Link>
    </div>
  );
};

export default Footer;
