import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EmptyState = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center mt-20 flex-col gap-5">
      <Image
        src={"/placeholder-img.png"}
        height={250}
        width={250}
        alt="placeholder image"
        className=" rounded-xl"
      />
      <h2 className=" font-medium text-lg text-gray-600">
        Create New AI interior design for your room
      </h2>

      <Link href={"/dashboard/create-new"}>
        <Button className="mt-2">+ Redesign Room</Button>
      </Link>
    </div>
  );
};

export default EmptyState;
