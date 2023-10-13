import React from "react";
import { Button } from "./ui/button";
import { NavMenu } from "./NavigationMenu";

const Header = () => {
  return (
    <header className="text-zinc-600 h-20">
      <div className="max-w-7xl h-full container flex items-center justify-between">
        <h1 className="text-4xl text-neutral-50 font-bold">NgoranA</h1>

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
