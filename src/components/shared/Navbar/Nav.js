"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

import LocalSwitcher from './LocalSwitcher'
import FramerMagnetic from '@/utils/FramerMagnetic'

import { IconBarsMenu, IconCloseMenu, IconGithub, IconLinkedin } from '@/icons'

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
        <div className="menu-container p-5 flex items-center">
          <div className="cursor-pointer">
            <IconCloseMenu width={24} height={24} onClick={closeMenu} />
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
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 text-sm font-medium font-jetbrains">
          <Link className="text-white text-xl hover:text-secondary" href="/" onClick={closeMenu}>{t('home')}</Link>
          <Link className="text-white text-xl hover:text-secondary" href="/about" onClick={closeMenu}>{t('about')}</Link>
          <Link className="text-white text-xl hover:text-secondary" href="/projects" onClick={closeMenu}>{t('projects')}</Link>
        </div>
        <div></div>
      </div>

      <header className="w-full bg-primary lg:px-32 lg:py-5 fixed top-0 z-50 ">
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
                <IconGithub width={24} height={24} />
              </a>
            </FramerMagnetic>
            <FramerMagnetic>
              <a className="text-white text-lg" href="https://www.linkedin.com/in/franky-vargas-b59648278/" onClick={closeMenu} target="_blank">
                <IconLinkedin width={24} height={24} />
              </a>
            </FramerMagnetic>
            <LocalSwitcher />
          </div>
        </div>

        <div className="flex md:hidden container p-5 items-center justify-between">
          <div className={` cursor-pointer ${menuOpen ? "open" : ""}`}>
            <IconBarsMenu width={28} height={28} onClick={toggleMenu} />
          </div>
          <LocalSwitcher />
        </div>
      </header>
    </>
  );
};

export default Navbard;
