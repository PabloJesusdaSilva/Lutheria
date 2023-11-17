import Image from 'next/image';

import TemplateDefault from '@/app/template/Default';
import DescriptionSection from '@/app/partials/DescriptionSection';
import Carousel from '@/app/components/Carousel';

import ImageAcessories from '@/app/assets/acessories/cravelha.jpg';
import ImageCavalete from '@/app/assets/acessories/cravelha.jpg';
import ImageEstandarte from '@/app/assets/acessories/estandarte.jpg';

const Acessories = () => {
   const data = [
      {
         id: 1,
         image: ImageCavalete,
         title: 'Cravelha',
         alt: 'Imagem ilustrativa do produto'
      },
      {
         id: 2,
         image: ImageEstandarte,
         title: 'Estandarte',
         alt: 'Imagem ilustrativa do produto'
      },
      {
         id: 3,
         image: ImageAcessories,
         title: 'Cavalete',
         alt: 'Imagem ilustrativa do produto'
      },
      {
         id: 4,
         image: ImageAcessories,
         title: 'Cavalete',
         alt: 'Imagem ilustrativa do produto'
      },
      {
         id: 5,
         image: ImageAcessories,
         title: 'Cavalete',
         alt: 'Imagem ilustrativa do produto'
      }
]

   return(
      <TemplateDefault>
         <main className='flex flex-col items-center pb-14 bg-zinc-800'>
            <div className='w-10/12 lg:w-8/12'>
               <DescriptionSection
                  title='Acessórios'
                  subtitle='Conheça nossos acessórios' 
               />

               <p className='px-4 text-zinc-400 font-medium tracking-widest leading-7'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non praesentium mollitia labore voluptate amet incidunt quam, corrupti hic quos soluta, nihil ab architecto qui commodi officiis sit odio doloremque quo?
               </p>

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

                              <div className='p-4 text-zinc-300 tracking-widest rounded-b-xl shadow-2xl bg-zinc-800'>
                                 <h2 className='text-xl font-semibold'>
                                    {item.title}
                                 </h2>
                              </div>
                           </div>
                        )
                     })
                  }
               />
            </div>

            <div>
               <DescriptionSection
                  title=''
                  subtitle='' 
               />
            </div>
         </main>
      </TemplateDefault>
   );
}

export default Acessories;