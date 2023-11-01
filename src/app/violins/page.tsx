import Image from 'next/image';

import TemplateDefault from '../template/Default';
import InstrumentCard from '../components/InstrumentCard';
import HeaderSection from '../components/HeaderSection';

import ImageProduct from '@/app/assets/violins.jpg';
import ImageForSale from '@/app/assets/violin-for-sale.jpg';


const Violins = () => {
   return(
      <TemplateDefault>
         <main className='flex flex-col items-center bg-zinc-800'>
            <div className='w-7/12 space-y-2 px-4 pt-14 tracking-wide'>
               <HeaderSection 
                  title='Violinos'
                  subtitle='Construção'
               />

               <p className='px-4 text-zinc-400 font-medium tracking-widest leading-7'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perspiciatis minima, veniam assumenda incidunt placeat quidem dolorum harum non? Fuga, sequi voluptatibus dolor quos vero obcaecati cupiditate dolorem at quidem.
               </p>

               <div className='flex space-x-20 m-4 pb-20'>
                  <Image
                     alt=''
                     src={ImageProduct}
                     width={300}
                     height={300}
                     className='col-span-3 h-full object-cover rounded-lg shadow-lg' 
                  />

                  <Image
                     alt=''
                     src={ImageProduct}
                     width={300}
                     height={300}
                     className='col-span-3 h-full object-cover rounded-lg shadow-lg' 
                  />
               </div>
            </div>

            <div className='flex flex-col items-center w-full space-y-2 px-4 pt-6 tracking-wide'>
               <div className='w-7/12'>
                  <HeaderSection 
                     title='Violinos à venda'
                     subtitle='Conheça os modelos'
                  />
               </div>

               <div className='flex justify-evenly w-full space-x-4'>
                  <InstrumentCard
                     image={ImageForSale}
                     title='Violino Modelo Strad'
                     description='Acompanha capa, arco e já ajustado pelo luthier Roger Silva.' 
                  />
                  <InstrumentCard
                     image={ImageForSale}
                     title='Violino Modelo Strad'
                     description='Acompanha capa, arco e já ajustado pelo luthier Roger Silva.' 
                  />
                  <InstrumentCard
                     image={ImageForSale}
                     title='Violino Modelo Strad'
                     description='Acompanha capa, arco e já ajustado pelo luthier Roger Silva.' 
                  />
               </div>
            </div>
         </main>
      </TemplateDefault>
   );
}

export default Violins;