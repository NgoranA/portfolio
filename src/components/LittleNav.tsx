import React from "react";
import MenuList from "./MenuList";

const LittleNav = () => {
  const menu = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/works",
      label: "Works",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];
  return (
    <div className="flex items-center justify-center px-1">
      <nav className="rounded-full px-2 py-2 overflow-hidden backdrop-blur-lg bg-neutral-700/30 md:hidden fixed bottom-5  w-fit">
        <ul className=" text-neutral-50 flex space-x-2 justify-between items-center">
          {menu.map((link) => {
            return (
              <MenuList label={link.label} path={link.path} key={link.path} />
            );
          })}
          {/* <li className="rounded-full   px-5 py-2"> Home</li> */}
          {/* <li className="rounded-full  px-5 py-2"> */}
          {/*   {" "} */}
          {/*   About */}
          {/* </li> */}
          {/* <li className="rounded-full bg-gradient-to-r from-neutral-700 to-neutral-800 px-5 py-2"> */}
          {/*   {" "} */}
          {/*   Works */}
          {/* </li> */}
          {/* <li className="rounded-full bg-gradient-to-r from-neutral-700 to-neutral-800 px-5 py-2"> */}
          {/*   {" "} */}
          {/*   Contact */}
          {/* </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default LittleNav;
