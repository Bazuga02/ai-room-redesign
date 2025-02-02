import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RoomType = ({ selectedRoomType }) => {
  return (
    <div>
      <label htmlFor="" className=" text-slate-600">
        Select Room Type
        <span className=" text-red-500 font-bold">*</span>
      </label>
      <Select onValueChange={(value) => selectedRoomType(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Room type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Livingroom">LivingRoom</SelectItem>
          <SelectItem value="Bedroom">Bedroom</SelectItem>
          <SelectItem value="Kitchen">Kitchen</SelectItem>
          <SelectItem value="Office">Office</SelectItem>
          <SelectItem value="Bathroom">Bathroom</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default RoomType;
