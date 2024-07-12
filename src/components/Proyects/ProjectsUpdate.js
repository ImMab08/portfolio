'use client';
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Proyects() {
  const t = useTranslations('projects')
  return (
    <section className="flex-grow h-full flex flex-col justify-center items-center">
      <Image className="sm:hidden" src="/img/img-projects.png" alt="" width={200} height={250} />
      <Image className="hidden sm:block" src="/img/img-projects.png" alt="" width={250} height={250} />
      <h2 className=" w-[350px] text-lg sm:text-xl text-center text-white font-medium">{t('hero.title')}</h2>
    </section>
  );
}
