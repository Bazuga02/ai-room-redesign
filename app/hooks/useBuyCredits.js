import { useState } from "react";
import { toast } from "react-toastify";

export const useBuyCredits = (userDetail, setUserDetail) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const buyCredits = async (amount) => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const { order } = await response.json();

      const options = {
        key: process.env.NEXT_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "AI Room Redesign",
        description: "Purchase Credits",
        order_id: order.id,
        handler: async function (response) {
          toast.success("Payment successful!");

          const creditResponse = await fetch("/api/add-credits", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ credits: 10, email: userDetail?.email }),
          });

          if (creditResponse.ok) {
            setUserDetail((prevDetail) => ({
              ...prevDetail,
              credits: prevDetail.credits + 10,
            }));
          } else {
            console.error("Failed to add credits");
          }
        },
        prefill: {
          email: userDetail?.email,
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error during payment process:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return { buyCredits, isProcessing };
};
