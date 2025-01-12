import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const AiOutputDialog = ({ openDialog, closeDialog, orgImg, aiImg }) => {
  const downloadImage = async () => {
    try {
      const response = await fetch(aiImg); // Fetch the image from the URL
      const blob = await response.blob(); // Convert response to a blob
      const url = URL.createObjectURL(blob); // Create a temporary URL for the blob

      // Create an anchor element to download the image
      const link = document.createElement("a");
      link.href = url;
      link.download = "ai-generated-image.jpg"; // Set the file name
      link.click();

      // Cleanup: Revoke the object URL after download
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  return (
    <AlertDialog open={openDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Result:</AlertDialogTitle>
          <ReactBeforeSliderComponent
            firstImage={{ imageUrl: aiImg }}
            secondImage={{ imageUrl: orgImg }}
          />
          <div className="mt-4 flex justify-end space-x-3">
            <Button onClick={downloadImage} className=" bg-primary px-6 ">
              Download
            </Button>
            <Button
              onClick={() => closeDialog(false)}
              className="bg-red-600 hover:bg-red-900 px-6"
            >
              Close
            </Button>
          </div>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AiOutputDialog;
