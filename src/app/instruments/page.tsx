import Image from 'next/image';

import TemplateDefault from '../template/Default';

import ImageProduct from '@/app/assets/violin2.jpg'

const Instrumentos = () => {
   return(
      <TemplateDefault>
         <main className='flex flex-col items-center mb-6 bg-zinc-800'>
            <div className='w-7/12 space-y-2 px-4 pt-14 tracking-wide'>
               <h2 className='text-3xl text-purple-500 font-medium'>
                  Violinos 
               </h2>

               <h1 className='text-4xl text-zinc-200 font-semibold'>
                  Alguns dos nossos violinos
               </h1>

               <p className='pt-5 text-zinc-400 font-medium tracking-widest leading-7'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perspiciatis minima, veniam assumenda incidunt placeat quidem dolorum harum non? Fuga, sequi voluptatibus dolor quos vero obcaecati cupiditate dolorem at quidem.
               </p>

               <Image
                  alt=''
                  src={ImageProduct}
                  width={300}
                  height={300}
                  className='col-span-3 h-full object-cover rounded-lg shadow-lg' 
               />
            </div>
         </main>
      </TemplateDefault>
   );
}

export default Instrumentos;