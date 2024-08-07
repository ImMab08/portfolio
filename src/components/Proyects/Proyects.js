'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

export default function Proyects() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="h-full  flex flex-col justify-center items-center mx-5">
      <div className="w-full h-full my-28 grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <div className="lg:w-[500px]  flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-white text-4xl lg:text-7xl font-bold">Projects</h1>
          <h1 className="text-white text-4xl lg:text-7xl font-bold">Development</h1>
        </div>
        <div  className="w-[300px] lg:w-[500px] full border-2 rounded-xl p-5 shadow-3xl mt-14">
          <h2 className="text-white text-4xl font-semibold text-center ">Univalle App</h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:pl-5 pt-5">
            <Slider {...settings}>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image src="/img/vistamobil.png" width={150} height={150} alt="xd"/>
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image src="/img/vistamobil.png" width={150} height={150} alt="xd"/>
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image src="/img/vistamobil.png" width={150} height={150} alt="xd"/>
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
            </Slider>            
          </div>
          <motion.a whileHover={{ scale: 1.2, }} whileTap={{ scale: 0.8, }} target="_blank" className="flex relative left-[8rem] lg:left-[20rem] w-32 justify-end text-white text-base font-semibold cursor-pointer pt-5">View More
            <div className="ml-2">
              <Image src="/img/link.svg" width={23} height={23} alt=""></Image>
            </div>
          </motion.a> 
        </div>
        <div className="w-[300px] lg:w-[500px] full border-2 rounded-xl p-5  shadow-3xl mt-14">
          <h2 className="text-white text-4xl font-semibold text-center ">Almenú</h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:pl-5 pt-5">
            <Slider {...settings}>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image src="/img/vistamobil.png" width={150} height={150} alt="xd"/>
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image src="/img/vistamobil.png" width={150} height={150} alt="xd"/>
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image src="/img/vistamobil.png" width={150} height={150} alt="xd"/>
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
            </Slider>
          </div>
          <motion.a whileHover={{ scale: 1.2, }} whileTap={{ scale: 0.8, }} target="_blank" className="flex relative left-[8rem] lg:left-[20rem] w-32 justify-end text-white text-base font-semibold cursor-pointer pt-5">View More
            <div className="ml-2">
              <Image src="/img/link.svg" width={23} height={23} alt=""></Image>
            </div>
          </motion.a> 
        </div>
        <div className="w-[300px] lg:w-[500px] full border-2 rounded-xl p-5  shadow-3xl mt-14">
          <h2 className="text-white text-4xl font-semibold text-center ">ToDo&apos;s App</h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:pl-5 pt-5">
            <Slider {...settings}>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image src="/img/vistamobil.png" width={150} height={150} alt="xd"/>
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image src="/img/vistamobil.png" width={150} height={150} alt="xd"/>
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image src="/img/vistamobil.png" width={150} height={150} alt="xd"/>
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
            </Slider>
          </div>
          <motion.a whileHover={{ scale: 1.2, }} whileTap={{ scale: 0.8, }} target="_blank" className="flex relative left-[8rem] lg:left-[20rem] w-32 justify-end text-white text-base font-semibold cursor-pointer pt-5">View More
            <div className="ml-2">
              <Image src="/img/link.svg" width={23} height={23} alt=""></Image>
            </div>
          </motion.a> 
        </div>
        <div className="w-[300px] lg:w-[500px] full border-2 rounded-xl p-5  shadow-3xl mt-14">
          <h2 className="text-white text-4xl font-semibold text-center ">NextJS Store</h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:pl-5 pt-5">
            <Slider {...settings}>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image src="/img/vistamobil.png" width={150} height={150} alt="xd"/>
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image src="/img/vistamobil.png" width={150} height={150} alt="xd"/>
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image src="/img/vistamobil.png" width={150} height={150} alt="xd"/>
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
            </Slider>
          </div>
          <motion.a whileHover={{ scale: 1.2, }} whileTap={{ scale: 0.8, }} target="_blank" className="flex relative left-[8rem] lg:left-[20rem] w-32 justify-end text-white text-base font-semibold cursor-pointer pt-5">View More
            <div className="ml-2">
              <Image src="/img/link.svg" width={23} height={23} alt=""></Image>
            </div>
          </motion.a> 
        </div>
        <div className="hidden lg:w-[500px] lg:flex flex-col justify-center items-center lg:items-end">
          <h1 className="text-white text-4xl lg:text-6xl font-bold">Innovation at</h1>
          <h1 className="text-white text-4xl lg:text-[4rem] font-bold">another level</h1>
        </div>
      </div>
    </section>
  );
}
