import React from 'react'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section className='flex flex-col items-star justify-center space-y-5'>
      {/* <div className='flex items-center justify-center'>
        <Image className=' absolute -z- top-40 left-6 opacity-20' src="/img/mainIconsdark.svg" width={400} height={400} alt="" />
      </div> */}

      <div>
        <h1 className='text-tertiary text-2xl font-bold'>Hey There!</h1>
        <h2 className='text-tertiary text-4xl font-bold'>Im Franky Vargas</h2>
        <h1 className='text-tertiary text-2xl font-bold'>Full <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'> &#123; Stack Developer &#125; </span></h1>
      </div>

      <div className='flex items-center justify-center'>
        <Image className='relative' src="/img/picture-franky.png" width={300} height={300} alt="" />
      </div>
    </section>
  )
}

