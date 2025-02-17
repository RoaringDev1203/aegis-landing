import { TokenDetail } from "@/types/tokendata";
import { isViewportValid } from "@/utils/mediaQuery";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  navEle: {
    name: string;
    url: string;
  }[];
  isNavOpen: boolean;
  setIsNavOpen: (isNavOpen: boolean) => void;
  coinData: TokenDetail | null;
  isScrolling:boolean;
};

export const NavBarFixed = ({ coinData, isNavOpen, setIsNavOpen, isScrolling }: Props) => {
  const isMobile = isViewportValid(700);
  return (
    <div className={`absolute w-[100vw] top-0 left-0 flex items-center nav-container z-[100] `}>
      <div className="w-[33%] md:w-[10%] flex items-center justify-center nav-ele-bg">
        <div>
          <Link
            className={`text-[#FFFFFF] md:text-[#FFFFFF80] transition-all ease-in duration-150 text-[16px] text-center w-full hover:text-white`}
            href={isMobile ? "#home" : "#about"}
          >
            {isMobile ? "Home" : "About"}
          </Link>
        </div>
      </div>
      <div className="w-[14.5%] flex items-center justify-center nav-ele-bg max-md:hidden ">
        <Link
          className="translate-x-4 text-[#FFFFFF80] text-[16px] text-center w-full hover:text-white transition-all ease-in duration-150"
          href="#roadmap"
        >
          Roadmap
        </Link>
      </div>
      <div className="w-[17.5%] flex items-center justify-center nav-ele-bg max-md:hidden ">
        <Link
          className="text-[#FFFFFF80] text-[16px] text-center w-full hover:text-white transition-all ease-in duration-150"
          href="#tokenomics"
        >
          Tokenomics
        </Link>
      </div>
      <div className="w-[34%] md:w-[16%] flex items-center justify-center nav-ele-bg relative">
        <Link
          className="text-[#FFFFFF80] flex items-center justify-center z-[2]"
          href="#home"
        >
          <div className="logo-bg relative z-[3] w-[140px] flex items-center justify-center logo-bg">
            <Image src="/aegisNew.png" alt="logo" width={120} height={120} />
          </div>
        </Link>
        <div className="absolute w-[100%] h-[150%] bottom-0 left-0 -translate-x-[30%] nav-absolute-ele" />
        <div className="absolute w-[100%] h-[160%] bottom-0 left-0 translate-x-[40%] nav-absolute-ele" />
      </div>
      <div className="w-[17.5%] flex items-center justify-center nav-ele-bg max-md:hidden ">
        <Link
          className="text-[#FFFFFF80] text-[16px] text-center w-full hover:text-white transition-all ease-in duration-150"
          href="/wp.pdf"
        >
          Whitepaper
        </Link>
      </div>
      <div className="w-[12.5%] flex items-center justify-center nav-ele-bg max-md:hidden">
        <Link
          className="text-[#FFFFFF80] text-[16px] text-center w-full hover:text-white transition-all ease-in duration-150"
          href="#faq"
        >
          FAQ
        </Link>
      </div>
      <div className="w-[33%] md:w-[12%] flex items-center justify-center nav-ele-bg">
        {!isMobile ? (
          <Link
            className="text-[#FFFFFF80] text-[16px] text-center w-full"
            href="#home"
          >
            <div className="flex flex-col gap-2 hover:text-white transition-all ease-in duration-150">
              <p>Token Price</p>
              <div className="flex items-center gap-2 justify-center">
                <div className="w-[8px] h-[8px] rounded-full bg-white" />
                <p className="text-white text-sm font-bold">${coinData?.current_price?.usd}</p>
              </div>
            </div>
          </Link>
        ) : (
          <button type="button" onClick={() => setIsNavOpen(!isNavOpen)}>
            <Image alt="burger-icon" src={isNavOpen ? "/close.svg" : "/burger-icon.png"} width={40} height={40} />
          </button>
        )}
      </div>
    </div>
  );
};
