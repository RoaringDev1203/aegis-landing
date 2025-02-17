import Image from "next/image";
import React from "react";

export const Partners = () => {
  const partners = [
    {
      name: "Zignaly",
      url: "https://www.binance.com/en/images/url.svg",
      logo: "/Partners/image 14.png",
    },
    {
      name: "OptimusAI",
      url: "https://www.binance.com/en/images/logo.svg",
      logo: "/Partners/image 14 (1).png",
    },
    {
      name: "Michael Terpin",
      url: "https://www.binance.com/en/images/url.svg",
      logo: "/Partners/image 17.png",
    },
    {
      name: "ChartAI",
      url: "https://www.binance.com/en/images/logo.svg",
      logo: "/Partners/image 16.png",//17.1
    },
    {
      name: "VaultTech",
      url: "https://www.binance.com/en/images/url.svg",
      logo: "/Partners/image 17-1.png",
    },
    {
      name: "Sentiment AI",
      url: "https://www.binance.com/en/images/logo.svg",
      logo: "/Partners/image 17-2.png",
    },
    {
      name: "AIgentX",
      url: "https://www.binance.com/en/images/logo.svg",
      logo: "/Partners/image 17-3.png",
    },
  ];
  return (
    <div className="w-full px-4 justify-center items-center space-y-12 relative">
      <div
        className="absolute top-0 left-0 w-full h-full -translate-y-12"
        style={{
          background:
            "linear-gradient(#000000ad 1.67%, rgba(17, 17, 17, 0) 18.08%)",
        }}
      />
      <h1 className="text-[40px] md:text-6xl text-center text-white font-black mt-4">
        Partners
      </h1>
      <div className="grid max-md:grid-cols-6 md:grid-cols-7 items-center max-md:w-full gap-8 md:gap-4 py-8 border-t-[1px] border-b-[1px] border-[#27272A] px-3 md:px-20">
        {partners.map((partner, index) => (
          <div
            key={index}
            className={`${ index === partners.length - 1 ? "max-md:col-span-6" : "max-md:col-span-3"} col-span-1 flex flex-col items-center justify-center space-y-4`}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={96}
              height={96}
              className=" object-contain rounded-full"
            />
            <div className="inline-flex space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 p-0.5"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M10.9558 7.794L16.6517 1.125H15.3017L10.3573 6.91537L6.40635 1.125H1.8501L7.82385 9.882L1.8501 16.875H3.2001L8.42235 10.7595L12.595 16.875H17.1512L10.9558 7.794ZM9.10747 9.9585L8.50222 9.08662L3.6861 2.14875H5.75947L9.64522 7.74788L10.2505 8.61975L15.3028 15.8985H13.2295L9.10747 9.9585Z"
                  fill="white"
                />
              </svg>{" "}
              <h1 className="text-lg text-[#71717A] font-medium hover:text-white ">
                {partner.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
