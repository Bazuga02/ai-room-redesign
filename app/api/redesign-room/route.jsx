import cloudinary from "@/config/cloudinary";
import { db } from "@/config/db";
import { AigeneratedImage } from "@/config/schema";
import axios from "axios";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
});
export async function POST(req) {
  // const { user } = useUser();
  const { imageUrl, roomType, designType, additionalRequirement, userEmail } =
    await req.json();

  // convert image to ai image
  try {
    const input = {
      image: imageUrl,
      prompt:
        "A " +
        roomType +
        " with a " +
        designType +
        " style interior " +
        additionalRequirement,
    };

    const output = await replicate.run(
      "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
      { input }
    );

    const base64Image = await ConvertToBase64(output);
    const cloudinaryResponse = await cloudinary.uploader.upload(base64Image, {
      folder: "ai-room-redesign/generated",
    });

    // save all to database
    const dbResult = await db
      .insert(AigeneratedImage)
      .values({
        roomType: roomType,
        designType: designType,
        orgImg: imageUrl,
        aiImg: cloudinaryResponse.secure_url,
        userEmail: userEmail,
      })
      .returning({ id: AigeneratedImage.id });

    return NextResponse.json({ result: cloudinaryResponse.secure_url });
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}

//convert image to base64
async function ConvertToBase64(imageUrl) {
  const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
  const base64ImageRaw = Buffer.from(response.data).toString("base64");
  return "data:image/jpg;base64," + base64ImageRaw;
}
