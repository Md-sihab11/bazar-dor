import Herosection from "@/components/Herosection";
import Pagemarquee from "@/components/marquee";
import SectionsPage from "@/components/shared/sections";

export default function Home() {
  return (
    <div className=" ">
      <Pagemarquee />
      <Herosection />
      <SectionsPage />

    </div>
  );
}
