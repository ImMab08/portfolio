'use client'
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react'

export default function LocalSwitcher() {
  const t = useTranslations("localSwitcher");
  const [isPending, startTransition ] = useTransition();
  const router = useRouter();

  const onSelectionChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`)
    });
  };
  
  return (
    <label className='border rounded text-white font-medium cursor-pointer'>
      <p className='sr-only'>Change Languaje</p>
      <select className='bg-transparent py-1 px-2' onChange={onSelectionChange} disabled={isPending}>
        <option className='text-primary' value='en'>{t("en")}</option>
        <option className='text-primary' value='es'>{t("es")}</option>
      </select>
    </label>
  )
}
