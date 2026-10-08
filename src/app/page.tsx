import Herosection from "@/components/Herosection";
import Pagemarquee from "@/components/marquee";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      <Pagemarquee />
      <Herosection />
    </div>
  );
}
