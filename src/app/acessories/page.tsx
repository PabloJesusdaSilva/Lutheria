import Image from 'next/image';

import TemplateDefault from '../template/Default';
import HeaderSection from '../components/HeaderSection';

import ImageAcessories from '@/app/assets/cavalete.jpg';
import ImageCavalete from '@/app/assets/cravelha.jpg';
import ImageEstandarte from '@/app/assets/estandarte.jpg';

const Acessories = () => {
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
               <Image
                  alt=''
                  src={ImageAcessories}
                  className='w-60 h-80 object-cover rounded-xl shadow-xl' 
               />
               <Image
                  alt=''
                  src={ImageCavalete}
                  className='w-60 h-80 object-cover rounded-xl shadow-xl' 
               />
               <Image
                  alt=''
                  src={ImageEstandarte}
                  className='w-60 h-80 object-cover rounded-xl shadow-xl' 
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