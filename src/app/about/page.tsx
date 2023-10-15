import React from "react";
import Image from "next/image";
import bg from "../../../public/bg1.png";

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
        </div>
      </section>
    </main>
  );
}

export default page;
