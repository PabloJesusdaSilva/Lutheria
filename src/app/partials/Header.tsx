import Image from 'next/image';
import Link from 'next/link';

import ImageHeader from '@/app/assets/banner-footer.jpg';

const Header = () => {
   return(
      <header className='w-full h-96'>
         <Image
            alt='Header image'
            src={ImageHeader}
            className='w-full h-full object-cover'
         />

         <div className='relative z-10 -top-[100%] w-full h-full bg-zinc-900/70' />

         <nav className='grid grid-cols-2 relative z-20 -top-[190%] pl-12 tracking-widest'>
            <div className='flex flex-col space-y-2'>
               <h1 className='text-4xl text-zinc-300 font-bold'>
                  Roger Silva
               </h1>
               <span className='text-lg text-zinc-400 font-semibold'>
                  Lutheria
               </span>
            </div>

            <ul className='flex space-x-6 mb-10'>
               <li className='text-zinc-200 font-semibold transition-all duration-300 cursor-pointer hover:text-purple-500'>
                  <Link href='/'>
                     <span>
                        Ateliar
                     </span>
                  </Link>
               </li>
               <li className='text-zinc-200 font-semibold transition-all duration-300 cursor-pointer hover:text-purple-500'>
                  <Link href='/violins'>
                     <span>
                        Instrumentos
                     </span>
                  </Link>
               </li>
               <li className='text-zinc-200 font-semibold transition-all duration-300 cursor-pointer hover:text-purple-500'>
                  <Link href=''>
                     <span>
                        Acessórios
                     </span>
                  </Link>
               </li>
               <li className='text-zinc-200 font-semibold transition-all duration-300 cursor-pointer hover:text-purple-500'>
                  <Link href=''>
                     <span>
                        Trabalhos
                     </span>
                  </Link>
               </li>
               <li className='text-zinc-200 font-semibold transition-all duration-300 cursor-pointer hover:text-purple-500'>
                  <Link href=''>
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
      </header>
   );
}

export default Header;