import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHouseDamage } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-primary p-3 h-20 ">
      <div className=" font-semibold flex items-center justify-center gap-5 text-white font-mono">
        <FaHouseDamage size={20} />
        All rights reserved - Abhishek
        <FaHouseDamage size={20} />
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
