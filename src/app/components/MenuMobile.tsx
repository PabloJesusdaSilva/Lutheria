import Link from 'next/link';
import { useState } from 'react';
import { Transition } from '@headlessui/react';

import { 
   MenuIcon,
   ChevronDownIcon
} from 'lucide-react';

const MenuMobile = () => {
   const [isShowing, setIsShowing] = useState(false);

   return(
      <div className='block md:hidden'>
         <button
            className='absolute z-40 top-10 right-10' 
            onClick={() => setIsShowing((isShowing) => !isShowing)}
         >
            <MenuIcon
               size={34}
               color='#e4e4e7'
               className='relative top-0 right-0'
            />
         </button>
   
         <Transition
            show={isShowing}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
         >
            <div className='fixed z-30 top-0 right-0 w-4/6 h-full pl-6 tracking-widest shadow-2xl bg-zinc-900'>
               <div className='w-4/6 mt-9 mb-8 pb-4 border-b-2 border-zinc-700'>
                  <h2 className='text-4xl text-zinc-300 font-bold pb-1'>Roger Silva</h2>
                  <span className='text-xl text-zinc-400'>Lutheria</span>
               </div>

               <nav>
                  <ul className='flex flex-col space-y-4 tracking-widest'>
                     <li className='flex'>
                        <span className='text-zinc-400 font-medium transition-all duration-300 hover:text-purple-700'>
                           <Link href='/'>
                              Atelier
                           </Link>
                        </span>
                     </li>

                     <li className='flex'>
                        <details>
                           <summary className='flex text-zinc-400'>
                              Instrumentos

                              <ChevronDownIcon 
                                 size={22}
                                 className='mt-[2px] ml-2' 
                              />
                           </summary>

                           <ul className='space-y-2 pt-3 text-zinc-500 font-medium'>
                              <li className='px-4 py-1 transition-all duration-300 rounded-lg hover:bg-zinc-800 hover:text-purple-700'>
                                 <Link href='/violins'>
                                    Violino
                                 </Link>
                              </li>
                              <li className='px-4 py-1 transition-all duration-300 rounded-lg hover:bg-zinc-800 hover:text-purple-700'>
                                 <Link href='/violas'>
                                    Viola
                                 </Link>
                              </li>
                              <li className='px-4 py-1 transition-all duration-300 rounded-lg hover:bg-zinc-800 hover:text-purple-700'>
                                 <Link href='/cellos'>
                                    Violoncelo
                                 </Link>
                              </li>
                           </ul>
                        </details>
                     </li>

                     <li className='flex'>
                        <span className='text-zinc-400 font-medium transition-all duration-300 hover:text-purple-700'>   
                           <Link href='/acessories'>
                              Acessórios
                           </Link>
                        </span>
                     </li>

                     <li className='flex'>
                        <span className='text-zinc-400 font-medium transition-all duration-300 hover:text-purple-700'>
                           <Link href='/works'>
                              Trabalhos
                           </Link>
                        </span>
                     </li>

                     <li className='flex'>
                        <span className='text-zinc-400 font-medium transition-all duration-300 hover:text-purple-700'>
                           <Link href='/contact'>
                              Contato
                           </Link>
                        </span>
                     </li>
                  </ul>
               </nav>
            </div>
         </Transition>
      </div>
   )
}

export default MenuMobile;