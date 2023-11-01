import Image from 'next/image';

import TemplateDefault from './template/Default';

import ImageGrid from '@/app/assets/violins.jpg';
import ImageGrid2 from '@/app/assets/violin2.jpg';
import ImageGrid3 from '@/app/assets/violon.jpg';

const Home = () => {
  return (
    <TemplateDefault>
      <main className='flex flex-col items-center w-full bg-zinc-800'>
        <div className='w-8/12 md:w-7/12 space-y-2 px-4 pt-14 tracking-wide'>
          <h2 className='text-3xl text-purple-500 font-medium'>
            O Atelier 
          </h2>

          <h1 className='text-4xl text-zinc-200 font-semibold'>
            Roger Silva Lutheria é
          </h1>

          <p className='pt-5 text-zinc-400 font-medium tracking-widest leading-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perspiciatis minima, veniam assumenda incidunt placeat quidem dolorum harum non? Fuga, sequi voluptatibus dolor quos vero obcaecati cupiditate dolorem at quidem.
          </p>

          <Image
            alt=''
            src={ImageGrid}
            className='col-span-3 h-full object-cover rounded-lg shadow-lg' 
          />
        </div>

        <div className='w-8/12 md:w-7/12 my-28'>
          <div className='mb-5'>
            <h2 className='text-5xl text-purple-400 font-bold tracking-widest'>
              O Luthier
            </h2>
          </div>

          <div className='flex flex-col space-x-0 space-y-6 
                          md:flex-row md:space-x-20 md:space-y-0 leading-7 tracking-wide'>
            <p className='text-zinc-400'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nihil eius, labore corporis quidem ipsa sint officia exercitationem atque earum, quae non consectetur veniam blanditiis ratione eos quam vero incidunt.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nihil eius, labore corporis quidem ipsa sint officia exercitationem atque earum, quae non consectetur veniam blanditiis ratione eos quam vero incidunt.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nihil eius, labore corporis quidem ipsa sint officia exercitationem atque earum, quae non consectetur veniam blanditiis ratione eos quam vero incidunt.
            </p>
            <Image
              alt=''
              src={ImageGrid3} 
              className='w-96 rounded-lg shadow-xl'
            />
          </div>
        </div>
      </main>
    </TemplateDefault>
  )
}

export default Home;
