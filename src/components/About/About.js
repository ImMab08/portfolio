import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="About" className='h-full  flex flex-col justify-center'>

      <section className='h-screen flex flex-col justify-center items-center'>
        <div className=' lg:w-1/2 lg:flex lg:flex-col lg:items-center lg:justify-center'>
          <h1 className='text-tertiary text-3xl lg:text-6xl font-bold text-center'>Transforming ideas into exceptional digital solutions.</h1>
          <p className='text-tertiary my-4 mx-4 text-center text-sm lg:text-base font-normal'> Unifying creativity with code to bring ideas to digital realities. Im passionate about creating immersive web experiences that captivate and inspire. Explore my portfolio and witness the perfect blend of innovation and technical expertise in each project.</p>
        </div>
      </section>
      
      {/* <div className="flex items-end ">
        <div className="mr-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-[#131316]"></div>
        <div className="flex justify-between mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
          <svg viewBox="0 0 56 48" aria-hidden="true" className="-ml-1.5 mb-[calc(-1/16*1rem)] w-14 flex-none overflow-visible fill-[#131316]">
            <path d="M 2.686 3 H -4 V 48 H 56 V 47 H 53.314 A 8 8 0 0 1 47.657 44.657 L 8.343 5.343 A 8 8 0 0 0 2.686 3 Z"></path>
          </svg>
          <svg viewBox="0 0 56 48" aria-hidden="true" className="-mr-1.5 mb-[calc(-1/16*1rem)] w-14 flex-none overflow-visible fill-[#131316]">
            <path d="M 53.314 3 H 60 V 48 H 0 V 47 H 2.686 A 8 8 0 0 0 8.343 44.657 L 47.657 5.343 A 8 8 0 0 1 53.314 3 Z"></path>
          </svg>
        </div>
        <div className="ml-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-[#131316]"></div>
      </div> */}
      <div className='flex flex-col lg:grid lg:grid-flow-col grid-cols-1 lg:grid-cols-3 h-full w-full items-center justify-center bg-[#131316]'>
        <div className='flex flex-col items-center mt-10 lg:mt-[10rem]'>
          <h1 className='text-white text-3xl lg:text-4xl font-bold'>BIOGRAPHY</h1>
          <Image className='  z-0 opacity-80 ' src="/img/mainIconsdark.svg" width={600} height={600} alt="" />
        </div>
        <div className='flex flex-col items-center mt-[2rem]'>
          <h1 className='text-white text-3xl lg:text-4xl text-center font-bold'>PROGRAMMING LANGUAGES</h1>
          <Image className='  z-0 opacity-80 ' src="/img/mainIconsdarkcopy.svg" width={600} height={600} alt="" />
        </div>
        <div className='flex flex-col items-center lg:mt-[10rem]'>
          <h1 className='text-white text-3xl lg:text-4xl font-bold'>SKILLS</h1>
          <Image className='  z-0 opacity-80 ' src="/img/mainIconsdark.svg" width={600} height={600} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;