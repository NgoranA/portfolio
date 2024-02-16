import Image from "next/image";
import React from "react";
import bg from "../../public/bg1.png";
import icon2 from "../../public/icon2.png";
import {
  EnvelopeClosedIcon,
  MobileIcon,
  Crosshair1Icon,
} from "@radix-ui/react-icons";
import ContactForm from "./ContactForm";
import Socials from "./Socials";
const Contact = () => {
  return (
    <main className="md:grid md:grid-cols-3  space-y-12 md:space-y-0 md:gap-20">
      <div className="md:col-span-1 space-y-5 md:gap-x-5 px-3 md:px-0">
        <p className="uppercase text-neutral-200">Contact Info</p>
        <div className=" flex flex-col space-y-10">
          <div className="flex gap-5 ">
            <div className="p-4 bg-gradient-to-br from-neutral-600 to-neutral-900 rounded-xl ">
              <EnvelopeClosedIcon className="" height={35} width={35} />
            </div>
            <div className="flex flex-col ">
              <p className="uppercase text-neutral-600">My Email</p>
              <p>ngoranaristide@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-5 ">
            <div className="p-4 bg-gradient-to-br from-neutral-600 to-neutral-900 rounded-xl ">
              <MobileIcon className="" height={35} width={35} />
            </div>
            <div className="flex flex-col">
              <p className="uppercase text-neutral-600">Phone Number</p>
              <p>(+237) 675 044 947</p>
            </div>
          </div>
          <div className="flex gap-5 ">
            <div className="p-4 bg-gradient-to-br from-neutral-600 to-neutral-900 rounded-xl ">
              <Crosshair1Icon className="" height={35} width={35} />
            </div>
            <div className="flex flex-col">
              <p className="uppercase text-neutral-600">Location</p>
              <p>Yaounde, Cameroon</p>
            </div>
          </div>
          <p className="uppercase text-neutral-200">Follow Me</p>
          <div className="flex">
            <Socials />
          </div>
        </div>
      </div>
      <div className="px-3 md:px-0 md:col-span-2 ">
        <div className="bg-zinc-800 rounded-[30px] w-full bg-gradient-to-br from-neutral-800 to-neutral-950">
          <div className=" relative h-auto group  flex gap-5 flex-col   ">
            <Image
              src={bg}
              fill
              alt="bg_picture"
              priority
              className="rounded=[30px] overflow-clip opacity-10 "
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            <div className="flex items-start justify-between px-3 md:px-6">
              <p className="text-4xl font-bold text-neutral-50 md:p-5 pt-10">
                Let&apos;s{" "}
                <span>
                  work <span className="text-blue-600">together.</span>
                </span>
              </p>
              <Image
                src={icon2}
                alt="icon_image"
                style={{
                  position: "relative",
                  height: "auto",
                  maxWidth: "100%",
                  top: 0,
                  right: "30px",
                }}
                className="opacity-50"
              />
            </div>
          </div>
          <div className="p-3 md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
