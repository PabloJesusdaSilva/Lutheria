import Image from 'next/image';

import TemplateDefault from '../template/Default';
import HeaderSection from '../partials/SectionDescription';

import ImageAcessories from '@/app/assets/cavalete.jpg';
import ImageCavalete from '@/app/assets/cravelha.jpg';
import ImageEstandarte from '@/app/assets/estandarte.jpg';
import Carousel from '../components/Carousel';
import InstrumentCard from '../components/InstrumentCard';

const Acessories = () => {
   const data = [
      {
         image: ImageCavalete,
         title: 'Cravelha'
      },
      {
         image: ImageEstandarte,
         title: 'Estandarte'
      },
      {
         image: ImageAcessories,
         title: 'Cavalete'
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
               md:flex-row justify-around md:items-start md:space-x-8 md:space-y-0
            '>
               <Carousel
                  test={
                     data.map((item) => {
                        return (
                           <div className='w-1/3 h-96 p-4 pb-10'>
                              <Image
                                 alt=''
                                 src={item.image}
                                 className='w-full h-full object-cover rounded-lg'
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