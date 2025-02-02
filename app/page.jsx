import { Button } from "@/components/ui/button";
import Image from "next/image";
import Footer from "./dashboard/_components/Footer";
import MainHeader from "./components/MainHeader";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <MainHeader />
      <div className=" h-[80vh] flex flex-col justify-center items-center gap-5 p-2">
        <div className=" flex flex-col items-center justify-center">
          <h1 className=" text-5xl font-sans italic font-bold text-wrap ">
            Transform your home with stunning{" "}
            <span className=" text-primary">AI-powered</span> redesigns
          </h1>
        </div>
        <p className=" text-lg text-gray-500 text-center">
          Experience the future of interior design. Upload a photo of your room
          and get personalized, stunning redesigns tailored to your unique style
          in seconds.
        </p>

        <Link href="/dashboard/">
          <Button
            variant="outline"
            className=" shadow-lg px-8 py-4 hover:bg-primary hover:text-white border-primary border-2
           hover:scale-105 animate-bounce duration-600 "
          >
            Get Started
          </Button>
        </Link>

        <div className=" flex w-[100px]  lg:w-full md:w-full items-center justify-center gap-8 ">
          <Image
            src={"/lib.jpg"}
            height={450}
            width={450}
            alt="bad room image"
            className=" shadow-md shadow-primary rounded-3xl border border-primary"
          />
          <FaArrowRight size={80} className=" text-primary" />
          <Image
            src={"/Professional-Office.png"}
            height={450}
            width={450}
            alt="office image"
            className=" shadow-md shadow-primary rounded-3xl border border-primary"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
