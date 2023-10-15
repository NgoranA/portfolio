import React from "react";
import Image from "next/image";
import bg from "../../public/bg1.png";
import icon2 from "../../public/icon2.png";

const Connect = () => {
  return (
    <div className="bg-zinc-800 rounded-[30px] relative h-auto group w-full bg-gradient-to-br from-neutral-800 flex gap-5 flex-col  to-neutral-950">
      <Image
        src={bg}
        fill
        alt="bg_picture"
        priority
        className="rounded=[30px] overflow-clip opacity-10 "
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <Image
        src={icon2}
        alt="icon_image"
        style={{
          position: "relative",
          height: "auto",
          maxWidth: "100%",
          top: 0,
          left: "30px",
        }}
        className="opacity-50"
      />
      <p className="text-4xl font-bold text-neutral-50 p-5">
        Let&apos;s <br />
        <span className="flex items-center justify-between">
          <span>
            work <span className="text-blue-600">together.</span>
          </span>
          <svg
            className="group-hover:stroke-neutral-50 stroke-neutral-500 stroke-1"
            width="46"
            height="42"
            viewBox="0 0 46 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="group-hover:stroke-neutral-50 stroke-neutral-500 stroke-1"
              d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z"
              fill="#F4F4F4"
              stroke="#F4F4F4"
            />
            <rect
              y="21.6981"
              width="0.999999"
              height="18"
              transform="rotate(-90 0 21.6981)"
              className="group-hover:stroke-neutral-50 stroke-neutral-500 stroke-1"
              fill="#F4F4F4"
            />
            <path
              className="group-hover:stroke-neutral-50 stroke-neutral-500 stroke-1"
              d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314"
              stroke="#F4F4F4"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </p>
    </div>
  );
};

export default Connect;
