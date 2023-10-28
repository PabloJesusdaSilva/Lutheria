import Image from 'next/image';

import TemplateDefault from './template/Default';

import ImageGrid from '@/app/assets/violins.jpg';
import ImageGrid2 from '@/app/assets/violin2.jpg';
import ImageGrid3 from '@/app/assets/violon.jpg';

const Home = () => {
  return (
    <TemplateDefault>
      <main className='flex flex-col items-center w-full bg-zinc-800'>
        <div className='w-7/12 space-y-2 px-4 py-14 tracking-wide'>
          <h2 className='text-3xl text-purple-500 font-medium'>
            O Atelier 
          </h2>

          <h1 className='text-4xl text-zinc-200 font-semibold'>
            O Roger Silva Lutheria é
          </h1>

          <p className='pt-5 text-zinc-400 font-medium tracking-widest leading-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perspiciatis minima, veniam assumenda incidunt placeat quidem dolorum harum non? Fuga, sequi voluptatibus dolor quos vero obcaecati cupiditate dolorem at quidem.
          </p>

          <div className='grid grid-cols-5 grid-rows-4 gap-4 pt-12'>
            <Image
              alt=''
              src={ImageGrid}
              className='col-span-3 h-full object-cover rounded-md' 
            />
            <Image
              alt=''
              src={ImageGrid2} 
              className='col-span-2 row-span-2 h-full object-cover rounded-md'
            />
            <Image
              alt=''
              src={ImageGrid3}
              className='col-span-2 h-full object-center object-cover rounded-md'  
            />
            <Image
              alt=''
              src={ImageGrid} 
              className='h-full object-cover object-right rounded-md'
            />
          </div>
        </div>
      </main>
    </TemplateDefault>
  )
}

export default Home;
