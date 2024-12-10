'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useTranslations } from "next-intl";

import { IconCloseMenu, IconArrowBack, IconGithub, IconLinkedin } from '@/Icons'

import LocaleSwitcher from '@/components/shared/Navbar/LocalSwitcher';
import FramerMagnetic from '@/components/FramerMagnetic'

export default function NavbardMobile() {
  const t = useTranslations('navbardProjects');

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className='w-full py-5 px-32 border-b border-white/20'>

      <div className="flex md:hidden container items-center justify-between">
        <div className="flex items-center font-medium font-jetbrains">
          <IconCloseMenu width />
          <Link className="text-white text-md hover:underline" href="/" onClick={closeMenu}>{t('back')}</Link>
        </div>

        <div className={`container-svg-header ${menuOpen ? "open" : ""}`}>
          <svg onClick={toggleMenu} width="25px" height="25px" viewBox="0 -1 12 12" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.85714 2C0.38376 2 0 1.55228 0 1C0 0.44772 0.38376 0 0.85714 0H11.1429C11.6162 0 12 0.44772 12 1C12 1.55228 11.6162 2 11.1429 2H0.85714zM0.85714 6C0.38376 6 0 5.5523 0 5C0 4.4477 0.38376 4 0.85714 4H11.1429C11.6162 4 12 4.4477 12 5C12 5.5523 11.6162 6 11.1429 6H0.85714zM0.85714 10C0.38376 10 0 9.5523 0 9C0 8.4477 0.38376 8 0.85714 8H11.1429C11.6162 8 12 8.4477 12 9C12 9.5523 11.6162 10 11.1429 10H0.85714z" fill="#fff"/>
          </svg>
        </div>
      </div>

      <div className="hidden md:flex container items-center justify-between max-w-[88rem] mx-auto">
        <div className="flex items-center text-sm font-medium space-x-2">
          <IconArrowBack width={24} height={24} />
          <Link className="text-white text-lg hover:underline" href="/" onClick={closeMenu}>{t('back')}</Link>
        </div>
        
        <div className="flex items-center space-x-6 text-sm font-medium xl:flex">
          <FramerMagnetic>            
            <a className="text-white text-lg" href="https://github.com/ImMab08" onClick={closeMenu} target="_blank">
              <IconGithub width={24} height={24} />
            </a>
          </FramerMagnetic>
          <FramerMagnetic>
            <a className="text-white text-lg" href="https://www.linkedin.com/in/franky-vargas-b59648278/" onClick={closeMenu} target="_blank">
              <IconLinkedin width={24} height={24} />
            </a>
          </FramerMagnetic>
          <LocaleSwitcher />
        </div>
      </div>

    </nav>
  )
}
