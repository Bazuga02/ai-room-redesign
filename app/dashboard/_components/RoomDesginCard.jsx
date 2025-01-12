import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const RoomDesginCard = ({ room }) => {
  return (
    <div className=" shadow-lg rounded-lg cursor-pointer ">
      <ReactBeforeSliderComponent
        firstImage={{
          imageUrl: room?.aiImg,
        }}
        secondImage={{
          imageUrl: room?.orgImg,
        }}
      />

      <div className=" p-2 font-medium">
        <h2>
          🏚️ Room Type:{" "}
          <span className=" font-semibold text-blue-600">{room.roomType}</span>
        </h2>
        <h2>
          🖌️ Design Type:{" "}
          <span className=" font-semibold text-pink-600">
            {room.designType}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default RoomDesginCard;
