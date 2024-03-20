import React from "react";
import { Button } from "./ui/button";
import { NavMenu } from "./NavigationMenu";
import logo from "../../public/logo1.svg";
import { Syne } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const syne = Syne({ weight: ["600"], subsets: ["latin"] });

const Header = () => {
  return (
    <header className="md:container text-zinc-600  h-20  bg-inherit z-50 top-0 sticky">
      <div className="h-full flex  items-center justify-between ">
        <Link href={"/"} >
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
        </Link>
        <NavMenu />
        <Button
          variant={"secondary"}
          className=" hidden md:block  rounded-lg px-7 text-center "
          asChild

        >
          <Link href={"/contact"} >
            Let&apos;s Talk
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
