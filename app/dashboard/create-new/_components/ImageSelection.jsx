"use client";
import Image from "next/image";
import React, { useState } from "react";

const ImageSelection = ({ selectedImage }) => {
  const [file, setfile] = useState();
  const onFileSelected = (event) => {
    setfile(event.target.files[0]);
    selectedImage(event.target.files[0]);
  };

  return (
    <div>
      <label>Select Image of your room</label>
      <div className=" mt-3">
        <label htmlFor="upload-image">
          <div
            className={` p-2 border-2 rounded-xl border-dotted flex justify-center  bg-slate-200 cursor-pointer hover:shadow-lg
            ${file && "p-10 bg-white "}`}
          >
            {!file ? (
              <Image
                src={"/upload-photo.jpg"}
                height={100}
                width={100}
                alt="upload photo"
                className=" rounded-xl m-24"
              />
            ) : (
              <Image
                src={URL.createObjectURL(file)}
                width={200}
                height={200}
                className=" w-full h-full object-cover  "
                alt="User uploaded image"
              />
            )}
          </div>
        </label>

        <input
          type="file"
          accept="image/jpeg,image/jpg"
          id="upload-image"
          style={{ display: "none" }}
          onChange={onFileSelected}
        />
      </div>
    </div>
  );
};

export default ImageSelection;
