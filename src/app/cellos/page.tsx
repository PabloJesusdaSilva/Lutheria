'use client';

import Image from 'next/image';

import TemplateDefault from '../template/Default';
import HeaderSection from '../partials/SectionDescription';
import Carousel from '../components/Carousel';

import ImageProduct from '@/app/assets/violins.jpg';

const Violins = () => {
   return(
      <TemplateDefault>
         <main className='flex flex-col items-center bg-zinc-800'>
            <div className='w-9/12 md:w-7/12 space-y-2 px-4 pt-14 tracking-wide'>
               <HeaderSection
                  title='Violoncelo'
                  subtitle='Construção' 
               />

               <p className='px-5 text-zinc-400 font-medium tracking-widest leading-7'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perspiciatis minima, veniam assumenda incidunt placeat quidem dolorum harum non? Fuga, sequi voluptatibus dolor quos vero obcaecati cupiditate dolorem at quidem.
               </p>

               <div className='
                  flex flex-col space-x-0 space-y-4
                  md:flex-row md:space-x-10 md:space-y-0 m-4 pb-20
               '>
                  <Image
                     alt=''
                     src={ImageProduct}
                     width={300}
                     height={300}
                     className='col-span-3 w-full h-full object-cover rounded-lg shadow-lg' 
                  />

                  <Image
                     alt=''
                     src={ImageProduct}
                     width={300}
                     height={300}
                     className='col-span-3 w-full h-full object-cover rounded-lg shadow-lg' 
                  />
               </div>
            </div>

            <div className='flex flex-col items-center w-full space-y-2 px-4 pt-6 tracking-wide'>
               <div className='w-9/12 md:w-7/12'>
                  <HeaderSection
                     title='Violoncelos à venda'
                     subtitle='Conheça os modelos' 
                  />
               </div>

               <div className='
                  flex flex-col items-center pt-6 pb-28 space-x-0 h-auto 
                  md:flex-row md:items-start md:space-x-4 md:space-y-0 w-9/12 max-w-[1100px] overflow-hidden
               '>
                  <Carousel />
               </div>
            </div>
         </main>
      </TemplateDefault>
   );
}

export default Violins;