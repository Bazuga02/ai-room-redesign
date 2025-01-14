import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import Footer from "./dashboard/_components/Footer";
import MainHeader from "./components/MainHeader";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <MainHeader />
      <div className=" h-[80vh] flex flex-col justify-center items-center gap-5 p-2">
        <div className=" flex flex-col items-center justify-center">
          <h1 className=" text-4xl font-bold text-blue-600">
            AI Room and Home{" "}
          </h1>
          <h2 className=" text-4xl font-bold text-pink-600">
            Interior Redesign
          </h2>
        </div>
        <p className=" text-lg font-semibold text-center">
          Transform your home with stunning AI-powered redesigns tailored to
          your unique style.{" "}
        </p>

        <Link href="/dashboard/">
          <Button
            variant="outline"
            className=" shadow-lg px-8 py-4 hover:bg-primary hover:text-white border-primary border-2
           hover:scale-105 transition-all duration-150"
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
            className=" shadow-2xl rounded-3xl"
          />
          <Image src={"/arrow1.jpg"} height={70} width={140} alt="arrows" />
          <Image
            src={"/Professional-Office.png"}
            height={450}
            width={450}
            alt="office image"
            className=" shadow-2xl rounded-3xl"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
