import React from 'react';
import Image from 'next/image';

export const About = () => {
  return (
    <section id="About" className=' h-screen flex flex-col justify-center'>

      <div className='flex flex-col lg:justify-center lg:items-center'>
        <div className=' lg:w-1/2 mt-40 flex flex-col lg:justify-center'>
          <h1 className='text-tertiary text-3xl lg:text-6xl font-bold text-center'>Transforming ideas into exceptional digital solutions.</h1>
          <p className='text-tertiary my-4 mx-4 text-center text-sm lg:text-base font-normal'> Unifying creativity with code to bring ideas to digital realities. Im passionate about creating immersive web experiences that captivate and inspire. Explore my portfolio and witness the perfect blend of innovation and technical expertise in each project.</p>
          <div className='flex flex-col items-center justify-center'>
            <Image className=' relative z-0 opacity-80 lg:top-[25rem]' src="/img/mainIconsdark.svg" width={600} height={600} alt="" />
          </div>
        </div>
      </div>

      
    </section>
  );
};
