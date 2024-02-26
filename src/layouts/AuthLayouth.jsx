import { Outlet } from 'react-router-dom'

export default function AuthLayouth() {
  return (
    <main className='bg-stone-200 max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center'>
        <img 
        src="../img/s.svg" 
        alt="imagen logotipo"
        className='max-w-xs'
        />
        <div className='p-10 w-full'>
        <Outlet />
        </div>
        
    </main>
  )
}
