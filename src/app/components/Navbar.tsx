import Link from 'next/link';
import Image from 'next/image';
import Menu from './Menu';

import Logo from '@/app/assets/roger-luthier.png';

const Navbar = () => {
   return(
      <nav className='grid grid-cols-2 relative z-20 -top-[190%] pl-12 tracking-widest'>
         <div className='col-span-2 lg:col-span-1 flex flex-col space-y-2'>
            <Image
               alt=''
               src={Logo}
               className='w-52 -mt-16' 
            />
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

         <div className='mt-16'>
            <h2 className='text-6xl text-zinc-200 font-semibold'>
               Lutheria
            </h2>
         </div>
      </nav>
   );
}

export default Navbar;