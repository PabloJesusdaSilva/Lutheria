import Link from 'next/link';

import { 
   TheaterIcon,
   Mic2Icon,
   PresentationIcon,
   PhoneIcon
} from 'lucide-react';

import styled from 'styled-components';

const Navbar = styled.nav`
   position: fixed;
   top: 0;
   right: 0;
   z-index: 20;
   width: 66%;
   height: 100%;
   padding: 32px 0 0 32px;
   letter-spacing: 0.1rem;
   background-color: #18181b;

   @media (min-width: 640px) {
      display: none;
   }
`

const NavText = styled.div`
   display: flex;
   flex-direction: column;
   width: 66%;
   margin-bottom: 40px;
   padding-bottom: 16px;
   border-bottom: 2px solid #374151;
`

const NavTitle = styled.h2`
   font-size: 2.25rem;
   font-weight: bold;
   color: #e4e4e7;
`

const NavSubtitle = styled.span`
   padding-top: 8px;
   font-size: 1.5rem;
   color: #d1d5db;
`

const MenuMobile = () => {
   return(
      <Navbar>
         <NavText  className='flex flex-col w-8/12 mb-10 pb-4 border-b-2 border-zinc-700'>
            <NavTitle className='text-4xl text-zinc-200 font-bold'>
               Roger Silva 
            </NavTitle>
            <NavSubtitle className='pt-2 text-2xl text-zinc-300'>
               Lutheria
            </NavSubtitle>
         </NavText >

         <ul className='space-y-7'>
            <li className='text-xl text-zinc-400 font-semibold transition-all duration-300 hover:text-purple-700'>
               <Link 
                  href='/'
                  className='flex space-x-4'
               >
                  <TheaterIcon />

                  <span>             
                     Ateliar
                  </span>
               </Link>
            </li>

            <li className='text-xl text-zinc-400 font-semibold transition-all duration-300 hover:text-purple-700'>
               <Link href='/violins'>
               </Link>
            </li>

            <li className='text-xl text-zinc-400 font-semibold transition-all duration-300 hover:text-purple-700'>
               <Link 
                  href='/acessories'
                  className='flex space-x-4'
               >
                  <Mic2Icon />

                  <span>
                     Acessórios
                  </span>
               </Link>
            </li>

            <li className='text-xl text-zinc-400 font-semibold transition-all duration-300 hover:text-purple-700'>
               <Link 
                  href='/works'
                  className='flex space-x-4'
               >
                  <PresentationIcon />
                  <span>
                     Trabalhos
                  </span>
               </Link>
            </li>

            <li className='text-xl text-zinc-400 font-semibold transition-all duration-300 hover:text-purple-700'>
               <Link 
                  href='/contact'
                  className='flex space-x-4'
               >
                  <PhoneIcon />

                  <span>
                     Contato
                  </span>
               </Link>
            </li>
         </ul>
      </Navbar>
   )
}

export default MenuMobile;