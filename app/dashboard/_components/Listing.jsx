"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import EmptyState from "./EmptyState";
import Link from "next/link";
import { db } from "@/config/db";
import { AigeneratedImage } from "@/config/schema";
import { eq } from "drizzle-orm";
import RoomDesginCard from "./RoomDesginCard";

const Listing = () => {
  const { user } = useUser();
  const [userRoomList, setUserRoomList] = useState([]);

  useEffect(() => {
    user && GetUserRoomList();
  }, [user]);

  const GetUserRoomList = async () => {
    const result = await db
      .select()
      .from(AigeneratedImage)
      .where(
        eq(AigeneratedImage.userEmail, user?.primaryEmailAddress?.emailAddress)
      );
    setUserRoomList(result);
    console.log(result);
  };

  return (
    <div>
      <div className=" flex justify-between items-center">
        <h2 className=" font-bold text-3xl text-primary font-serif italic">Hello, {user?.fullName}</h2>
        <Link href={"/dashboard/create-new"}>
          <Button> + Redesign Room</Button>
        </Link>
      </div>

      {userRoomList.length == 0 ? (
        <EmptyState />
      ) : (
        <div className=" min-h-[70vh] mt-10">
        <h2 className=" font-semibold font-mono text-xl  mb-2">Ai Redesigned Room Studio</h2>
          <div className=" grid grid-cols-1 mb-5 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {userRoomList.map((room, index) => {
              return <RoomDesginCard key={index} room={room} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Listing;
