'use client';

import Image from 'next/image';

import Navbar from '../components/Navbar';

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

         <Navbar />
      </header>
   );
}

export default Header;