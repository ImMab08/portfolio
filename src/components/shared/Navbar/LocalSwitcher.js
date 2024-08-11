'use client'
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useTransition, useEffect, useState, useRef } from 'react'

export default function LocaleSwitcher() {
  const t = useTranslations("localSwitcher");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  
  const [locale, setLocale] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const butRef = useRef(null);
  
  const openCSS = !isOpen
    ? "opacity-0 -translate-y-2 transition ease duration-300 transform pointer-events-none"
    : "opacity-100 translate-y-0 transition ease duration-300 transform pointer-events-auto";

  const onSelectionChange = (nextLocale) => {
    setLocale(nextLocale);
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (!butRef.current) return;
      if (!butRef.current.contains(e.target)) {
        setIsOpen(false);
        return;
      }
      setIsOpen(!isOpen);
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick);
  }, [isOpen]);

  return (
    <button ref={butRef} className="flex bg-transparent border border-white/80 text-white rounded-t-md py-1 px-3 focus:outline-none justify-center items-center relative">
      <span className="text-xs mr-2">{t(locale)}</span>
      {isOpen ? (
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
          <path d="M17 15L12 10L7 15" stroke="#ffff" strokeWidth="1.5"></path>
        </svg>
      ) : (
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
          <path d="M7 10L12 15L17 10" stroke="#ffff" strokeWidth="1.5"></path>
        </svg>
      )}
      <div className={`bg-primary border border-white/80 shadow-md rounded-b-md text-sm absolute top-[27px] sm:top-6 right-0 min-w-full w-auto z-30 ${openCSS}`}>
        <div className="overflow-auto py-2">
          <ul className="space-y-1 text-start ">
            <li className='text-xs hover:bg-white/40 px-3 py-1' onClick={() => onSelectionChange('en')}>{t('en')}</li>
            <li className='text-xs hover:bg-white/40 px-3 py-1' onClick={() => onSelectionChange('es')}>{t('es')}</li>
          </ul>
        </div>
      </div>
    </button>
  )
}