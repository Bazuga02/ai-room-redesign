"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaHouseDamage } from "react-icons/fa";

const MainHeader = () => {

  return (
    <div className=" p-5  flex justify-between items-center shadow-lg   ">
      <div className=" flex gap-2 items-center text-primary">
        <FaHouseDamage  />
        <h1 className=" font-extrabold text-xl  font-sans ">
          VisionRooms{" "}
        </h1>
      </div>

      <Link href="/dashboard">
        <Button className=" bg-primary px-8 font-semibold">SignIn</Button>
      </Link>
    </div>
  );
};

export default MainHeader;
