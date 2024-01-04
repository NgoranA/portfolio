import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import React from "react";

function SocialIcons() {
  return (
    <div className="h-fit md:h-full content-center gap-3 grid grid-cols-3 w-full text-neutral-50">
      <div className="flex items-center justify-center">
        <div className="rounded-full flex items-center justify-center h-14 w-14 p-4 bg-neutral-800">
          <LinkedInLogoIcon className="h-15 w-15" height={50} width={50} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="rounded-full flex items-center justify-center h-14 w-14 p-4 bg-neutral-800">
          <TwitterLogoIcon className="h-15 w-15" height={50} width={50} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="rounded-full flex items-center justify-center h-14 w-14 p-4 bg-neutral-800">
          <GitHubLogoIcon className="h-15 w-15" height={50} width={50} />
        </div>
      </div>
    </div>
  );
}

export default SocialIcons;
