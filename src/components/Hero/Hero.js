'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import { motion } from 'framer-motion'; 
import { useTranslations } from 'next-intl';
import { useTypewriter } from 'react-simple-typewriter';
import { IconDownload, IconArrowRight } from '@/Icons';

const Hero = () => {

  const t = useTranslations('hero');
  const [typeEffect] = useTypewriter ({
    words: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
    loop: true,
    typeSpeed: 80,
    delaySpeed: 1500,
    deleteSpeed: 40,
  })

  return (
    <section className='h-screen flex flex-col items-center justify-center'> 

      <div className='lg:flex lg:w-full lg:px-32'>
        <div className='lg:w-1/2 lg:flex lg:flex-col lg:justify-center'>
          <h1 className='text-white text-2xl lg:text-5xl font-bold leading-6 md:leading-[2px]'>{t('title')}</h1>
          <h2 className='text-white text-4xl lg:text-6xl font-bold my-1'>{t('subtitle')}</h2>
          <h1 className='text-white text-2xl lg:text-5xl font-bold'>
            <span className='text-secondary h-14'>
            &#123; {typeEffect} &#125;
            </span>
          </h1>

          <div className='flex items-center mt-5 lg:mt-14'>            
            <a download="" href="/HV_Franky_Vargas.pdf" target="_blank" className="flex mr-4 rounded-lg bg-white text-dark p-1 lg:p-2 px-4 lg:px-6 text-base lg:text-lg font-semibold">{t('cv')}
              <IconDownload width={24} height={24} className="mt-[2px]" />
            </a> 

            <div className='flex items-center group'>
              <Link className='text-white text-base lg:text-lg font-semibold' href="/about">{t('learnMore')}</Link>
              <div className="ml-1 transition-transform duration-300 transform group-hover:translate-x-2">
                <IconArrowRight width={28} height={28} className="mt-1" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-[6rem] lg:top-[8rem] right-[5rem] lg:right-[15rem] z-30">
          <motion.svg className="w-[35px] lg:w-[70px] h-[35px] lg:h-[70px] opacity-50 lg:opacity-100" viewBox="0 0 24 24" fill="none" animate={{ rotate: 360 }} transition={{repeat: Infinity, duration: 15, ease: 'easeInOut', times: [0, 0.25, 0.5, 0.75, 1]}}>
            <path d="M4.2433 17.6513L10.5859 5.67095C11.0445 4.80456 11.2739 4.37136 11.5798 4.22973C11.8463 4.10637 12.1535 4.10637 12.42 4.22973C12.726 4.37136 12.9553 4.80456 13.414 5.67094L19.7565 17.6513C20.1668 18.4263 20.372 18.8138 20.3305 19.13C20.2943 19.4059 20.1448 19.6543 19.9179 19.8154C19.6579 19.9999 19.2194 19.9999 18.3425 19.9999H5.65737C4.78044 19.9999 4.34198 19.9999 4.08198 19.8154C3.85505 19.6543 3.70551 19.4059 3.66932 19.13C3.62785 18.8138 3.833 18.4263 4.2433 17.6513Z" stroke="#00bb01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </motion.svg>
        </div>

        <div className="absolute top-[10rem] lg:top-[14rem] right-[4rem] lg:right-[14rem] z-30">
          <motion.svg className="w-[20px] lg:w-[50px] h-[20px] lg:h-[50px] opacity-50 lg:opacity-100" viewBox="0 0 24 24" fill="none" animate={{ rotate: -360, y: [0, -15, 0, 15, 0], x: [0, 15, 0, -15, 0] }} transition={{repeat: Infinity, duration: 20, ease: 'easeInOut'}}>
            <path d="M4.2433 17.6513L10.5859 5.67095C11.0445 4.80456 11.2739 4.37136 11.5798 4.22973C11.8463 4.10637 12.1535 4.10637 12.42 4.22973C12.726 4.37136 12.9553 4.80456 13.414 5.67094L19.7565 17.6513C20.1668 18.4263 20.372 18.8138 20.3305 19.13C20.2943 19.4059 20.1448 19.6543 19.9179 19.8154C19.6579 19.9999 19.2194 19.9999 18.3425 19.9999H5.65737C4.78044 19.9999 4.34198 19.9999 4.08198 19.8154C3.85505 19.6543 3.70551 19.4059 3.66932 19.13C3.62785 18.8138 3.833 18.4263 4.2433 17.6513Z" stroke="#424242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </motion.svg>
        </div>

        <div className="absolute top-[8rem] lg:top-[12rem] lg:right-[40rem] z-30">
          <motion.svg className="w-[35px] lg:w-[70px] h-[35px] lg:h-[70px] opacity-50 lg:opacity-100" viewBox="0 0 24 24" fill="none" animate={{ rotate: -360 }} transition={{repeat: Infinity, duration: 20, ease: 'linear'}}>
            <rect x="4" y="4" width="16" height="16" rx="2" stroke="#00bb01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect>
          </motion.svg>
        </div>

        <div className="absolute top-[6rem] lg:top-[10rem] left-[8rem] lg:left-auto lg:right-[35rem] z-30">
          <motion.svg className="w-[20px] lg:w-[50px] h-[20px] lg:h-[50px] opacity-50 lg:opacity-100" viewBox="0 0 24 24" fill="none" animate={{ rotate: 360, y: [0, -15, 0, 15, 0], x: [0, 15, 0, -15, 0] }} transition={{repeat: Infinity, duration: 15, ease: 'easeInOut', times: [0, 0.25, 0.5, 0.75, 1]}}>
            <rect x="4" y="4" width="16" height="16" rx="2" stroke="#424242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect>
          </motion.svg>
        </div>

        <div className="absolute top-[38rem] lg:top-[34rem] left-[4rem] lg:left-auto lg:right-[32rem] z-30">
          <motion.svg className="w-[35px] lg:w-[70px] h-[35px] lg:h-[70px] opacity-50 lg:opacity-100" viewBox="0 0 24 24" fill="none" animate={{ rotate: 360, y: [0, -15, 0, 15, 0], x: [0, 15, 0, -15, 0] }} transition={{repeat: Infinity, duration: 15, ease: 'easeInOut', times: [0, 0.25, 0.5, 0.75, 1]}}>
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#00bb01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </motion.svg>
        </div>

        <div className="absolute top-[43rem] lg:top-[31rem] left-[6rem] lg:left-auto lg:right-[38rem] z-30">
          <motion.svg className="w-[20px] lg:w-[50px] h-[20px] lg:h-[50px] opacity-50 lg:opacity-100" viewBox="0 0 24 24" fill="none" animate={{ rotate: -360, y: [0, -15, 0, 15, 0], x: [0, 15, 0, -15, 0] }} transition={{repeat: Infinity, duration: 20, ease: 'easeInOut'}}>
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#424242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </motion.svg>
        </div>

        <div className="absolute top-[38rem] lg:top-[26rem] right-[3rem] lg:right-[10rem] z-30">
          <motion.svg className="w-[35px] lg:w-[70px] h-[35px] lg:h-[70px] opacity-50 lg:opacity-100" fill="#00bb01" viewBox="-3.5 0 19 19" animate={{ rotate: [0, 90, 0] }} transition={{repeat: Infinity, times: [0, 0.4, 0.2, 1], duration: 4, ease: ["easeInOut", "easeInOut", "easeInOut"]}}>
            <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path>
          </motion.svg>
        </div>

        <div className="absolute top-[42rem] lg:top-[32rem] right-[6rem] lg:right-[16rem] z-30">
          <motion.svg className="w-[20px] lg:w-[50px] h-[20px] lg:h-[50px] opacity-50 lg:opacity-100" fill="#424242" viewBox="-3.5 0 19 19" animate={{ rotate: 360, y: [0, -15, 0, 15, 0], x: [0, 15, 0, -15, 0] }} transition={{repeat: Infinity, duration: 15, ease: 'easeInOut', times: [0, 0.25, 0.5, 0.75, 1]}}>
            <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path>
          </motion.svg>
        </div>

        <motion.div className='hidden lg:w-1/2 lg:flex items-center justify-center' animate={{y: [15, 0, -15, 0, 15], x: [0, 15, 0, -15, 0] }} transition={{repeat: Infinity, duration: 20, ease: 'easeInOut'}}>
          <Image className='relative' src="/img/picture-franky.png" width={500} height={500} alt="" />
        </motion.div>

        <div className='relative top-16 flex lg:hidden lg:w-1/2 items-center justify-center'>
          <Image  src="/img/picture-franky.png" width={300} height={300} alt="" />
        </div>        
      
      </div>

    </section>
  )
}

export default Hero;