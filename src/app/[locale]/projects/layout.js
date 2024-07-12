import Dashboard from '@/components/Proyects/Dashboard'
import Navbard from '@/components/Proyects/Navbard'
import NavbardMobile from '@/components/Proyects/NavbardMobile'

export default function Layout({ children }) {
  return (
    <main className='h-screen flex flex-col'>
      <div className='hidden sm:block flex-shrink-0'>
        <Navbard />
      </div>
      <div className='flex-shrink-0 sm:hidden'>
        <NavbardMobile />
      </div>
      <div className='flex w-full flex-grow overflow-hidden'>
        <div className="w-[25%] h-full overflow-auto hidden sm:block">
          <Dashboard />
        </div>
        <div className='flex-grow w-[75%] h-full overflow-auto'>
          {children}
        </div>
      </div>
    </main>
  );
}
