"use client";

import useCoinData from "@/utils/get-coin-data";
import Image from "next/image";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


export const TokenomicsSection = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    hidden: { opacity: 0, scale: 0 }
  };
  const boxVariant1 = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 }
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  const coinData = useCoinData();
  function formatNumberWithCommas(number: number | undefined) {
    if (!number) return 0;
    return number.toLocaleString('en-US', { style: 'decimal' });
  }
  
  return (
    <div className="flex flex-col gap-16 mt-[70px] items-center w-full md:px-16 text-white" id="tokenomics">
      <h1 className="text-4xl text-center text-white font-black mt-4">
            Tokenomics
          </h1>
      {/* Polygon section */}
      <div className="flex gap-5 max-md:justify-center max-md:w-screen relative pl-9">
        <Image
          src="/big-logo.png"
          alt="token"
          width={220}
          height={220}
          className="absolute top-1/2 left-1/2 -translate-x-[calc(100%-80px)] -translate-y-1/2 z-[10] max-md:w-[150px] max-md:h-[150px]"
        />
        <div className="flex flex-col gap-5">
          <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control} className="w-[145px] md:w-[230px] h-[160px] md:h-[250px] bg-[#18181B] rounded-md rounded-tl-[200px] flex items-start p-4 justify-end flex-col relative">
            <h1 className="text-[#71717A] text-[12px] md:text-lg font-[300]">Token Name</h1>
            <p className="text-[#fff] text-[20px] md:text-[28px] leading-[32px] font-[700]">
              {coinData?.name}
            </p>
            <div className="absolute border-l border-[#888888] top-0 left-0 w-[200px] md:w-[250px] h-[140px] md:h-[190px] rounded-tl-[190px] translate-x-[-6px] max-md:translate-y-[4px] translate-y-[10px] rotate-[-3.5deg] md:rotate-[-5deg]" />
          </motion.div>
          <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}

            className="w-[180px] md:w-[290px] h-[200px] md:h-[320px] bg-[#18181B] rounded-md flex items-start p-4 justify-end flex-col relative"
            style={{
              clipPath: "polygon(0 0, 75% 0, 100% 20%, 100% 100%, 0 100%)",
            }}
          >
            <h1 className="text-[#71717A] text-[12px] md:text-lg font-[300]">Total Supply</h1>
            <p className="text-[#fff] text-[20px] md:text-[28px] leading-[32px] font-[700]">
              {formatNumberWithCommas(coinData?.total_supply)}
            </p>
            <div className="w-1/2 h-1/2 absolute max-md:hidden top-0 right-0 border-t border-r border-[#888888]" />
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          variants={boxVariant1}
          initial="hidden"
          animate={control} className="flex flex-col gap-5">
          <div
            className="w-[180px] md:w-[290px] h-[200px] md:h-[320px] bg-[#18181B] rounded-md -translate-x-[35px] md:-translate-x-[60px] flex items-end p-4 justify-start flex-col"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 100%, 0 77.5%)",
            }}
          >
            <h1 className="text-[#71717A] text-[12px] md:text-lg font-[300]">Tax</h1>
            <p className="text-[#fff] text-[20px] md:text-[28px] leading-[32px] font-[700]">
              5/5
            </p>
          </div>
          <div className="w-[145px] md:w-[230px] h-[160px] md:h-[250px] bg-[#18181B] rounded-md rounded-br-[200px] p-6 relative">
            <h1 className="text-[#71717A] text-[12px] md:text-lg font-[300]">Ticker</h1>
            <p className="text-[#fff] text-[20px] md:text-[28px] leading-[32px] font-[700] uppercase">
              {coinData?.symbol}
            </p>
            <div className="absolute border-r border-[#888888] top-0 left-0 w-[200px] md:w-[250px] h-[140px] md:h-[190px] rounded-br-[190px] -translate-x-[63px] md:translate-x-[-6px] translate-y-[25px] md:translate-y-[46px] rotate-[8deg] md:rotate-[-7deg]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
