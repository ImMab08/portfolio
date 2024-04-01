'use client'
import React from 'react'
import Image from 'next/image'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  const [typeEffect] = useTypewriter ({
    words: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
    loop: true,
    typeSpeed: 80,
    delaySpeed: 1500,
    deleteSpeed: 40,
  })
  return (
    <section className=' h-screen flex flex-col items-star justify-center space-y-5  '>

      <div className=''>
        <div className=''>
          <h1 className='text-tertiary text-2xl font-bold'>Hey There!</h1>
          <h2 className='text-tertiary text-4xl font-bold'>Im Franky Vargas</h2>
          <h1 className='text-tertiary text-2xl font-bold'>
            <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
            &#123; {typeEffect} &#125;
            </span>
          </h1>
        </div>

        <div className='flex items-center justify-center'>
          <Image className='relative' src="/img/picture-franky.png" width={300} height={300} alt="" />
        </div>        
      </div>

      <div className='flex items-center justify-center'>
        <Image className='' src="/img/arrow-down.svg" width={30} height={30} alt="" />
      </div>
    </section>
  )
}

