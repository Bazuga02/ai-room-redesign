"use client";
import React, { useContext, useState } from "react";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import AdditionalReq from "./_components/AdditionalReq";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import CustomLoading from "./_components/CustomLoading";
import AiOutputDialog from "../_components/AiOutputDialog";
import { toast } from "react-toastify";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { eq } from "drizzle-orm";

const CreateNew = () => {
  const { user } = useUser();
  const [formdata, setFormdata] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [aiOutputImg, setAiOutputImg] = useState();
  const [openOutputDialog, setOpenOutputDialog] = useState(false);
  const [orgImg, setOrgImg] = useState();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  const onHandleInputChange = (value, fieldName) => {
    setFormdata((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const { data } = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setOrgImg(data.url);
      return data.url;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const GenerateAiImage = async () => {
    try {
      setIsLoading(true);

      // Check credits first
      if (!userDetail?.credits || userDetail.credits <= 0) {
        toast.error(
          "Insufficient credits. Please recharge to generate images."
        );
        return;
      }

      if (!formdata.image) {
        throw new Error("Please select an image");
      }

      const imageUrl = await uploadImageToCloudinary(formdata.image);

      const { data } = await axios.post("/api/redesign-room", {
        imageUrl: imageUrl,
        roomType: formdata?.roomType,
        designType: formdata?.designType,
        additionalRequirement: formdata?.additionalRequirement,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      });
      await updateUserCredits();
      setAiOutputImg(data.result);
      setOpenOutputDialog(true);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const updateUserCredits = async () => {
    const result = await db
      .update(Users)
      .set({
        credits: userDetail?.credits - 1,
      })
      .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress))
      .returning({ id: Users.id });

    if (result) {
      setUserDetail((prev) => ({
        ...prev,
        credits: userDetail?.credits - 1,
      }));
      return result[0].id;
    }
  };

  return (
    <div>
      <h2 className="font-bold text-4xl text-pink-500 text-center">
        Experience the Magic of{" "}
        <span className="text-blue-500">AI ReModelling</span>
      </h2>
      <p className="text-center text-gray-600 mt-5 font-semibold">
        Transform any room with a click. Select a space, choose a style, and
        watch as AI instantly reimagines your environment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <ImageSelection
          selectedImage={(value) => onHandleInputChange(value, "image")}
        />
        <div>
          <RoomType
            selectedRoomType={(value) => onHandleInputChange(value, "roomType")}
          />

          <DesignType
            selectedDesignType={(value) =>
              onHandleInputChange(value, "designType")
            }
          />

          <AdditionalReq
            additionalrequirementInput={(value) =>
              onHandleInputChange(value, "additionalRequirement")
            }
          />

          <Button
            onClick={GenerateAiImage}
            disabled={isLoading}
            className="w-full mt-5 bg-pink-500 hover:bg-pink-700 hover:scale-105 transition-all duration-150"
          >
            Generate
          </Button>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Note: </span>1 Credit will be used
            to generate image
          </p>
        </div>
      </div>
      <CustomLoading loading={isLoading} />
      <AiOutputDialog
        openDialog={openOutputDialog}
        closeDialog={() => setOpenOutputDialog(false)}
        orgImg={orgImg}
        aiImg={aiOutputImg}
      />
    </div>
  );
};

export default CreateNew;
