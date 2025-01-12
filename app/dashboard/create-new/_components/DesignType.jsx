import Image from "next/image";
import React, { useState } from "react";

const DesignType = ( { selectedDesignType } ) => {
  const Designs = [
    {
      name: "Modern",
      image: "/modern.jpg",
      alt: "modern",
    },
    {
      name: "Bohemian",
      image: "/Bohemian.jpeg",
      alt: "Bohemian",
    },
    {
      name: "Minimalist",
      image: "/Minimalist.jpg",
      alt: "Minimalist",
    },
    {
      name: "Rustic",
      image: "/Rustic.jpg",
      alt: "Rustic",
    },
    {
      name: "Industrial",
      image: "/industrial.jpg",
      alt: "Industrial",
    },
    {
      name: "Traditional",
      image: "/Traditional.jpg",
      alt: "Traditional",
    },
  ];

  const [selectedOption, setSelectedOption] = useState();
  return (
    <div className=" mt-4">
      <label className=" text-gray-500">Select Interior Design Type</label>
      <div className=" mt-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Designs.map((design, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedOption(design.name);
              selectedDesignType(design.name);
            }}
          >
            <Image
              src={design.image}
              width={100}
              height={100}
              alt={design.alt}
              className={`h-[80px] rounded-sm hover:scale-105 transition-all duration-150 cursor-pointer ${
                design.name === selectedOption &&
                "border-2 p-1 border-pink-500 bg-pink-200"
              }`}
            />
            <h2 className="  font-semibold">{design.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignType;
