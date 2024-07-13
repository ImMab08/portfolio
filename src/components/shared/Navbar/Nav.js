"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

import FramerMagnetic from '@/components/FramerMagnetic'
import LocalSwitcher from './LocalSwitcher'

const Navbard = () => {
  const t = useTranslations('navbard');

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-container p-5">
          <svg className="close-menu" onClick={closeMenu} width="20px" height="20px" viewBox="0 0 1024.00 1024.00" fill="#ffffff" stroke="#ffffff">
            <path fill="#ffffff" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path>
          </svg>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 text-sm font-medium font-jetbrains">
          <Link className="text-white text-xl hover:text-secondary" href="/" onClick={closeMenu}>{t('home')}</Link>
          <Link className="text-white text-xl hover:text-secondary" href="/about" onClick={closeMenu}>{t('about')}</Link>
          <Link className="text-white text-xl hover:text-secondary" href="/projects" onClick={closeMenu}>{t('projects')}</Link>
        </div>
        <div></div>
      </div>

      <header className="w-full bg-primary lg:px-32 lg:py-5 fixed top-0 z-10 ">
        <div className="hidden md:flex container items-center justify-between max-w-[88rem] mx-auto">
          <div className="flex items-center space-x-6 text-sm font-medium xl:flex font-jetbrains">
            <FramerMagnetic>
              <Link className="text-white text-lg hover:text-secondary" href="/" onClick={closeMenu}>{t('home')}</Link>
            </FramerMagnetic>
            <FramerMagnetic>
              <Link className="text-white text-lg hover:text-secondary" href="/about" onClick={closeMenu}>{t('about')}</Link>
            </FramerMagnetic>
            <FramerMagnetic>
              <Link className="text-white text-lg hover:text-secondary" href="/projects" onClick={closeMenu}>{t('projects')}</Link>
            </FramerMagnetic>
          </div>

          <div className="flex items-center space-x-6 text-sm font-medium xl:flex">
            <FramerMagnetic>            
              <a className="text-white text-lg" href="https://github.com/ImMab08" onClick={closeMenu} target="_blank">
                <Image className=" " src="/img/github.svg" width={25} height={25} alt=""/>
              </a>
            </FramerMagnetic>
            <FramerMagnetic>
              <a className="text-white text-lg" href="https://www.linkedin.com/in/franky-vargas-b59648278/" onClick={closeMenu} target="_blank">
                <Image className=" " src="/img/linkedin.svg" width={25} height={25} alt="" />
              </a>
            </FramerMagnetic>
            <LocalSwitcher />
          </div>

        </div>

        <div className="flex md:hidden container p-5 items-center justify-between">
          <div className={`container-svg-header ${menuOpen ? "open" : ""}`}>
            <svg onClick={toggleMenu} width="20px" height="20px" viewBox="0 -1 12 12" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.85714 2C0.38376 2 0 1.55228 0 1C0 0.44772 0.38376 0 0.85714 0H11.1429C11.6162 0 12 0.44772 12 1C12 1.55228 11.6162 2 11.1429 2H0.85714zM0.85714 6C0.38376 6 0 5.5523 0 5C0 4.4477 0.38376 4 0.85714 4H11.1429C11.6162 4 12 4.4477 12 5C12 5.5523 11.6162 6 11.1429 6H0.85714zM0.85714 10C0.38376 10 0 9.5523 0 9C0 8.4477 0.38376 8 0.85714 8H11.1429C11.6162 8 12 8.4477 12 9C12 9.5523 11.6162 10 11.1429 10H0.85714z" fill="#fff"/>
            </svg>
          </div>
          <LocalSwitcher />
        </div>
      </header>
    </>
  );
};

export default Navbard;
