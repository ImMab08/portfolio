'use client'

import { usePathname, Link } from '../../../navigation'

function LangElement ({ locale, langName, selected }) {
  const pathname = usePathname();
  const checkSelected = locale === selected ? <span className='ml-auto text-green-500'>•</span> : <span className='ml-auto opacity-0'>•</span>

  return (
    <Link hreft={pathname} locale={locale} className={`px-3 py-3 flex  ${selected === locale && "bg-gray-800"} hover:bg-gray-800 no-underline hover:no-underline transition-colors duration-100`}>
      <span className="inline-block ml text-white mr-2" >{langName}</span>
      {checkSelected}
    </Link>
  )
}

export default LangElement;