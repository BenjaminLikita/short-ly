import Card from "@/components/card";
import Navbar from "@/components/navbar"
import { geistMono } from "./layout";
import doodle2 from '@/assets/doodle.svg'
import Image from "next/image";




export default function Home() {
  return (
    <div className="h-[100vh]">
      <Navbar />
      <h1 className={`font-medium md:font-semibold text-center text-3xl mt-10 md:mt-0 ${geistMono.className}`}>One short link, infinite possibilities</h1>
      <p className="text-center text-lg text-gray-500/50">Create url links. Track what is and what is not</p>
      <div className="m-auto w-[90%] md:w-[90%] h-[50%] flex flex-col md:flex-row items-center z-50 gap-3">
        <Card />
        <div className="flex-[1]">
          <Image src={doodle2} className="w-full object-contain" alt="doodle-image" />
        </div>
      </div>
      {/* blue -> #0099ff */}
      {/* brown -> #c7ab97 */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-[-10]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,256L30,218.7C60,181,120,107,180,112C240,117,300,203,360,224C420,245,480,203,540,181.3C600,160,660,160,720,170.7C780,181,840,203,900,224C960,245,1020,267,1080,250.7C1140,235,1200,181,1260,160C1320,139,1380,149,1410,154.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
        <div className="bg-[#0099ff] h-[30vh] mt-[-1px]"></div>
      </div>
    </div>
  );
}