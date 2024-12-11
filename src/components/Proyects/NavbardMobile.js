'use client'
import Link from 'next/link'
import Image from 'next/image';
import React, { useState } from 'react'
import { useTranslations } from "next-intl";

import { info } from './config/info';
import LocaleSwitcher from '../shared/Navbar/LocalSwitcher';
import { IconArrowBack, IconArrowRight, IconBarsMenu, IconCloseMenu } from '@/icons';

export default function Navbard() {
  const t = useTranslations('projects');

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const Info = info.map(({id, link, img}) => {
    return(
      <Link key={id} className='relative group flex space-x-2 p-2 border border-white/40 rounded-lg cursor-pointer hover:border-green-500' href={link}>
      <div className='w-[150px] h-auto flex-shrink-0'>
        <Image width={250} height={150} className='object-cover rounded-sm' src={img} alt='' />
      </div>
      <div className='flex flex-col justify-start w-auto'>
        <h2 className='text-white font-bold'>{t(`${id}.title`)}</h2>
        <p className='text-white/50 font-normal text-sm'>{t(`${id}.description`)}</p>
      </div>
      <div className='absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg' onClick={closeMenu}>
        <span className='text-white font-bold'>{t('viewmore')}</span>
        <IconArrowRight width={24} height={24} className='mt-1 ml-1' />
      </div>
    </Link>
    )
  })

  return (
    <>
     <div className={`fixed inset-0 -z-[-1] bg-primary transition-transform duration-300 ${menuOpen ? "transform translate-x-0" : "transform translate-x-full"}`}>
        <div className="flex justify-between items-center p-5 border-b border-white/20">
          <IconCloseMenu width={25} height={25} onClick={closeMenu} />
          <LocaleSwitcher />
        </div>
        <div className='mt-5 space-y-3 px-2'>
          {Info}
        </div>
      </div>

      <nav className='w-full p-5 border-b border-white/20 flex justify-between'>
        <div className="flex items-center font-medium font-jetbrains">
          <IconArrowBack width={20} height={20} className='mr-2 mt-[2px]' />
          <Link className="text-white text-md hover:underline" href="/" onClick={closeMenu}>{t('navMobile.back')}</Link>
        </div>

        <div className="container-svg-header cursor-pointer" onClick={toggleMenu}>
          <IconBarsMenu width={25} height={25} />
        </div>

      </nav>
    </>
  )
}
