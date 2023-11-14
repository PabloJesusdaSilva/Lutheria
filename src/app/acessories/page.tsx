import Image from 'next/image';

import TemplateDefault from '@/app/template/Default';
import HeaderSection from '@/app/partials/SectionDescription';
import Carousel from '@/app/components/Carousel';

import ImageAcessories from '@/app/assets/acessories/cravelha.jpg';
import ImageCavalete from '@/app/assets/acessories/cravelha.jpg';
import ImageEstandarte from '@/app/assets/acessories/estandarte.jpg';

const Acessories = () => {
   const data = [
      {
         image: ImageCavalete,
         title: 'Cravelha',
         alt: 'Imagem ilustrativa do produto'
      },
      {
         image: ImageEstandarte,
         title: 'Estandarte',
         alt: 'Imagem ilustrativa do produto'
      },
      {
         image: ImageAcessories,
         title: 'Cavalete',
         alt: 'Imagem ilustrativa do produto'
      },
      {
         image: ImageAcessories,
         title: 'Cavalete',
         alt: 'Imagem ilustrativa do produto'
      },
      {
         image: ImageAcessories,
         title: 'Cavalete',
         alt: 'Imagem ilustrativa do produto'
      }
]

   return(
      <TemplateDefault>
         <main className='flex flex-col items-center pb-14 bg-zinc-800'>
            <div className='w-9/12'>
               <HeaderSection
                  title='Acessórios'
                  subtitle='Conheça nossos acessórios' 
               />

               <p className='px-4 text-zinc-400 font-medium tracking-widest leading-7'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non praesentium mollitia labore voluptate amet incidunt quam, corrupti hic quos soluta, nihil ab architecto qui commodi officiis sit odio doloremque quo?
               </p>

            </div>

            <div className='
               flex flex-col items-center space-x-0 mt-5 space-y-8
               md:flex-row md:items-start md:space-x-8 md:space-y-0 w-9/12 overflow-hidden
            '>
               <Carousel
                  actions={
                     data.map((item) => {
                        return (
                           <div className='w-[600px] h-80'>
                              <Image
                                 alt={item.alt}
                                 src={item.image}
                                 className='w-full h-72 object-cover rounded-lg'
                              />

                              <h2 className='text-xl text-zinc-400 pt-2 tracking-wider'>
                                 {item.title}
                              </h2>
                           </div>
                        )
                     })
                  } 
               />
            </div>

            <div>
               <HeaderSection
                  title=''
                  subtitle='' 
               />
            </div>
         </main>
      </TemplateDefault>
   );
}

export default Acessories;