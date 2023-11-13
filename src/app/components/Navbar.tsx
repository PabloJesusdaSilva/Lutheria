import Link from 'next/link';
import Menu from './Menu';

const Navbar = () => {
   return(
      <nav className='grid grid-cols-2 relative z-20 -top-[190%] pl-12 tracking-widest'>
         <div className='col-span-2 md:col-span-1 flex flex-col space-y-2'>
            <h1 className='text-4xl text-zinc-300 font-bold'>
               Roger Silva
            </h1>
            <span className='text-lg text-zinc-400 font-semibold'>
               Lutheria
            </span>
         </div>

         <ul className='hidden lg:flex space-x-6 mb-10'>
            <li className='text-zinc-200 font-semibold transition-all duration-300 cursor-pointer hover:text-purple-500'>
               <Link href='/'>
                  <span>             
                     Ateliar
                  </span>
               </Link>
            </li>

            <li className='text-zinc-200 font-semibold transition-all duration-300 cursor-pointer hover:text-purple-500'>
               <Link href='/violins'>
                  <Menu />
               </Link>
            </li>

            <li className='text-zinc-200 font-semibold transition-all duration-300 cursor-pointer hover:text-purple-500'>
               <Link href='/acessories'>
                  <span>
                     Acessórios
                  </span>
               </Link>
            </li>

            <li className='text-zinc-200 font-semibold transition-all duration-300 cursor-pointer hover:text-purple-500'>
               <Link href='/works'>
                  <span>
                     Trabalhos
                  </span>
               </Link>
            </li>

            <li className='text-zinc-200 font-semibold transition-all duration-300 cursor-pointer hover:text-purple-500'>
               <Link href='/contact'>
                  <span>
                     Contato
                  </span>
               </Link>
            </li>
         </ul>

         <div className='mt-28'>
            <h2 className='text-6xl text-zinc-200 font-semibold'>
               Lutheria
            </h2>
         </div>
      </nav>
   );
}

export default Navbar;