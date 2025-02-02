"use client";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import { FaHouseDamage } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { useBuyCredits } from "@/app/hooks/useBuyCredits";
import { usePathname } from "next/navigation";

const Header = () => {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const { buyCredits, isProcessing } = useBuyCredits(userDetail, setUserDetail);
  const pathname = usePathname();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className=" p-5 shadow-md flex justify-between items-center">
      <Link href="/">
        <div className=" flex gap-2 justify-center items-center">
          <FaHouseDamage size={22} className="text-primary" />
          <h1 className="font-bold text-xl hidden lg:block text-primary  ">
            VisionRoom
          </h1>
        </div>
      </Link>

      {pathname !== "/dashboard" && (
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
      )}

      <div className=" flex gap-5 items-center">
        <div className=" flex gap-2 p-1 items-center px-4 border border-primary rounded-md shadow-md shadow-yellow-200 ">
          <Image
            src={"/star.svg"}
            height={20}
            width={20}
            alt="star logo"
            className=" animate-spin"
          />
          <h2 className=" font-semibold text-yellow-500 ">
            {userDetail?.credits} Credits
          </h2>
        </div>
        <Button onClick={() => buyCredits(50)} disabled={isProcessing}>
          Buy Credits
        </Button>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
