"use client";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { MdDashboardCustomize } from "react-icons/md";

const Header = () => {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  return (
    <div className=" p-5 shadow-md flex justify-between items-center">
      <Link href="/">
        <div className=" flex gap-2 items-center">
          <Image src={"/logo.svg"} height={40} width={40} alt="logo" />
          <h1 className="font-bold text-xl hidden lg:block  ">
            AI <span className=" text-pink-500">Ro</span>
            <span className=" text-blue-500 ml-[-2px]">om</span> Redesign
          </h1>
        </div>
      </Link>

      <Link href="/dashboard">
        <Button
          variant="outline"
          className=" border-primary border-2 hover:scale-105 transition-all
         hover:bg-primary hover:text-white  font-semibold"
        >
          <MdDashboardCustomize />
          Dashboard
        </Button>
      </Link>

      <div className=" flex gap-5 items-center">
        <div className=" flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full">
          <Image src={"/star.svg"} height={20} width={20} alt="star logo" />
          <h2>{userDetail?.credits}</h2>
        </div>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
