import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import { info } from './config/info'
import { useTranslations } from 'next-intl'

export default function Dashboard() {
  const t = useTranslations('projects')

  const projects = info.map(({id, link, img}) => {
    return(
      <Link key={id} className='relative group flex space-x-2 p-2 border border-white/40 rounded-lg cursor-pointer hover:border-green-500' href={link}>
        <div className='w-[150px] h-auto flex-shrink-0'>
          <Image width={250} height={150} className='object-cover rounded-sm' src={img} alt='' />
        </div>
        <div className='flex flex-col justify-start w-auto'>
          <h2 className='text-white font-bold'>{t(`${id}.title`)}</h2>
          <p className='text-white/50 font-normal text-sm'>{t(`${id}.description`)}</p>
        </div>
        <div className='absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg cursor-pointer'>
          <span className='text-white font-bold'>View more</span>
          <Image className='hidden lg:block mt-[5.5px] ml-1' src="/img/arrow-right.svg" width={15} height={15} alt="" />
        </div>
      </Link>
    )
  })

  return (
    <section className='w-auto h-full border-r bg-primary border-white/20'>
      <div className='top-0 py-2 px-5 border-b border-white/20'>
        <h1 className='text-center text-white text-lg font-bold'>{t('dashboard.title')}</h1>
      </div>

      <div className='p-2 overflow-auto space-y-2'>
        {projects}
      </div>
    </section>
  )
}
