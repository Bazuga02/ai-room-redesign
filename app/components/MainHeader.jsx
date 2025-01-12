"use client";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { MdDashboardCustomize } from "react-icons/md";

const MainHeader = () => {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  return (
    <div className=" p-5 shadow-xl flex justify-between items-center   ">
      <div className=" flex gap-2 items-center">
        <Image src={"/logo.svg"} height={40} width={40} alt="logo" />
        <h1 className="font-bold text-xl ">
          AI <span className=" text-pink-500">Ro</span>
          <span className=" text-blue-500 ml-[-2px]">om</span> Redesign
        </h1>
      </div>

      <Link href="/dashboard">
        <Button className=" bg-primary px-8 font-semibold">
          SignIn
        </Button>
      </Link>

    </div>
  );
};

export default MainHeader;
