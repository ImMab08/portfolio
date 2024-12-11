'use client'
import React from "react";
import { useTranslations } from "next-intl";

import Carousel from './config/Carousel'
import { carouselData } from './config/index'
import { IconCode, IconEducation, IconLogoSena, IconLogoUnivalle } from "@/icons";

const About = () => {
  const t = useTranslations("about");

  return (
    <section className="h-full flex flex-col justify-center px-10 lg:px-32">
      <svg className="absolute opacity-80 inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true"><defs><pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse"><path d="M.5 200V.5H200" fill="none"></path></pattern></defs><svg x="50%" y="-1" className="overflow-visible fill-green-800/10"><path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth="0"></path></svg><rect width="100%" height="100%" strokeWidth="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"></rect></svg>

      <section className="h-screen flex justify-center items-center relative">
        <div className="flex flex-col lg:w-[58%] space-y-5 lg:space-y-10">
          <h1 className="text-white text-3xl lg:text-5xl text-center font-bold">
            {t('title')}
            <span className="text-secondary"> {t("spanTitle")} </span> 
            {t('secondTitle')}
          </h1>
          <p className="text-white text-sm lg:text-base text-center font-normal">{t('description')}</p>
        </div>
      </section>

      <section className="w-full h-auto lg:h-full lg:flex lg:space-x-10 mb-32">
        <div className="bg-neutral-900 w-[10rem] lg:w-[20rem] h-[10rem] lg:h-[20rem] rounded-t-full absolute top-[47rem] lg:top-[39rem] left-[7.3rem] lg:left-[19rem] z-[0] flex justify-center cursor-pointer hover:-translate-y-5 transition-all ease-out duration-300">
          <IconCode width={42} height={42} className="mt-4"/>
        </div>

        <div className="relative z-10 bg-neutral-900 lg:w-1/2 h-full container px-10 py-8 rounded-xl space-y-10">
          <h2 className="text-3xl text-center font-bold text-white font-jetbrains">{t('experience')}</h2>
          <div className="relative grid before:absolute before:left-[-20px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-1">
            <div className="relative pb-5 md:col-span-2">
              <div className="sticky top-0">
                <span className=" text-secondary -left-[29px] absolute rounded-full text-5xl">•</span>
                <h3 className="text-lg font-bold text-secondary">{t('firstJob.title')}</h3>
                <h4 className="font-semibold text-lg leading-none text-gray-600 dark:text-white">{t('firstJob.company')}</h4>
                <time className="p-0 m-0 text-xs leading-none text-gray-600/80 dark:text-white/80">{t('firstJob.date')}</time>
              </div>
            </div>
            <div className="relative flex flex-col gap-2 md:col-span-3">
              <p className=" text-gray-600 dark:text-gray-300">{t('firstJob.firstDescription')}</p>
              <p className=" text-gray-600 dark:text-gray-300">{t('firstJob.secondDescription')}</p>
              <p className=" text-gray-600 dark:text-gray-300">{t('firstJob.thirdDescription')}</p>
            </div>
          </div>
          
          <div className="relative grid before:absolute before:left-[-20px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-1">
            <div className="relative pb-5 md:col-span-2">
              <div className="sticky top-0">
                <span className=" text-secondary -left-[29px] absolute rounded-full text-5xl">•</span>
                <h3 className="text-lg font-bold text-secondary">{t('secondJob.title')}</h3>
                <h4 className="font-semibold text-lg leading-none text-gray-600 dark:text-white">{t('secondJob.company')}</h4>
                <time className="p-0 m-0 text-xs leading-none text-gray-600/80 dark:text-white/80">{t('secondJob.date')}</time>
              </div>
            </div>
            <div className="relative flex flex-col gap-2 md:col-span-3">
              <p className=" text-gray-600 dark:text-gray-300">{t('secondJob.firstDescription')}</p>
              <p className=" text-gray-600 dark:text-gray-300">{t('secondJob.secondDescription')}</p>
              <p className=" text-gray-600 dark:text-gray-300">{t('secondJob.thirdDescription')}</p>
              <p className=" text-gray-600 dark:text-gray-300">{t('secondJob.quarterDescription')}</p>
              <p className=" text-gray-600 dark:text-gray-300">{t('secondJob.fifthDescription')}</p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 w-[10rem] lg:w-[20rem] h-[10rem] lg:h-[20rem] rounded-t-full absolute top-[152rem] lg:top-[39rem] right-[7.3rem] lg:right-[16.5rem] z-[0] flex justify-center cursor-pointer hover:-translate-y-5 transition-all ease-out duration-300">
          <IconEducation width={42} height={42} className="mt-4"/>
        </div>
        <div className="mt-40 lg:mt-0 bg-neutral-900 lg:w-1/2 h-auto container px-5 lg:px-10 py-8 rounded-xl space-y-10 relative z-10">
          <h2 className="text-3xl text-center font-bold text-white font-jetbrains">{t('education')}</h2>

          <div className="bg-neutral-900 p-5 rounded-md w-full space-y-5 border-2 border-white/10">
            <div className="space-y-2">
              <div className="flex space-x-2 items-center">
                <IconLogoUnivalle width={25} height={25} />
                <h3 className="text-xl font-bold text-red-600">{t("firstEducation.title")}</h3>
              </div>
              <h4 className="font-semibold text-sm text-gray-600 dark:text-white">{t("firstEducation.profession")}</h4>
            </div>
            <div>
              <p className="text-sm text-white/60">{t("firstEducation.description")}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-white text-xs hover:text-green-500 py-1 px-4 bg-white/10 rounded-xl">{t("firstEducation.certification")}</p>
              <time className="text-end text-xs text-gray-200/40">{t("firstEducation.date")}</time>
            </div>
          </div>

          <div className="bg-neutral-900 p-5 rounded-md w-full space-y-5 border-2 border-white/10">
            <div className="space-y-2">
              <div className="flex space-x-2 items-center">
                <IconLogoSena width={30} height={30} />
                <h3 className="text-xl font-bold text-green-600">{t("secondEducation.title")}</h3>
              </div>
              <h4 className="font-semibold text-sm text-gray-600 dark:text-white">{t("secondEducation.profession")}</h4>
            </div>
            <div>
              <p className="text-sm text-white/60">{t("secondEducation.description")}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-white text-xs hover:text-green-500 py-1 px-4 bg-white/10 rounded-xl">{t("secondEducation.certification")}</p>
              <time className="text-end text-xs text-gray-200/40">{t("secondEducation.date")}</time>
            </div>
          </div>

          {carouselData.map((items, index) => (
            <Carousel key={index} items={items} />
          ))}
        </div>

      </section>      
    </section>
  );
};

export default About;
