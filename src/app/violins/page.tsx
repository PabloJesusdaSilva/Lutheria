import Image from 'next/image';

import TemplateDefault from '@/app/template/Default';
import HeaderSection from '@/app/partials/SectionDescription';
import Carousel from '../components/Carousel';

import ImageProduct from '@/app/assets/violins/violins.jpg';

const data = [
   {
      id: 1,
      image: ImageProduct,
      alt: 'Foto ilustrativa do violino',
      title: 'Violino Modelo Strad',
      description: 'Acompanha case e arco'
   },
   {
      id: 2,
      image: ImageProduct,
      alt: 'Foto ilustrativa do violino',
      title: 'Violino Modelo Strad',
      description: 'Acompanha case e arco'
   },
   {
      id: 3,
      image: ImageProduct,
      alt: 'Foto ilustrativa do violino',
      title: 'Violino Modelo Strad',
      description: 'Acompanha case e arco'
   },
   {
      id: 4,
      image: ImageProduct,
      alt: 'Foto ilustrativa do violino',
      title: 'Violino Modelo Strad',
      description: 'Acompanha case e arco'
   },
   {
      id: 5,
      image: ImageProduct,
      alt: 'Foto ilustrativa do violino',
      title: 'Violino Modelo Strad',
      description: 'Acompanha case e arco'
   },
];

const Violins = () => {
   return(
      <TemplateDefault>
         <main className='flex flex-col items-center bg-zinc-800'>
            <div className='w-10/12 lg:w-7/12 space-y-2 px-4 pt-14 tracking-wide'>
               <HeaderSection 
                  title='Violinos'
                  subtitle='Construção'
               />

               <p className='px-4 text-zinc-400 font-medium tracking-widest leading-7'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perspiciatis minima, veniam assumenda incidunt placeat quidem dolorum harum non? Fuga, sequi voluptatibus dolor quos vero obcaecati cupiditate dolorem at quidem.
               </p>

               <div className='
                     flex flex-col space-x-0 space-y-4
                     lg:flex-row lg:space-x-14 lg:space-y-0 m-4 pb-20
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
               <div className='w-10/12 lg:w-7/12'>
                  <HeaderSection 
                     title='Violinos à venda'
                     subtitle='Conheça os modelos'
                  />
               </div>

               <div 
                  className='
                     flex flex-col items-center pt-6 pb-52 space-x-0 h-auto 
                     lg:flex-row lg:items-start lg:space-x-4 lg:space-y-0 w-11/12 overflow-hidden
               '>
                  <Carousel
                     actions={
                        data.map((item) => {
                           return(
                              <div
                                 key={item.id} 
                                 className='min-w-[300px] h-80'
                              >
                                 <Image
                                    alt={item.alt}
                                    src={item.image} 
                                    className='w-full h-full object-cover rounded-lg'
                                 />

                                 <div className='p-2 text-zinc-300 tracking-widest'>
                                    <h2 className='text-xl font-semibold'>
                                       {item.title}
                                    </h2>

                                    <p className='mt-1 mb-6 text-zinc-400'>
                                       {item.description }
                                    </p>

                                    <button className='px-4 py-2 rounded-lg shadow-lg bg-purple-700'>
                                       <span className='text-zinc-300'>
                                          Consulte
                                       </span>
                                    </button>
                                 </div>
                              </div>
                           )
                        })
                     }
                  />
               </div>
            </div>
         </main>
      </TemplateDefault>
   );
}

export default Violins;