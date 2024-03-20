import React from "react";
import { Button } from "./ui/button";
import { NavMenu } from "./NavigationMenu";
import logo from "../../public/logo1.svg";
import { Syne } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";

const syne = Syne({ weight: ["600"], subsets: ["latin"] });

const Header = () => {
  return (
    <header className="md:container text-zinc-600  h-20  bg-inherit z-50 top-0 sticky">
      <div className="h-full flex  items-center justify-between ">
        <div className=" flex items-center w-full md:w-fit justify-between gap-3">
          <Image src={logo} alt="logo" height={0} width={50} />
          <h1
            className={cn(
              syne.className,
              "text-4xl text-neutral-50  font-bold",
            )}
          >
            ngoran
          </h1>
        </div>
        <NavMenu />
        <Button
          variant={"secondary"}
          className=" hidden md:block  rounded-lg px-7 text-center "
        >
          Let&apos;s Talk
        </Button>
      </div>
    </header>
  );
};

export default Header;
