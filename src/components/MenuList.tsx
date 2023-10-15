"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuList = (link: { path: string; label: string }) => {
  const pathname = usePathname();
  return (
    <li
      className={`rounded-full ${
        pathname === link.path
          ? "bg-gradient-to-r from-neutral-700 to-neutral-800"
          : ""
      }  px-5 py-2`}
    >
      {" "}
      <Link href={link.path}>{link.label}</Link>
    </li>
  );
};

export default MenuList;
