import React from "react";
import Image from "next/image";
import bg from "../../../public/bg1.png";
import profile from "../../../public/profile.jpg";
import SocialIcons from "@/components/SocialIcons";
import { Button } from "@/components/ui/button";
import AboutMeContent from "@/components/AboutMeContent";

function page() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row px-3 md:container max-w-7xl py-20 gap-3 md:gap-14">
      <section className="w-full md:w-4/12 px-4  sm:px-6 py-12 sm:py-6 flex flex-col  gap-3 sm:gap-5 rounded-[30px] h-fit relative bg-gradient-to-br from-neutral-900 to-neutral-950 ">
        <div className="h-full md:h-auto w-full rounded-3xl flex items-center relative">
          <Image
            src={profile}
            alt="profile picture"
            className="overflow-hidden rounded-3xl"
            style={{ height: "100%", width: "100%" }}
            priority
          />
        </div>
        <div className="flex flex-col gap-5 justify-between h-full text-center">
          <div className="flex flex-col gap-3 justify-center h-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-200">
              Ngoran Aristide F.
            </h1>
            <p className="text-neutral-600 text-lg">@AriseAristide</p>
          </div>
          <div className="">
            <SocialIcons />
          </div>
          <Button className="py-6 hover:bg-neutral-100 rounded-3xl cursor-pointer hover:text-neutral-800">
            Contact Me
          </Button>
        </div>
      </section>
      <AboutMeContent />
    </main>
  );
}

export default page;
