import React from "react";
import Image from "next/image";

export default function Proyects() {
  return (
    <section className="h-full  flex flex-col justify-center items-center mx-5">
      {/* <div className="w-full h-screen flex flex-col lg:flex-row justify-around items-center mt-14">
        
      </div> */}
      {/* flex flex-col lg:flex-row */}
      <div className="w-full h-full mt-28 grid grid-cols-1 lg:grid-cols-2 place-items-center px-28">
        <div className="lg:w-[500px]  flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-white text-4xl lg:text-7xl font-bold">Projects</h1>
          <h1 className="text-white text-4xl lg:text-7xl font-bold">Development</h1>
        </div>
        <div className=" w-[300px] lg:w-[500px] full border-2 rounded-xl p-5 shadow-3xl mt-14">
          <h2 className="text-white text-4xl font-semibold text-center lg:text-end">Univalle App</h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start pt-5">
            <Image className="" src="/img/vistamobil.png" width={150} height={150} alt="xd"></Image>
            <p className="text-white pt-5 lg:pt-0 text-sm lg:text-base font-medium text-center lg:text-end pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div className=" w-[300px] lg:w-[500px] full border-2 rounded-xl p-5 shadow-3xl mt-20 ">
          <h2 className="text-white text-4xl font-semibold text-center lg:text-end">Univalle App</h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start pt-5">
            <Image className="" src="/img/vistamobil.png" width={150} height={150} alt="xd"></Image>
            <p className="text-white pt-5 lg:pt-0 text-sm lg:text-base font-medium text-center lg:text-end pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div className=" w-[300px] lg:w-[500px] full border-2 rounded-xl p-5 shadow-3xl mt-20 ">
          <h2 className="text-white text-4xl font-semibold text-center lg:text-end">Univalle App</h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start pt-5">
            <Image className="" src="/img/vistamobil.png" width={150} height={150} alt="xd"></Image>
            <p className="text-white pt-5 lg:pt-0 text-sm lg:text-base font-medium text-center lg:text-end pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div className=" w-[300px] lg:w-[500px] full border-2 rounded-xl p-5 shadow-3xl mt-20 ">
          <h2 className="text-white text-4xl font-semibold text-center lg:text-end">Univalle App</h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start pt-5">
            <Image className="" src="/img/vistamobil.png" width={150} height={150} alt="xd"></Image>
            <p className="text-white pt-5 lg:pt-0 text-sm lg:text-base font-medium text-center lg:text-end pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div className=" w-[300px] lg:w-[500px] full border-2 rounded-xl p-5 shadow-3xl mt-20 ">
          <h2 className="text-white text-4xl font-semibold text-center lg:text-end">Univalle App</h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start pt-5">
            <Image className="" src="/img/vistamobil.png" width={150} height={150} alt="xd"></Image>
            <p className="text-white pt-5 lg:pt-0 text-sm lg:text-base font-medium text-center lg:text-end pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
      </div>
    </section>
  );
}
