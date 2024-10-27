import React, { useState } from "react";
import Scene from "./components/Scene";
import { FaArrowRightLong } from "react-icons/fa6";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const [click, setclick] = useState(false);
  return (
    <div className="h-[200vh] w-full">
      <nav className=" fixed z-10 py-5 w-full top-0 left-0 flex justify-between px-10">
        <h1 className="font-[clc] text-xl uppercase">Rolex</h1>
        <div className=" flex gap-10 items-center font-[clc]">
          <p>MENU</p>
          <p className="hidden sm:block">COLLECTION</p>
          <p className="hidden sm:block">BRAND</p>
        </div>
      </nav>

      <div className="h-screen w-full sticky top-0 left-0">
        <Scene click={click} />
      </div>

      <div className=" absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center pointer-events-none p-10">
          <div className=" h-full w-full sm:w-1/2 flex flex-col justify-between sm:justify-center gap-10">
            <div>
              <h1 className="gr-txt font-medium text-8xl tracking-tighter mt-10 sm:mt-0 sm:text-left text-center font-[clc]">
                ROLEX
              </h1>
              <p className="font-[pr] text-xs sm:text-sm sm:w-[50%] mt-7 leading-relaxed text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                nesciunt tempora adipisci aliquid eos.
              </p>
            </div>
            <div className=" flex items-center  relative left-1/2 -translate-x-1/2 sm:left-[7.5%] mt-24 gap-3 w-fit">
              <p className="font-[pr] text-sm  font-bold">Shop now</p>
              <FaArrowRightLong className="mt-[-5px]" />
            </div>
          </div>
          <div className="hidden sm:visible h-full w-[13%] sm:flex flex-col justify-center gap-10 ">
            <div className=" mt-[9vw]">
              <div className=" h-fit w-[13vw] flex gap-[5.3rem] font-[clc] text-sm">
                <p>Case size</p>
                <p>38mm</p>
              </div>
              <div className="mt-7 h-fit w-[13vw] flex gap-10 font-[clc] text-sm">
                <p>Case Thickness</p>
                <p>10mm</p>
              </div>
            </div>

            <div className=" flex gap-5 items-center mt-24 h-fit w-fit font-[pr] text-sm font-bold">
              <p>More Details</p>
              <FaArrowRightLong className="mt-[1px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full absolute flex p-10 justify-between">
        <div className="w-1/2 h-full sm:block hidden">
          <h1 className="font-[clc] text-5xl mt-[13vw] uppercase">
            Specifcation
          </h1>
          <div className=" text-lg mt-8 flex flex-col gap-3 font-[pr]">
            <p>Water-resistant</p>
            <p> Durable </p>
            <p> Automatic </p>
            <p> Luxurious </p>
            <p> Chronometer</p>
          </div>
        </div>
        {/* <div className="w-1/2 h-full "></div> */}
        <button
          onClick={() => setclick(!click)}
          className=" px-5 py-3 bg-zinc-300 text-black font-[clc] rounded-xl absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          Interact
        </button>
      </div>
    </div>
  );
};

export default App;
