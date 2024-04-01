import React from 'react';
import Image from 'next/image';

export const About = () => {
  return (
    <section className=' h-screen flex flex-col justify-center'>

      <div className="">
        <Image className=' absolute z-0 opacity-25 top-[44rem]' src="/img/mainIconsdark.svg" width={300} height={300} alt="" />
        <div>
          <h1 className='text-tertiary text-3xl font-bold text-center'>Transforming ideas into exceptional digital solutions.</h1>
          <p className='text-tertiary my-4 mx-4 text-center text-base font-normal'> Unifying creativity with code to bring ideas to digital realities. Im passionate about creating immersive web experiences that captivate and inspire. Explore my portfolio and witness the perfect blend of innovation and technical expertise in each project.</p>
        </div>
      </div>


    </section>
  );
};
