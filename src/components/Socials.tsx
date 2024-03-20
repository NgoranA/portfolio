import React from "react";
import Image from "next/image";
import bg from "../../public/bg1.png";
import SocialIcon from "@/components/SocialIcons";

const Socials = () => {
  return (
    <div className="bg-zinc-800 rounded-[30px] p-5 relative group h-fit md:h-auto w-full bg-gradient-to-br from-neutral-800 to-neutral-950">
      <Image
        src={bg}
        fill
        alt="bg_picture"
        priority
        className="rounded=[30px] overflow-clip opacity-10 "
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />

      <div className="flex flex-col h-fit md:h-full gap-5  w-full">
        <SocialIcon />
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-3">
            <p className="text-neutral-400 text-xs">STAY WITH ME</p>
            <p className="text-neutral-50 font-semibold">SOCIAL PROFILES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
