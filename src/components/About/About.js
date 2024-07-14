'use client'
import React from "react";
import { useTranslations } from "next-intl";

import { carouselData } from './config/index'
import Carousel from './config/Carousel'

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
          <svg className="mt-4 w-[35px] lg:w-[50px] h-[35px] lg:h-[50px]" viewBox="0 0 24 24" fill="none">
            <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
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
            </div>
          </div>

          <div className="relative grid before:absolute before:left-[-20px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-1">
            <div className="relative pb-5 md:col-span-2">
              <div className="sticky top-0">
                <span className=" text-secondary -left-[29px] absolute rounded-full text-5xl">•</span>
                <h3 className="text-lg font-bold text-secondary">{t('thirdJob.title')}</h3>
                <h4 className="font-semibold text-lg leading-none text-gray-600 dark:text-white">{t('thirdJob.company')}</h4>
                <time className="p-0 m-0 text-xs leading-none text-gray-600/80 dark:text-white/80">{t('thirdJob.date')}</time>
              </div>
            </div>
            <div className="relative flex flex-col gap-2 md:col-span-3">
              <p className=" text-gray-600 dark:text-gray-300">{t('thirdJob.firstDescription')}</p>
              <p className=" text-gray-600 dark:text-gray-300">{t('thirdJob.secondDescription')}</p>
              <p className=" text-gray-600 dark:text-gray-300">{t('thirdJob.thirdDescription')}</p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 w-[10rem] lg:w-[20rem] h-[10rem] lg:h-[20rem] rounded-t-full absolute top-[152rem] lg:top-[39rem] right-[7.3rem] lg:right-[16.5rem] z-[0] flex justify-center cursor-pointer hover:-translate-y-5 transition-all ease-out duration-300">
          <svg className="mt-4 w-[35px] lg:w-[50px] h-[35px] lg:h-[50px]" viewBox="0 0 24 24" fill="#ffff">
            <path d="M17.673 5.606a3326.02 3326.02 0 0 1-5.671-2.674L.138 8.524l2.03.98L2 9.531V20h1v-9.626l.72-.124.28.135v5.288c0 .914 5.206 3.533 6.249 4.049a3.89 3.89 0 0 0 3.48-.026C20 16.486 20 15.895 20 15.673v-5.288l3.854-1.857s-3.8-1.801-6.181-2.922zM19 15.504a51.526 51.526 0 0 1-5.726 3.302 2.884 2.884 0 0 1-2.582.02A40.184 40.184 0 0 1 5 15.521v-4.655l7 3.373 7-3.373zm-7-2.373L5.416 9.958l6.469-1.115-.17-.987-7.85 1.354-1.403-.676 9.537-4.495c.825.393 8.523 4.014 9.542 4.494z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
        </div>
        <div className="mt-40 lg:mt-0 bg-neutral-900 lg:w-1/2 h-auto container px-5 lg:px-10 py-8 rounded-xl space-y-10 relative z-10">
          <h2 className="text-3xl text-center font-bold text-white font-jetbrains">{t('education')}</h2>

          <div className="bg-neutral-900 p-5 rounded-md w-full space-y-5 border-2 border-white/10">
            <div className="space-y-2">
              <div className="flex space-x-2 items-center">
                <svg width="25" height="25" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31 0H0V30H31V0Z" fill="#e30512"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M2 2H19V11.9499C19 16.3774 15.2795 20 10.7323 20H10.0819C5.63681 20 2 16.4589 2 12.1307V2Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M11 11L30 11.0045L20.6046 28L11 11Z" fill="#FEFEFE" stroke="#e30512" strokeWidth="0.5" strokeMiterlimit="22.9256"/>
                </svg>
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
                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.6011 0C14.7091 -1.85685e-06 13.8536 0.353648 13.2229 0.983146C12.5922 1.61264 12.2379 2.46643 12.2379 3.35668C12.2378 3.79748 12.3248 4.23397 12.4938 4.64122C12.6629 5.04847 12.9106 5.41851 13.2229 5.73021C13.5352 6.04191 13.906 6.2891 14.314 6.45779C14.7221 6.62648 15.1594 6.71336 15.6011 6.71336C16.493 6.71335 17.3485 6.35971 17.9792 5.73021C18.6099 5.10071 18.9643 4.24692 18.9643 3.35668C18.9643 2.46644 18.6099 1.61264 17.9792 0.983146C17.3485 0.353649 16.493 2.36327e-06 15.6011 0ZM19.9738 7.74868L19.9706 10.8232L17.2613 7.74999L14.7068 7.75148L14.7064 12.2632L16.5817 12.2617L16.6088 9.27236L19.2195 12.2601L21.8461 12.2692L21.8693 7.76221L19.9738 7.74868ZM8.44076 7.74999L8.40522 12.2671L13.8574 12.261L13.8622 11.2551L10.4032 11.252L10.4175 10.4007L13.493 10.3869V9.42487L10.4317 9.48125V8.76991L13.7473 8.76067L13.7537 7.75512L8.44076 7.74999ZM27.2484 7.75111L25.0758 7.75157L21.9977 12.2655L23.9537 12.2686L24.4212 11.4066L27.5928 11.4223L28.0642 12.2661L30.1637 12.2645L27.2484 7.75111ZM4.753 7.7512C4.64985 7.75109 4.5329 7.75145 4.39765 7.75251C3.75513 7.75709 3.72041 7.75859 3.35083 7.80431C2.82615 7.87038 2.41759 7.98421 2.1048 8.15228C1.82593 8.302 1.61567 8.5193 1.53516 8.74088C1.51061 8.80786 1.48939 8.9356 1.48429 9.03761C1.47632 9.20985 1.51141 9.37301 1.58522 9.51849C1.62684 9.59954 1.63766 9.61639 1.71323 9.70498C1.90479 9.92907 2.18882 10.0711 2.75336 10.2241C3.11869 10.3228 3.4764 10.3947 4.24522 10.5226C4.814 10.6171 4.96146 10.6472 5.14795 10.7066C5.30387 10.7568 5.45899 10.8361 5.51407 10.8955C5.58533 10.9708 5.56842 11.0987 5.47675 11.1773C5.37408 11.2676 5.17922 11.3371 4.94781 11.3663C4.7181 11.3948 4.23579 11.389 4.00353 11.3541C3.63989 11.2989 3.41693 11.1777 3.36777 11.0063C3.36139 10.9837 3.35182 10.9176 3.34911 10.86L3.34273 10.7555L3.20307 10.7524C3.12591 10.7509 2.68853 10.7525 2.23079 10.7555L1.39752 10.7616V10.8219C1.39752 10.9005 1.41794 11.0585 1.43914 11.1463C1.55696 11.6354 1.93672 11.9432 2.62839 12.1113C2.87761 12.1715 3.23954 12.2266 3.53791 12.2492C3.8439 12.2719 4.46774 12.2793 4.86867 12.2651C6.28678 12.2133 7.24121 11.8754 7.5328 11.3236C7.60486 11.1864 7.63882 11.0461 7.63882 10.8855C7.63966 10.6782 7.58638 10.5025 7.47106 10.3336C7.31514 10.1037 7.10313 9.95491 6.72845 9.81027C6.38939 9.67982 6.02836 9.59784 5.20784 9.46323C4.42631 9.33523 4.20247 9.2902 3.9575 9.21159C3.78458 9.15638 3.62529 9.06265 3.59138 8.99579C3.57193 8.95741 3.57193 8.8846 3.59226 8.84113C3.64311 8.72995 3.87194 8.64557 4.19065 8.61963C4.4034 8.60296 4.72125 8.61202 4.92808 8.64138C5.15439 8.67395 5.3638 8.75083 5.45196 8.83534C5.49102 8.8722 5.53422 8.95494 5.55543 9.03182C5.56659 9.07525 5.57489 9.08942 5.58844 9.09202C5.598 9.09508 6.01482 9.0951 6.51323 9.0951L7.42017 9.09202L7.42335 9.03686C7.42654 8.96667 7.40725 8.83788 7.3784 8.74088C7.22837 8.23168 6.67485 7.92486 5.68312 7.8003C5.38835 7.76359 5.1998 7.75181 4.753 7.7512ZM26.0493 8.86129L27.0234 10.5026L25.018 10.4903L26.0493 8.86129ZM14.3646 13.223L0 13.2337V15.6221H4.63034C9.06812 15.6221 9.26401 15.6251 9.39798 15.6881C9.58002 15.7712 9.68613 15.9479 9.71017 16.2041C9.74461 16.585 9.80581 16.1855 6.24388 22.4001L4.13035 26.0291L5.83791 27.6337L14.3646 13.223ZM16.6003 13.2352L25.1387 27.6062L26.8777 26.0213L24.7356 22.3831C21.165 16.2497 21.2317 16.5527 21.2662 16.1769C21.2902 15.924 21.3967 15.7497 21.5793 15.6677C21.7135 15.6062 21.9101 15.6026 26.3588 15.6026H31V13.2452L16.6003 13.2352ZM15.4434 15.7482L7.67212 28.9658L9.69487 29.9247L14.123 22.375L14.8641 21.0458C14.9604 20.8732 15.078 20.8063 15.4328 20.8054C15.758 20.8062 15.8881 20.8924 16.0055 21.0426L16.8216 22.4068L21.3479 30L23.4148 28.8342L15.4434 15.7482Z" fill="#16A34A"/>
                </svg>
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
