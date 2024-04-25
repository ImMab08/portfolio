/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="About" className="h-full  flex flex-col justify-center">
      <section className="h-screen flex flex-col justify-center items-center">
        <div className=" lg:w-1/2 lg:flex lg:flex-col lg:items-center lg:justify-center">
          <h1 className="text-tertiary text-3xl lg:text-6xl font-bold text-center">
            Transforming ideas into exceptional digital solutions.
          </h1>
          <p className="text-tertiary my-4 mx-4 text-center text-sm lg:text-base font-normal">
            Unifying creativity with code to bring ideas to digital realities.
            Im passionate about creating immersive web experiences that
            captivate and inspire. Explore my portfolio and witness the perfect
            blend of innovation and technical expertise in each project.
          </p>
        </div>
      </section>

      <div className="flex flex-col h-full w-full items-center justify-center bg-[#131316]">
        <Image src="/img/divbar.png" width={2000} height={100} />
        <section className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
          <h2 className="flex items-center justify-center md:justify-start my-6 text-5xl md:text-6xl font-bold text-white">Experience</h2>
          <ol className="relative mt-16"> 
            <li className="">
              <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
                <div className="relative pb-12 md:col-span-2">
                  <div className="sticky top-0">
                    <span className=" text-green-600 -left-[47px] absolute rounded-full text-5xl">•</span> 
                    <h3 className="text-xl font-bold text-green-600">Junior Frontend Developer</h3> 
                    <h4 className="font-semibold text-xl text-gray-600 dark:text-white">@Maxwell Leadership</h4> 
                    <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">May 2023 - March 2024 (9 months)</time> 
                  </div> 
                </div> 
                <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.
                </div> 
              </div> 
            </li>
            <li className="">
              <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
                <div className="relative pb-12 md:col-span-2">
                  <div className="sticky top-0">
                    <span className=" text-green-600 -left-[47px] absolute rounded-full text-5xl">•</span> 
                    <h3 className="text-xl font-bold text-green-600">Junior Frontend Developer</h3> 
                    <h4 className="font-semibold text-xl text-gray-600 dark:text-white">@Klazia</h4> 
                    <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">September 2023 - March 2024 (6 months)</time> 
                  </div> 
                </div> 
                <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub. 
                </div> 
              </div> 
            </li>
            <li className="">
              <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
                <div className="relative pb-12 md:col-span-2">
                  <div className="sticky top-0">
                    <span className=" text-green-600 -left-[47px] absolute rounded-full text-5xl">•</span> 
                    <h3 className="text-xl font-bold text-green-600">React Native Teacher</h3> 
                    <h4 className="font-semibold text-xl text-gray-600 dark:text-white">@Klazia</h4> 
                  </div> 
                </div> 
                <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub. 
                </div> 
              </div> 
            </li>
          </ol> 
        </section>
        <Image src="/img/divbarbottom.png" width={2000} height={100} />
      </div>

      <div className="flex flex-col lg:grid lg:grid-flow-col grid-cols-1 lg:grid-cols-3 h-full w-full items-center justify-center ">
        <div className="flex flex-col items-center mt-10 lg:mt-[10rem]">
          <h1 className="text-white text-3xl lg:text-4xl font-bold">BIOGRAPHY</h1>
          <Image className="  z-0 opacity-80 " src="/img/mainIconsdark.svg" width={600} height={600} alt=""/>
        </div>
        <div clasName="flex flex-col items-center mt-[2rem]">
          <h1 className="text-white text-3xl lg:text-4xl text-center font-bold">PROGRAMMING LANGUAGES</h1>
          <Image className="  z-0 opacity-80 " src="/img/mainIconsdarkcopy.svg" width={600} height={600} alt=""/>
        </div>
        <div className="flex flex-col items-center lg:mt-[10rem]">
          <h1 className="text-white text-3xl lg:text-4xl font-bold">SKILLS</h1>
          <Image className="  z-0 opacity-80 " src="/img/mainIconsdark.svg" width={600} height={600} alt=""/>
        </div>
      </div>
    </section>
  );
};

export default About;
