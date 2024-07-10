'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import { useTypewriter } from 'react-simple-typewriter';
import { useTranslations } from 'next-intl';

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
          <h1 className='text-tertiary text-2xl lg:text-5xl font-bold leading-[2px]'>{t('title')}</h1>
          <h2 className='text-tertiary text-4xl lg:text-6xl font-bold'>{t('subtitle')}</h2>
          <h1 className='text-tertiary text-2xl lg:text-5xl font-bold'>
            <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text h-14'>
            &#123; {typeEffect} &#125;
            </span>
          </h1>

          <div className='flex items-center mt-5 lg:mt-14'>            
            <a download="" href="/HVFrankyHelyVargasLopez.pdf" target="_blank" className="flex mr-4 rounded-lg bg-white text-dark p-1 lg:p-2 px-4 lg:px-6 text-base lg:text-lg font-semibold">{t('cv')}
              <div className="w-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-full h-auto  ml-1">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"></path>
                </svg>
              </div>
            </a> 

            <div className='flex items-center group'>
              <Link className='text-white text-base lg:text-lg font-semibold' href="/about">{t('learnMore')}</Link>
              <div className="ml-2 transition-transform duration-300 transform group-hover:translate-x-4  ">
                <Image className='hidden lg:block' src="/img/arrow-right.svg" width={20} height={20} alt="" />
                <Image className='lg:hidden' src="/img/arrow-right.svg" width={20} height={20} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className='hidden lg:w-1/2 lg:flex items-center justify-center'>
          <Image className='relative' src="/img/picture-franky.png" width={500} height={500} alt="" />
        </div>

        <div className='relative top-16 flex lg:hidden lg:w-1/2 items-center justify-center'>
          <Image  src="/img/picture-franky.png" width={300} height={300} alt="" />
        </div>        
      
      </div>

    </section>
  )
}

export default Hero;