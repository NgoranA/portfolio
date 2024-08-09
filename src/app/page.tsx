import Image from "next/image";
import profile from "../../public/profile1.jpg";
import bg from "../../public/bg1.png";
import Link from "next/link";
import showcase from "../../public/works.png";
import signature from "../../public/signature.png";
import { StarIcon } from "@radix-ui/react-icons";
import jsnad from "../../public/jsnad.png";
import ConnectTotals from "@/components/ConnectTotals";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-3 md:container max-w-7xl py-10 md:py-20 gap-3 md:gap-5">
      <section className="grid grid-cols-1 h-fit lg:grid-cols-2 gap-5">
        <Link href={""} className="">
          <article className=" w-full px-4 group  sm:px-10 py-12 grid grid-cols-1  sm:grid-cols-2  gap-3 sm:gap-5 rounded-[30px] h-auto relative bg-gradient-to-br from-neutral-800 to-neutral-950 ">
            <Image
              src={bg}
              fill
              alt="bg_picture"
              priority
              className="rounded=[30px] opacity-10 w-full "
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            <div className="h-full md:h-auto w-full rounded-tl-[34px] flex items-center bg-stone-700 rounded-br-[34px] relative">
              <Image
                src={profile}
                alt="profile picture"
                className="overflow-hidden rounded-tl-[34px] rounded-br-[34px]"
                style={{ height: "100%", width: "100%" }}
                priority
              />
            </div>
            <div className="flex flex-col gap-3 justify-between h-full">
              <div className="flex flex-col gap-5 justify-center h-full">
                <p className="text-neutral-400 text-sm">
                  A FULLSTACK DEVELOPER
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-200">
                  Ngoran Aristide F.
                </h1>
                <p className="text-neutral-400 text-sm">
                  I am a Fullstack Developer based in Cameroon
                </p>
              </div>
            </div>
          </article>
        </Link>
        <article className="flex flex-col gap-5 w-full h-auto">
          <div className="h-16 w-full relative rounded-[30px] px-7 flex items-center text-neutral-50 py-3 bg-neutral-900">
            <div className="uppercase overflow-x-hidden relative h-full w-full max-w-full flex items-center ">
              <div className="absolute whitespace-nowrap animate-marquee will-change-transform text-neutral-500 text-sm flex gap-5">
                <span className="flex items-center gap-5">
                  {" "}
                  <StarIcon className="" /> latest work and{" "}
                  <span className="text-neutral-200"> featured</span>
                </span>
                <span className="flex items-center gap-5">
                  {" "}
                  <StarIcon className="" /> latest work and{" "}
                  <span className="text-neutral-200"> featured</span>
                </span>
                <span className="flex items-center gap-5">
                  {" "}
                  <StarIcon className="" /> latest work and{" "}
                  <span className="text-neutral-200"> featured</span>
                </span>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 h-full w-full grid-cols-1">
            <Link href={"/about"} className="h-full">
              <div className="bg-zinc-800 rounded-[30px]   h-full w-full relative group p-5 bg-gradient-to-br from-neutral-800 to-neutral-950">
                <Image
                  src={bg}
                  fill
                  alt="bg_picture"
                  priority
                  className="rounded=[30px] overflow-clip opacity-10 "
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="flex flex-col h-full gap-5  w-full">
                  <div className="h-full">
                    <Image
                      src={signature}
                      alt="signature_icon"
                      className=""
                      style={{ position: "relative", height: "100%" }}
                      sizes="100vw"
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col gap-3">
                      <p className="text-neutral-400 text-xs">MORE ABOUT ME</p>
                      <p className="text-neutral-50 font-semibold">
                        CREDENTIALS
                      </p>
                    </div>
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
                  </div>
                </div>
              </div>
            </Link>
            <Link href={"/works"}>
              <div className="bg-zinc-800 p-5 rounded-[30px] group h-full w-full relative bg-gradient-to-br from-neutral-800 to-neutral-950">
                <Image
                  src={bg}
                  fill
                  alt="bg_picture"
                  priority
                  className="rounded=[30px] opacity-10 "
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="flex flex-col h-full gap-5 items-center  w-full">
                  <div className="h-full">
                    <Image
                      src={showcase}
                      alt="showcase_icon"
                      className=""
                      style={{ height: "100%" }}
                      sizes="90vw"
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col gap-3">
                      <p className="text-neutral-400 text-xs">SHOWCASE</p>
                      <p className="text-neutral-50 font-semibold">PROJECTS</p>
                    </div>
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
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </article>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-5 md:space-y-0 md:gap-5 h-fit md:h-auto md:p-3 w-full">
        <div className="bg-zinc-800 rounded-[30px] h-fit md:h-auto w-full relative group bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
          <Image
            src={bg}
            fill
            alt="bg_picture"
            priority
            className="rounded=[30px] overflow-clip opacity-10 "
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col h-full gap-5  w-full">
            <div className="h-auto flex items-center justify-center">
              <Image
                src={jsnad}
                alt="showcase_icon"
                height={150}
                width={150}
                sizes="90vw"
              />
            </div>
            <div className="flex justify-between h-auto w-full">
              <div className="flex flex-col gap-3">
                <p className="text-neutral-400 text-xs">PRIDE</p>
                <p className="text-neutral-50 font-semibold">ACHIEVEMENTS</p>
              </div>
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
            </div>
          </div>
        </div>
        <div className="bg-zinc-800 md:hidden lg:block  rounded-[30px] h-fit lg:h-auto w-full col-span-2 group relative bg-gradient-to-br from-neutral-800 to-neutral-900">
          <Image
            src={bg}
            fill
            alt="bg_picture"
            priority
            className="rounded=[30px] overflow-clip opacity-10 "
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col h-auto gap-8 items-start  w-full p-5">
            <div className="h-auto   grid grid-cols-3 sm:grid-cols-7  ">
              <div className="flex items-center justify-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 261 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-neutral-50"
                    d="M126.734 77.364C129.214 75.9447 132.443 75.9383 134.921 77.364C147.384 84.4066 159.852 91.4381 172.313 98.485C174.657 99.8052 176.225 102.414 176.201 105.114V147.485C176.218 150.298 174.496 152.969 172.023 154.259C159.6 161.263 147.184 168.275 134.764 175.279C132.233 176.726 128.938 176.614 126.487 175.049C122.762 172.89 119.032 170.741 115.307 168.585C114.546 168.131 113.688 167.77 113.15 167.032C113.625 166.391 114.475 166.312 115.165 166.032C116.72 165.538 118.148 164.744 119.576 163.974C119.937 163.727 120.378 163.822 120.724 164.043C123.909 165.869 127.065 167.748 130.261 169.556C130.942 169.95 131.633 169.428 132.215 169.103C144.406 162.213 156.611 155.349 168.799 148.457C169.251 148.24 169.501 147.761 169.464 147.266C169.472 133.289 169.466 119.309 169.468 105.332C169.52 104.77 169.195 104.254 168.688 104.025C156.308 97.0529 143.935 90.0705 131.557 83.097C131.343 82.9496 131.089 82.8704 130.829 82.8701C130.569 82.8697 130.314 82.948 130.099 83.0948C117.722 90.0705 105.351 97.0593 92.9736 104.031C92.4678 104.261 92.1284 104.768 92.1886 105.332C92.1907 119.309 92.1886 133.289 92.1886 147.268C92.1671 147.509 92.2201 147.752 92.3405 147.962C92.4609 148.172 92.6428 148.341 92.8617 148.444C96.1647 150.317 99.4719 152.177 102.777 154.044C104.639 155.046 106.925 155.642 108.977 154.874C110.787 154.224 112.056 152.377 112.021 150.455C112.038 136.559 112.013 122.661 112.034 108.768C111.989 108.151 112.574 107.641 113.174 107.699C114.761 107.689 116.35 107.678 117.937 107.704C118.6 107.689 119.055 108.353 118.973 108.974C118.967 122.958 118.991 136.942 118.963 150.926C118.967 154.652 117.436 158.708 113.989 160.531C109.742 162.731 104.493 162.265 100.298 160.155C96.6654 158.342 93.1994 156.203 89.6318 154.261C87.1526 152.978 85.4384 150.296 85.4559 147.486V105.114C85.4299 102.358 87.06 99.7019 89.4768 98.4009C101.897 91.3914 114.316 84.3766 126.734 77.364Z"
                    fill="#8CC84B"
                  />
                  <path
                    className="fill-neutral-50"
                    d="M137.57 106.715C142.987 106.366 148.786 106.508 153.661 109.177C157.435 111.222 159.527 115.514 159.594 119.707C159.488 120.272 158.897 120.584 158.357 120.545C156.786 120.543 155.214 120.567 153.642 120.535C152.975 120.56 152.588 119.946 152.504 119.356C152.052 117.35 150.958 115.363 149.07 114.395C146.171 112.944 142.81 113.017 139.649 113.047C137.342 113.17 134.86 113.37 132.905 114.727C131.405 115.754 130.949 117.829 131.484 119.5C131.989 120.7 133.375 121.087 134.508 121.444C141.036 123.152 147.954 122.982 154.358 125.229C157.009 126.145 159.602 127.926 160.51 130.701C161.697 134.422 161.177 138.869 158.53 141.855C156.383 144.313 153.257 145.651 150.139 146.378C145.991 147.302 141.686 147.326 137.473 146.915C133.512 146.464 129.39 145.423 126.332 142.724C123.717 140.454 122.44 136.916 122.567 133.502C122.597 132.925 123.171 132.523 123.723 132.57C125.306 132.557 126.889 132.553 128.472 132.572C129.104 132.527 129.573 133.073 129.605 133.669C129.897 135.581 130.615 137.587 132.282 138.72C135.499 140.796 139.535 140.653 143.219 140.712C146.27 140.576 149.696 140.535 152.186 138.518C153.5 137.368 153.889 135.443 153.534 133.788C153.149 132.39 151.687 131.738 150.431 131.312C143.986 129.274 136.991 130.013 130.609 127.708C128.018 126.792 125.512 125.061 124.517 122.399C123.128 118.632 123.764 113.972 126.689 111.086C129.54 108.215 133.656 107.11 137.57 106.714V106.715Z"
                    fill="#8CC84B"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 261 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M131.105 134.411C135.974 134.411 139.921 130.463 139.921 125.594C139.921 120.725 135.974 116.778 131.105 116.778C126.235 116.778 122.288 120.725 122.288 125.594C122.288 130.463 126.235 134.411 131.105 134.411Z"
                    fill="#61DAFB"
                    className="fill-neutral-50 "
                  />
                  <path
                    d="M131.104 143.657C157.231 143.657 178.411 135.57 178.411 125.594C178.411 115.619 157.231 107.532 131.104 107.532C104.978 107.532 83.7979 115.619 83.7979 125.594C83.7979 135.57 104.978 143.657 131.104 143.657Z"
                    stroke="#61DAFB"
                    className="stroke-neutral-50 "
                    strokeWidth="5"
                  />
                  <path
                    d="M115.462 134.625C128.525 157.252 146.119 171.551 154.758 166.563C163.397 161.575 159.81 139.189 146.747 116.563C133.684 93.9366 116.09 79.6377 107.451 84.6255C98.8119 89.6133 102.398 111.999 115.462 134.625Z"
                    stroke="#61DAFB"
                    className="stroke-neutral-50 "
                    strokeWidth="5"
                  />
                  <path
                    d="M115.462 116.563C102.399 139.189 98.812 161.575 107.451 166.563C116.09 171.551 133.684 157.252 146.747 134.625C159.81 111.999 163.397 89.6133 154.758 84.6255C146.119 79.6376 128.525 93.9365 115.462 116.563Z"
                    stroke="#61DAFB"
                    className="stroke-neutral-50"
                    strokeWidth="5"
                  />
                </svg>
              </div>

              <div className="flex items-center justify-center">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 261 261"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_301_8858)">
                    <path
                      d="M131 176C158.614 176 181 153.614 181 126C181 98.3858 158.614 76 131 76C103.386 76 81 98.3858 81 126C81 153.614 103.386 176 131 176Z"
                      fill="white"
                    />
                    <path
                      d="M164.06 163.511L119.412 106H111V145.983H117.73V114.546L158.777 167.581C160.629 166.341 162.394 164.981 164.06 163.511Z"
                      fill="url(#paint0_linear_301_8858)"
                    />
                    <path
                      d="M151.556 106H144.889V146H151.556V106Z"
                      fill="url(#paint1_linear_301_8858)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_301_8858"
                      x1="141.555"
                      y1="140.722"
                      x2="161.278"
                      y2="165.167"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop />
                      <stop offset="1" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_301_8858"
                      x1="148.223"
                      y1="106"
                      x2="148.111"
                      y2="135.375"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop />
                      <stop offset="1" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="clip0_301_8858">
                      <rect
                        width="100"
                        height="100"
                        fill="white"
                        transform="translate(81 76)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 261 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M180.552 75.5942H80.5522V175.594H180.552V75.5942Z"
                    fill="#F7DF1E"
                    className="fill-neutral-50"
                  />
                  <path
                    d="M147.727 153.72C149.741 157.009 152.362 159.426 156.997 159.426C160.89 159.426 163.378 157.48 163.378 154.791C163.378 151.569 160.822 150.428 156.536 148.553L154.187 147.545C147.406 144.656 142.901 141.037 142.901 133.386C142.901 126.339 148.271 120.974 156.663 120.974C162.638 120.974 166.933 123.053 170.028 128.497L162.711 133.196C161.1 130.307 159.362 129.169 156.663 129.169C153.911 129.169 152.166 130.915 152.166 133.196C152.166 136.015 153.912 137.156 157.944 138.902L160.293 139.909C168.278 143.332 172.785 146.823 172.785 154.67C172.785 163.131 166.139 167.766 157.214 167.766C148.487 167.766 142.849 163.607 140.09 158.156L147.727 153.72ZM114.532 154.534C116.008 157.153 117.351 159.367 120.579 159.367C123.666 159.367 125.614 158.159 125.614 153.463V121.51H135.011V153.59C135.011 163.32 129.306 167.748 120.979 167.748C113.455 167.748 109.098 163.855 106.882 159.165L114.532 154.534Z"
                    fill="black"
                  />
                  <defs>
                    <filter
                      id="filter0_d_301_8814"
                      x="0.723999"
                      y="0"
                      width="260"
                      height="260"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="20" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_301_8814"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_301_8814"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 261 261"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M80.3806 76.4851H180.381V176.485H80.3806V76.4851Z"
                    fill="#017ACB"
                    className="fill-neutral-50"
                  />
                  <path
                    className="fill-neutral-950"
                    d="M128.396 113.516H133.193V121.798H120.224V158.641L119.881 158.735C119.412 158.86 113.24 158.86 111.912 158.719L110.849 158.626V121.798H97.8806V113.516L101.99 113.469C104.24 113.438 110.021 113.438 114.834 113.469C119.646 113.501 125.74 113.516 128.396 113.516ZM165.006 154.735C163.099 156.751 161.053 157.876 157.646 158.798C156.162 159.204 155.912 159.219 152.568 159.204C149.224 159.188 148.959 159.188 147.334 158.766C143.131 157.688 139.74 155.579 137.428 152.594C136.771 151.751 135.693 150.001 135.693 149.782C135.693 149.719 135.849 149.579 136.053 149.485C136.256 149.391 136.678 149.126 137.021 148.923C137.365 148.719 137.99 148.344 138.412 148.126C138.834 147.907 140.053 147.188 141.115 146.548C142.178 145.907 143.146 145.391 143.256 145.391C143.365 145.391 143.568 145.61 143.724 145.876C144.662 147.454 146.849 149.469 148.396 150.157C149.349 150.563 151.459 151.016 152.474 151.016C153.412 151.016 155.131 150.61 156.053 150.188C157.037 149.735 157.537 149.282 158.131 148.376C158.537 147.735 158.584 147.563 158.568 146.344C158.568 145.219 158.506 144.907 158.193 144.391C157.318 142.954 156.131 142.204 151.318 140.079C146.349 137.876 144.115 136.563 142.303 134.798C140.959 133.485 140.693 133.126 139.849 131.485C138.756 129.376 138.615 128.688 138.599 125.548C138.584 123.344 138.631 122.626 138.865 121.876C139.193 120.751 140.256 118.579 140.74 118.032C141.74 116.86 142.099 116.501 142.803 115.923C144.928 114.173 148.24 113.016 151.412 112.907C151.771 112.907 152.959 112.969 154.068 113.048C157.256 113.313 159.428 114.094 161.521 115.766C163.099 117.016 165.49 119.954 165.256 120.344C165.099 120.579 158.865 124.735 158.459 124.86C158.209 124.938 158.037 124.844 157.693 124.438C155.568 121.891 154.709 121.344 152.646 121.219C151.178 121.126 150.396 121.298 149.412 121.954C148.381 122.641 147.881 123.688 147.881 125.141C147.896 127.266 148.709 128.266 151.709 129.751C153.646 130.704 155.303 131.485 155.428 131.485C155.615 131.485 159.631 133.485 160.678 134.11C165.553 136.969 167.537 139.907 168.053 144.969C168.428 148.782 167.349 152.266 165.006 154.735Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_d_301_8926"
                      x="0.723999"
                      y="0.890869"
                      width="260"
                      height="260"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="20" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_301_8926"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_301_8926"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 261 261"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-neutral-50"
                    d="M130.828 96.4933C117.495 96.4933 109.161 103.158 105.828 116.487C110.828 109.822 116.662 107.324 123.328 108.989C127.132 109.94 129.851 112.699 132.86 115.753C137.762 120.727 143.436 126.484 155.829 126.484C169.161 126.484 177.496 119.819 180.828 106.489C175.829 113.154 169.996 115.654 163.328 113.989C159.525 113.038 156.807 110.278 153.797 107.225C148.895 102.25 143.221 96.4933 130.828 96.4933ZM105.828 126.484C92.4952 126.484 84.1609 133.149 80.8284 146.479C85.8277 139.814 91.6612 137.315 98.3287 138.982C102.131 139.933 104.85 142.692 107.86 145.744C112.762 150.718 118.436 156.477 130.828 156.477C144.162 156.477 152.495 149.812 155.829 136.482C150.828 143.147 144.995 145.647 138.329 143.98C134.525 143.031 131.806 140.27 128.796 137.217C123.895 132.243 118.221 126.484 105.828 126.484Z"
                    fill="#06B6D4"
                  />
                  <defs>
                    <filter
                      id="filter0_d_301_8806"
                      x="0.723999"
                      y="0.890869"
                      width="260"
                      height="260"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="20" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_301_8806"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_301_8806"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 261 261"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    className="fill-neutral-50"
                    clipRule="evenodd"
                    d="M139.57 87.7465L160.104 99.6029C160.697 98.9756 161.378 98.4373 162.124 98.0045C166.383 95.5561 171.815 97.0098 174.289 101.269C176.737 105.528 175.283 110.959 171.025 113.433C170.283 113.86 169.485 114.178 168.653 114.377V138.099C169.476 138.299 170.266 138.615 170.999 139.037C175.283 141.511 176.737 146.943 174.263 151.202C171.815 155.461 166.358 156.914 162.099 154.466C161.274 153.993 160.53 153.389 159.898 152.679L139.488 164.463C139.787 165.368 139.938 166.315 139.937 167.268C139.937 172.164 135.959 176.169 131.037 176.169C126.115 176.169 122.137 172.19 122.137 167.268C122.137 166.393 122.263 165.548 122.497 164.75L101.968 152.897C101.382 153.512 100.711 154.04 99.9758 154.466C95.6915 156.914 90.2594 155.461 87.811 151.202C85.363 146.943 86.8167 141.511 91.0753 139.037C91.8089 138.615 92.5989 138.299 93.4216 138.099V114.377C92.5898 114.178 91.7911 113.86 91.0499 113.433C86.791 110.985 85.3373 105.528 87.7857 101.269C90.234 97.0098 95.6911 95.5561 99.9501 98.0045C100.693 98.435 101.37 98.9699 101.96 99.5929L122.501 87.7333C122.259 86.9114 122.136 86.059 122.137 85.2023C122.137 80.2809 126.115 76.3021 131.037 76.3021C135.959 76.3021 139.937 80.2805 139.937 85.2023C139.937 86.0869 139.809 86.9406 139.57 87.7465ZM137.43 91.3996L158.014 103.284C157.686 104.43 157.592 105.629 157.738 106.812C157.883 107.995 158.265 109.137 158.86 110.169C160.113 112.349 162.154 113.794 164.42 114.357V138.108C164.304 138.136 164.189 138.167 164.075 138.199L137.191 91.6374C137.272 91.5596 137.352 91.4805 137.43 91.3999V91.3996ZM124.889 91.6426L98.0055 138.204C97.8892 138.17 97.7723 138.139 97.6548 138.11V114.357C99.9202 113.794 101.961 112.349 103.214 110.169C103.811 109.135 104.193 107.991 104.338 106.806C104.483 105.62 104.387 104.418 104.057 103.271L124.635 91.3899C124.718 91.4756 124.802 91.56 124.889 91.6423V91.6426ZM133.524 93.7518L160.401 140.303C159.786 140.89 159.258 141.563 158.834 142.301C158.412 143.035 158.096 143.825 157.896 144.648H104.179C103.979 143.825 103.663 143.035 103.24 142.301C102.815 141.568 102.288 140.899 101.676 140.314L128.558 93.7539C129.364 93.9859 130.199 94.1033 131.037 94.1024C131.901 94.1024 132.735 93.9802 133.524 93.7518ZM137.619 161.272L158.069 149.465C158.008 149.272 157.953 149.077 157.905 148.881H104.167C104.139 148.997 104.108 149.111 104.075 149.225L124.625 161.091C125.455 160.228 126.451 159.542 127.553 159.074C128.655 158.606 129.84 158.366 131.037 158.368C132.276 158.366 133.502 158.623 134.636 159.123C135.769 159.623 136.786 160.355 137.619 161.272Z"
                    fill="#E535AB"
                  />
                  <defs>
                    <filter
                      id="filter0_d_301_8804"
                      x="0.932861"
                      y="0.702881"
                      width="260"
                      height="260"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="20" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_301_8804"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_301_8804"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col gap-3">
                <p className="text-neutral-400 text-xs">TECHHNOLOGIES</p>
                <p className="text-neutral-50 font-semibold">TECH STACKS</p>
              </div>
            </div>
          </div>
        </div>
        <Socials />
      </section>
      <section className="hidden md:block lg:hidden md:h-fit md:p-3">
        <div className="bg-zinc-800  rounded-[30px] h-fit lg:h-auto w-full col-span-2 group relative bg-gradient-to-br from-neutral-800 to-neutral-900">
          <Image
            src={bg}
            fill
            alt="bg_picture"
            priority
            className="rounded=[30px] overflow-clip opacity-10 "
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col h-auto gap-5 items-start  w-full p-5">
            <div className="h-auto grid grid-cols-3 sm:grid-cols-7  ">
              <div className="flex items-center justify-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 261 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-neutral-50"
                    d="M126.734 77.364C129.214 75.9447 132.443 75.9383 134.921 77.364C147.384 84.4066 159.852 91.4381 172.313 98.485C174.657 99.8052 176.225 102.414 176.201 105.114V147.485C176.218 150.298 174.496 152.969 172.023 154.259C159.6 161.263 147.184 168.275 134.764 175.279C132.233 176.726 128.938 176.614 126.487 175.049C122.762 172.89 119.032 170.741 115.307 168.585C114.546 168.131 113.688 167.77 113.15 167.032C113.625 166.391 114.475 166.312 115.165 166.032C116.72 165.538 118.148 164.744 119.576 163.974C119.937 163.727 120.378 163.822 120.724 164.043C123.909 165.869 127.065 167.748 130.261 169.556C130.942 169.95 131.633 169.428 132.215 169.103C144.406 162.213 156.611 155.349 168.799 148.457C169.251 148.24 169.501 147.761 169.464 147.266C169.472 133.289 169.466 119.309 169.468 105.332C169.52 104.77 169.195 104.254 168.688 104.025C156.308 97.0529 143.935 90.0705 131.557 83.097C131.343 82.9496 131.089 82.8704 130.829 82.8701C130.569 82.8697 130.314 82.948 130.099 83.0948C117.722 90.0705 105.351 97.0593 92.9736 104.031C92.4678 104.261 92.1284 104.768 92.1886 105.332C92.1907 119.309 92.1886 133.289 92.1886 147.268C92.1671 147.509 92.2201 147.752 92.3405 147.962C92.4609 148.172 92.6428 148.341 92.8617 148.444C96.1647 150.317 99.4719 152.177 102.777 154.044C104.639 155.046 106.925 155.642 108.977 154.874C110.787 154.224 112.056 152.377 112.021 150.455C112.038 136.559 112.013 122.661 112.034 108.768C111.989 108.151 112.574 107.641 113.174 107.699C114.761 107.689 116.35 107.678 117.937 107.704C118.6 107.689 119.055 108.353 118.973 108.974C118.967 122.958 118.991 136.942 118.963 150.926C118.967 154.652 117.436 158.708 113.989 160.531C109.742 162.731 104.493 162.265 100.298 160.155C96.6654 158.342 93.1994 156.203 89.6318 154.261C87.1526 152.978 85.4384 150.296 85.4559 147.486V105.114C85.4299 102.358 87.06 99.7019 89.4768 98.4009C101.897 91.3914 114.316 84.3766 126.734 77.364Z"
                    fill="#8CC84B"
                  />
                  <path
                    className="fill-neutral-50"
                    d="M137.57 106.715C142.987 106.366 148.786 106.508 153.661 109.177C157.435 111.222 159.527 115.514 159.594 119.707C159.488 120.272 158.897 120.584 158.357 120.545C156.786 120.543 155.214 120.567 153.642 120.535C152.975 120.56 152.588 119.946 152.504 119.356C152.052 117.35 150.958 115.363 149.07 114.395C146.171 112.944 142.81 113.017 139.649 113.047C137.342 113.17 134.86 113.37 132.905 114.727C131.405 115.754 130.949 117.829 131.484 119.5C131.989 120.7 133.375 121.087 134.508 121.444C141.036 123.152 147.954 122.982 154.358 125.229C157.009 126.145 159.602 127.926 160.51 130.701C161.697 134.422 161.177 138.869 158.53 141.855C156.383 144.313 153.257 145.651 150.139 146.378C145.991 147.302 141.686 147.326 137.473 146.915C133.512 146.464 129.39 145.423 126.332 142.724C123.717 140.454 122.44 136.916 122.567 133.502C122.597 132.925 123.171 132.523 123.723 132.57C125.306 132.557 126.889 132.553 128.472 132.572C129.104 132.527 129.573 133.073 129.605 133.669C129.897 135.581 130.615 137.587 132.282 138.72C135.499 140.796 139.535 140.653 143.219 140.712C146.27 140.576 149.696 140.535 152.186 138.518C153.5 137.368 153.889 135.443 153.534 133.788C153.149 132.39 151.687 131.738 150.431 131.312C143.986 129.274 136.991 130.013 130.609 127.708C128.018 126.792 125.512 125.061 124.517 122.399C123.128 118.632 123.764 113.972 126.689 111.086C129.54 108.215 133.656 107.11 137.57 106.714V106.715Z"
                    fill="#8CC84B"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 261 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M131.105 134.411C135.974 134.411 139.921 130.463 139.921 125.594C139.921 120.725 135.974 116.778 131.105 116.778C126.235 116.778 122.288 120.725 122.288 125.594C122.288 130.463 126.235 134.411 131.105 134.411Z"
                    fill="#61DAFB"
                    className="fill-neutral-50 "
                  />
                  <path
                    d="M131.104 143.657C157.231 143.657 178.411 135.57 178.411 125.594C178.411 115.619 157.231 107.532 131.104 107.532C104.978 107.532 83.7979 115.619 83.7979 125.594C83.7979 135.57 104.978 143.657 131.104 143.657Z"
                    stroke="#61DAFB"
                    className="stroke-neutral-50 "
                    strokeWidth="5"
                  />
                  <path
                    d="M115.462 134.625C128.525 157.252 146.119 171.551 154.758 166.563C163.397 161.575 159.81 139.189 146.747 116.563C133.684 93.9366 116.09 79.6377 107.451 84.6255C98.8119 89.6133 102.398 111.999 115.462 134.625Z"
                    stroke="#61DAFB"
                    className="stroke-neutral-50 "
                    strokeWidth="5"
                  />
                  <path
                    d="M115.462 116.563C102.399 139.189 98.812 161.575 107.451 166.563C116.09 171.551 133.684 157.252 146.747 134.625C159.81 111.999 163.397 89.6133 154.758 84.6255C146.119 79.6376 128.525 93.9365 115.462 116.563Z"
                    stroke="#61DAFB"
                    className="stroke-neutral-50"
                    strokeWidth="5"
                  />
                </svg>
              </div>

              <div className="flex items-center justify-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 261 261"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_301_8858)">
                    <path
                      d="M131 176C158.614 176 181 153.614 181 126C181 98.3858 158.614 76 131 76C103.386 76 81 98.3858 81 126C81 153.614 103.386 176 131 176Z"
                      fill="white"
                    />
                    <path
                      d="M164.06 163.511L119.412 106H111V145.983H117.73V114.546L158.777 167.581C160.629 166.341 162.394 164.981 164.06 163.511Z"
                      fill="url(#paint0_linear_301_8858)"
                    />
                    <path
                      d="M151.556 106H144.889V146H151.556V106Z"
                      fill="url(#paint1_linear_301_8858)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_301_8858"
                      x1="141.555"
                      y1="140.722"
                      x2="161.278"
                      y2="165.167"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop />
                      <stop offset="1" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_301_8858"
                      x1="148.223"
                      y1="106"
                      x2="148.111"
                      y2="135.375"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop />
                      <stop offset="1" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="clip0_301_8858">
                      <rect
                        width="100"
                        height="100"
                        fill="white"
                        transform="translate(81 76)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 261 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M180.552 75.5942H80.5522V175.594H180.552V75.5942Z"
                    fill="#F7DF1E"
                    className="fill-neutral-50"
                  />
                  <path
                    d="M147.727 153.72C149.741 157.009 152.362 159.426 156.997 159.426C160.89 159.426 163.378 157.48 163.378 154.791C163.378 151.569 160.822 150.428 156.536 148.553L154.187 147.545C147.406 144.656 142.901 141.037 142.901 133.386C142.901 126.339 148.271 120.974 156.663 120.974C162.638 120.974 166.933 123.053 170.028 128.497L162.711 133.196C161.1 130.307 159.362 129.169 156.663 129.169C153.911 129.169 152.166 130.915 152.166 133.196C152.166 136.015 153.912 137.156 157.944 138.902L160.293 139.909C168.278 143.332 172.785 146.823 172.785 154.67C172.785 163.131 166.139 167.766 157.214 167.766C148.487 167.766 142.849 163.607 140.09 158.156L147.727 153.72ZM114.532 154.534C116.008 157.153 117.351 159.367 120.579 159.367C123.666 159.367 125.614 158.159 125.614 153.463V121.51H135.011V153.59C135.011 163.32 129.306 167.748 120.979 167.748C113.455 167.748 109.098 163.855 106.882 159.165L114.532 154.534Z"
                    fill="black"
                  />
                  <defs>
                    <filter
                      id="filter0_d_301_8814"
                      x="0.723999"
                      y="0"
                      width="260"
                      height="260"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="20" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_301_8814"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_301_8814"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 261 261"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M80.3806 76.4851H180.381V176.485H80.3806V76.4851Z"
                    fill="#017ACB"
                    className="fill-neutral-50"
                  />
                  <path
                    className="fill-neutral-950"
                    d="M128.396 113.516H133.193V121.798H120.224V158.641L119.881 158.735C119.412 158.86 113.24 158.86 111.912 158.719L110.849 158.626V121.798H97.8806V113.516L101.99 113.469C104.24 113.438 110.021 113.438 114.834 113.469C119.646 113.501 125.74 113.516 128.396 113.516ZM165.006 154.735C163.099 156.751 161.053 157.876 157.646 158.798C156.162 159.204 155.912 159.219 152.568 159.204C149.224 159.188 148.959 159.188 147.334 158.766C143.131 157.688 139.74 155.579 137.428 152.594C136.771 151.751 135.693 150.001 135.693 149.782C135.693 149.719 135.849 149.579 136.053 149.485C136.256 149.391 136.678 149.126 137.021 148.923C137.365 148.719 137.99 148.344 138.412 148.126C138.834 147.907 140.053 147.188 141.115 146.548C142.178 145.907 143.146 145.391 143.256 145.391C143.365 145.391 143.568 145.61 143.724 145.876C144.662 147.454 146.849 149.469 148.396 150.157C149.349 150.563 151.459 151.016 152.474 151.016C153.412 151.016 155.131 150.61 156.053 150.188C157.037 149.735 157.537 149.282 158.131 148.376C158.537 147.735 158.584 147.563 158.568 146.344C158.568 145.219 158.506 144.907 158.193 144.391C157.318 142.954 156.131 142.204 151.318 140.079C146.349 137.876 144.115 136.563 142.303 134.798C140.959 133.485 140.693 133.126 139.849 131.485C138.756 129.376 138.615 128.688 138.599 125.548C138.584 123.344 138.631 122.626 138.865 121.876C139.193 120.751 140.256 118.579 140.74 118.032C141.74 116.86 142.099 116.501 142.803 115.923C144.928 114.173 148.24 113.016 151.412 112.907C151.771 112.907 152.959 112.969 154.068 113.048C157.256 113.313 159.428 114.094 161.521 115.766C163.099 117.016 165.49 119.954 165.256 120.344C165.099 120.579 158.865 124.735 158.459 124.86C158.209 124.938 158.037 124.844 157.693 124.438C155.568 121.891 154.709 121.344 152.646 121.219C151.178 121.126 150.396 121.298 149.412 121.954C148.381 122.641 147.881 123.688 147.881 125.141C147.896 127.266 148.709 128.266 151.709 129.751C153.646 130.704 155.303 131.485 155.428 131.485C155.615 131.485 159.631 133.485 160.678 134.11C165.553 136.969 167.537 139.907 168.053 144.969C168.428 148.782 167.349 152.266 165.006 154.735Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_d_301_8926"
                      x="0.723999"
                      y="0.890869"
                      width="260"
                      height="260"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="20" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_301_8926"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_301_8926"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 261 261"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-neutral-50"
                    d="M130.828 96.4933C117.495 96.4933 109.161 103.158 105.828 116.487C110.828 109.822 116.662 107.324 123.328 108.989C127.132 109.94 129.851 112.699 132.86 115.753C137.762 120.727 143.436 126.484 155.829 126.484C169.161 126.484 177.496 119.819 180.828 106.489C175.829 113.154 169.996 115.654 163.328 113.989C159.525 113.038 156.807 110.278 153.797 107.225C148.895 102.25 143.221 96.4933 130.828 96.4933ZM105.828 126.484C92.4952 126.484 84.1609 133.149 80.8284 146.479C85.8277 139.814 91.6612 137.315 98.3287 138.982C102.131 139.933 104.85 142.692 107.86 145.744C112.762 150.718 118.436 156.477 130.828 156.477C144.162 156.477 152.495 149.812 155.829 136.482C150.828 143.147 144.995 145.647 138.329 143.98C134.525 143.031 131.806 140.27 128.796 137.217C123.895 132.243 118.221 126.484 105.828 126.484Z"
                    fill="#06B6D4"
                  />
                  <defs>
                    <filter
                      id="filter0_d_301_8806"
                      x="0.723999"
                      y="0.890869"
                      width="260"
                      height="260"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="20" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_301_8806"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_301_8806"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 261 261"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    className="fill-neutral-50"
                    clipRule="evenodd"
                    d="M139.57 87.7465L160.104 99.6029C160.697 98.9756 161.378 98.4373 162.124 98.0045C166.383 95.5561 171.815 97.0098 174.289 101.269C176.737 105.528 175.283 110.959 171.025 113.433C170.283 113.86 169.485 114.178 168.653 114.377V138.099C169.476 138.299 170.266 138.615 170.999 139.037C175.283 141.511 176.737 146.943 174.263 151.202C171.815 155.461 166.358 156.914 162.099 154.466C161.274 153.993 160.53 153.389 159.898 152.679L139.488 164.463C139.787 165.368 139.938 166.315 139.937 167.268C139.937 172.164 135.959 176.169 131.037 176.169C126.115 176.169 122.137 172.19 122.137 167.268C122.137 166.393 122.263 165.548 122.497 164.75L101.968 152.897C101.382 153.512 100.711 154.04 99.9758 154.466C95.6915 156.914 90.2594 155.461 87.811 151.202C85.363 146.943 86.8167 141.511 91.0753 139.037C91.8089 138.615 92.5989 138.299 93.4216 138.099V114.377C92.5898 114.178 91.7911 113.86 91.0499 113.433C86.791 110.985 85.3373 105.528 87.7857 101.269C90.234 97.0098 95.6911 95.5561 99.9501 98.0045C100.693 98.435 101.37 98.9699 101.96 99.5929L122.501 87.7333C122.259 86.9114 122.136 86.059 122.137 85.2023C122.137 80.2809 126.115 76.3021 131.037 76.3021C135.959 76.3021 139.937 80.2805 139.937 85.2023C139.937 86.0869 139.809 86.9406 139.57 87.7465ZM137.43 91.3996L158.014 103.284C157.686 104.43 157.592 105.629 157.738 106.812C157.883 107.995 158.265 109.137 158.86 110.169C160.113 112.349 162.154 113.794 164.42 114.357V138.108C164.304 138.136 164.189 138.167 164.075 138.199L137.191 91.6374C137.272 91.5596 137.352 91.4805 137.43 91.3999V91.3996ZM124.889 91.6426L98.0055 138.204C97.8892 138.17 97.7723 138.139 97.6548 138.11V114.357C99.9202 113.794 101.961 112.349 103.214 110.169C103.811 109.135 104.193 107.991 104.338 106.806C104.483 105.62 104.387 104.418 104.057 103.271L124.635 91.3899C124.718 91.4756 124.802 91.56 124.889 91.6423V91.6426ZM133.524 93.7518L160.401 140.303C159.786 140.89 159.258 141.563 158.834 142.301C158.412 143.035 158.096 143.825 157.896 144.648H104.179C103.979 143.825 103.663 143.035 103.24 142.301C102.815 141.568 102.288 140.899 101.676 140.314L128.558 93.7539C129.364 93.9859 130.199 94.1033 131.037 94.1024C131.901 94.1024 132.735 93.9802 133.524 93.7518ZM137.619 161.272L158.069 149.465C158.008 149.272 157.953 149.077 157.905 148.881H104.167C104.139 148.997 104.108 149.111 104.075 149.225L124.625 161.091C125.455 160.228 126.451 159.542 127.553 159.074C128.655 158.606 129.84 158.366 131.037 158.368C132.276 158.366 133.502 158.623 134.636 159.123C135.769 159.623 136.786 160.355 137.619 161.272Z"
                    fill="#E535AB"
                  />
                  <defs>
                    <filter
                      id="filter0_d_301_8804"
                      x="0.932861"
                      y="0.702881"
                      width="260"
                      height="260"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="20" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_301_8804"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_301_8804"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-3">
                <p className="text-neutral-400 text-xs">TECHHNOLOGIES</p>
                <p className="text-neutral-50 font-semibold">TECH STACKS</p>
              </div>
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
            </div>
          </div>
        </div>
      </section>
      <ConnectTotals />
      {/* <section className='py-10 flex flex-col text-neutral-50  gap-5' > */}
      {/*   <p className=' font-bold'> NgoranA</p> */}
      {/* <NavMenu /> */}
      {/* </section> */}
    </main>
  );
}
