"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

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
      {/* <div className="w-full h-screen flex flex-col lg:flex-row justify-around items-center mt-14">
        
      </div> */}
      {/* flex flex-col lg:flex-row */}
      <div className="w-full h-full mt-28 grid grid-cols-1 lg:grid-cols-2 place-items-center px-28">
        <div className="lg:w-[500px]  flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-white text-4xl lg:text-7xl font-bold">
            Projects
          </h1>
          <h1 className="text-white text-4xl lg:text-7xl font-bold">
            Development
          </h1>
        </div>
        <div className="w-[300px] lg:w-[500px] full border-2 rounded-xl p-5  shadow-3xl mt-14">
          <h2 className="text-white text-4xl font-semibold text-center ">
            Univalle App
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:pl-5 pt-5">
            <Slider {...settings}>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image
                  src="/img/vistamobil.png"
                  width={150}
                  height={150}
                  alt="xd"
                />
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image
                  src="/img/vistamobil.png"
                  width={150}
                  height={150}
                  alt="xd"
                />
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image
                  src="/img/vistamobil.png"
                  width={150}
                  height={150}
                  alt="xd"
                />
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
            </Slider>
          </div>
          {/* Agrega más elementos de carrusel aquí */}
        </div>
        <div className="w-[300px] lg:w-[500px] full border-2 rounded-xl p-5  shadow-3xl mt-14">
          <h2 className="text-white text-4xl font-semibold text-center ">
            Univalle App
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:pl-5 pt-5">
            <Slider {...settings}>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image
                  src="/img/vistamobil.png"
                  width={150}
                  height={150}
                  alt="xd"
                />
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image
                  src="/img/vistamobil.png"
                  width={150}
                  height={150}
                  alt="xd"
                />
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image
                  src="/img/vistamobil.png"
                  width={150}
                  height={150}
                  alt="xd"
                />
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
            </Slider>
          </div>
        </div>
        <div className="w-[300px] lg:w-[500px] full border-2 rounded-xl p-5  shadow-3xl mt-14">
          <h2 className="text-white text-4xl font-semibold text-center ">
            Univalle App
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:pl-5 pt-5">
            <Slider {...settings}>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image
                  src="/img/vistamobil.png"
                  width={150}
                  height={150}
                  alt="xd"
                />
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image
                  src="/img/vistamobil.png"
                  width={150}
                  height={150}
                  alt="xd"
                />
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image
                  src="/img/vistamobil.png"
                  width={150}
                  height={150}
                  alt="xd"
                />
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
            </Slider>
          </div>
        </div>
        <div className="w-[300px] lg:w-[500px] full border-2 rounded-xl p-5  shadow-3xl mt-14">
          <h2 className="text-white text-4xl font-semibold text-center ">
            Univalle App
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:pl-5 pt-5">
            <Slider {...settings}>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image
                  src="/img/vistamobil.png"
                  width={150}
                  height={150}
                  alt="xd"
                />
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image
                  src="/img/vistamobil.png"
                  width={150}
                  height={150}
                  alt="xd"
                />
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
              <div className=" content-slider flex flex-col lg:flex-row items-center justify-center">
                <Image
                  src="/img/vistamobil.png"
                  width={150}
                  height={150}
                  alt="xd"
                />
                <p className="text-white pt-5 text-sm lg:text-base font-medium text-center pl-3">
                  Sistema de gestión de tickets para bono de alimentación,
                  prestamos de utensilios, optimización en tiempos de respuesta
                  a pqrs
                </p>
              </div>
            </Slider>
          </div>
        </div>
        <div className="lg:w-[500px]  flex flex-col justify-center items-center lg:items-end">
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            Innovation at
          </h1>
          <h1 className="text-white text-4xl lg:text-[4rem] font-bold">
            another level
          </h1>
        </div>
      </div>
    </section>
  );
}
