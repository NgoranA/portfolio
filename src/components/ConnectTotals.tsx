import React from "react";
import Image from "next/image";
import bg from "../../public/bg1.png";
import icon2 from "../../public/icon2.png";
import Connect from "./Connect";

const ConnectTotals = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 space-y-5 sm:space-y-0 sm:gap-5 h-fit  sm:h-auto w-full">
      <div className="text-neutral-50 relative bg-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-5 rounded-[30px] h-full md:h-auto p-5 w-full bg-gradient-to-br from-zinc-800 to-neutral-900">
        <Image
          src={bg}
          fill
          alt="bg_picture"
          priority
          className="rounded=[30px] overflow-clip opacity-10 "
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="rounded-[30px] md:h-full w-full flex gap-5 flex-col items-center py-10 justify-center bg-gradient-to-br from-zinc-700 to-neutral-900">
          <p className="text-3xl font-bold ">03</p>
          <div className="uppercase text-neutral-500 text-center font-semibold text-xs">
            <p>YEARS</p> <p>EXPERIENCE</p>
          </div>
        </div>
        <div className="rounded-[30px] h-full w-full flex gap-5 flex-col items-center py-10 justify-center bg-gradient-to-br from-zinc-700 to-neutral-900">
          <p className="text-3xl font-bold ">+2</p>
          <div className="uppercase text-neutral-500 text-center text-xs font-semibold">
            <p>clients</p> <p>worldwide</p>
          </div>
        </div>
        <div className="rounded-[30px] h-full w-full flex gap-5 flex-col items-center py-10 justify-center bg-gradient-to-br from-zinc-700 to-neutral-900">
          <p className="text-3xl font-bold ">+10</p>
          <div className="uppercase text-neutral-500 text-xs text-center font-semibold">
            <p>Total </p> <p>Projects</p>
          </div>
        </div>
      </div>
      <Connect />
    </section>
  );
};

export default ConnectTotals;
