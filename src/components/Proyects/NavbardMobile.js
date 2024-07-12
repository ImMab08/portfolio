'use client'
import Link from 'next/link'
import Image from 'next/image';
import React, { useState } from 'react'
import { useTranslations } from "next-intl";

import { info } from './config/info';
import LocaleSwitcher from '../shared/Navbar/LocalSwitcher';

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
        <span className='text-white font-bold'>View more</span>
        <Image className='block mt-[3px] ml-1' src="/img/arrow-right.svg" width={15} height={15} alt="" />
      </div>
    </Link>
    )
  })

  return (
    <>
     <div className={`fixed inset-0 -z-[-1] bg-primary transition-transform duration-300 ${menuOpen ? "transform translate-x-0" : "transform translate-x-full"}`}>
        <div className="flex justify-between items-center p-5 border-b border-white/20">
          <svg className="close-menu cursor-pointer" onClick={closeMenu} width="25px" height="25px" viewBox="0 0 1024.00 1024.00" fill="#ffffff" stroke="#ffffff">
            <path fill="#ffffff" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path>
          </svg>
          <LocaleSwitcher />
        </div>
        <div className='mt-5 space-y-3 px-2'>
          {Info}
        </div>
      </div>

      <nav className='w-full p-5 border-b border-white/20 flex justify-between'>
        <div className="flex items-center font-medium font-jetbrains">
          <svg width={20} height={20} className='mr-2 mt-[2px]' viewBox="0 0 24 24" fill="none">
            <path d="M10 17L7 14L10 11" className='stroke-white hover:stroke-green-500' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M8 14L13.5 14C15.433 14 17 12.433 17 10.5V10.5C17 8.567 15.433 7 13.5 7L12 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='stroke-white hover:stroke-green-500'></path>
          </svg>
          <Link className="text-white text-md hover:underline" href="/" onClick={closeMenu}>{t('navMobile.back')}</Link>
        </div>


        <div className="container-svg-header cursor-pointer" onClick={toggleMenu}>
          <svg width="25px" height="25px" viewBox="0 -1 12 12" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.85714 2C0.38376 2 0 1.55228 0 1C0 0.44772 0.38376 0 0.85714 0H11.1429C11.6162 0 12 0.44772 12 1C12 1.55228 11.6162 2 11.1429 2H0.85714zM0.85714 6C0.38376 6 0 5.5523 0 5C0 4.4477 0.38376 4 0.85714 4H11.1429C11.6162 4 12 4.4477 12 5C12 5.5523 11.6162 6 11.1429 6H0.85714zM0.85714 10C0.38376 10 0 9.5523 0 9C0 8.4477 0.38376 8 0.85714 8H11.1429C11.6162 8 12 8.4477 12 9C12 9.5523 11.6162 10 11.1429 10H0.85714z" fill="#fff"/>
          </svg>
        </div>

      </nav>
    </>
  )
}
