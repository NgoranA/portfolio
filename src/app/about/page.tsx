import React from "react";
import Image from "next/image";
import bg from "../../../public/bg1.png";
import profile from "../../../public/profile.jpg";

function page() {
  return (
    <main className="flex min-h-screen flex-col px-3 md:container max-w-7xl py-20 gap-3 md:gap-5">
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <Image
            src={bg}
            fill
            alt="bg_picture"
            priority
            className="rounded=[30px] opacity-10 w-full "
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="h-full md:h-auto w-full rounded-xl p-10 flex items-center bg-stone-700 rounded-br-[34px] relative">
            <Image
              src={profile}
              alt="profile picture"
              className="overflow-hidden rounded-xl"
              style={{ height: "100%", width: "100%" }}
              priority
            />
          </div>
          <div className="h-auto"></div>
        </div>
      </section>
      <section className="grid grid-cols-1 h-64 md:grid-cols-2">
        <div className="relative">
          <Image
            src={bg}
            fill
            alt="bg_picture"
            priority
            className="rounded=[30px] opacity-10 w-full "
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="h-full md:h-auto w-full rounded-tl-[34px] flex items-center bg-stone-700 rounded-br-[34px] relative">
            <Image
              src={profile}
              alt="profile picture"
              className="overflow-hidden rounded-tl-[34px] rounded-br-[34px]"
              style={{ height: "100%", width: "100%" }}
              priority
            />
          </div>
          <div className="h-auto"></div>
        </div>
      </section>
    </main>
  );
}

export default page;
