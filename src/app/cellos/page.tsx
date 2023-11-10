'use client';

import Image from 'next/image';

import TemplateDefault from '../template/Default';
import InstrumentCard from '../components/InstrumentCard';
import HeaderSection from '../components/HeaderSection';

import ImageProduct from '@/app/assets/violins.jpg';

const data = [
   {
      image: {ImageProduct},
      title: 'Violoncelo Modelo Strad',
      description: 'Acompanha capa, arco e já ajustado pelo luthier Roger Silva.'
   },
   {
      image: {ImageProduct},
      title: 'Violoncelo Modelo Strad',
      description: 'Acompanha capa, arco e já ajustado pelo luthier Roger Silva.'
   },
   {
      image: {ImageProduct},
      title: 'Violoncelo Modelo Strad',
      description: 'Acompanha capa, arco e já ajustado pelo luthier Roger Silva.'
   },
   {
      image: {ImageProduct},
      title: 'Violoncelo Modelo Strad',
      description: 'Acompanha capa, arco e já ajustado pelo luthier Roger Silva.'
   },
   {
      image: {ImageProduct},
      title: 'Violoncelo Modelo Strad',
      description: 'Acompanha capa, arco e já ajustado pelo luthier Roger Silva.'
   },
   {
      image: {ImageProduct},
      title: 'Violoncelo Modelo Strad',
      description: 'Acompanha capa, arco e já ajustado pelo luthier Roger Silva.'
   },
]

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
                  md:flex-row md:items-start md:space-x-4 md:space-y-0 justify-evenly w-9/12 overflow-hidden
               '>
                     {
                        data.map((item) => (
                           <InstrumentCard
                              image={item.image}
                              title={item.title}
                              description={item.description} 
                           />
                        ))
                     }

                  {/* <InstrumentCard
                     image={ImageForSale}
                     title='Violoncelo Modelo Strad'
                     description='Acompanha capa, arco e já ajustado pelo luthier Roger Silva.' 
                  />

                  <InstrumentCard
                     image={ImageForSale}
                     title='Violoncelo Modelo Strad'
                     description='Acompanha capa, arco e já ajustado pelo luthier Roger Silva.' 
                  /> */}
               </div>
            </div>
         </main>
      </TemplateDefault>
   );
}

export default Violins;