import Navbard from "@/components/shared/Navbar/Nav";

export default function Layout({ children }) {
  return (
    <main className='h-auto flex flex-col'>
      <div className=''>
        <Navbard />
      </div>
      {children}
    </main>
  );
}
