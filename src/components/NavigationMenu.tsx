"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

export function NavMenu() {
  const pathname = usePathname();
  const menusItems = [
    {
      url: "/",
      label: "Home"
    },
    {
      url: "/about",
      label: "About"
    },
    // {
    //   url: "/works",
    //   label: "Projects"
    // },
    {
      url: "/contact",
      label: "Contact"
    },
  ]
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {
          menusItems.map((menuItem) => (

            <NavigationMenuItem key={menuItem.url}>
              <Link href={`${menuItem.url}`} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    `${pathname === menuItem.url ? "text-neutral-100" : null}`,
                  )}
                >
                  {menuItem.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))
        }
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
