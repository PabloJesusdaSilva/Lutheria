import Image from 'next/image';

import TemplateDefault from '@/app/template/Default';
import DescriptionSection from '@/app/partials/DescriptionSection';
import Maps from '@/app/components/Maps';
import ServiceSection from '@/app/partials/ServiceSection';

import ImageGrid from '@/app/assets/violins/violins.jpg';
import ImageGrid3 from '@/app/assets/violon.jpg';

const Home = () => {
  return (
    <TemplateDefault>
      <main className='flex flex-col items-center w-full bg-zinc-800'>
        <div className='w-10/12 px-0 lg:w-8/12 space-y-2 lg:px-4 pt-10 tracking-wide'>
          <DescriptionSection
            title='O Atelier'
            subtitle='Roger Silva Lutheria' 
          />

          <p className='px-4 text-zinc-400 font-medium tracking-widest leading-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perspiciatis minima, veniam assumenda incidunt placeat quidem dolorum harum non? Fuga, sequi voluptatibus dolor quos vero obcaecati cupiditate dolorem at quidem.
          </p>

          <Image
            alt=''
            src={ImageGrid}
            className='col-span-3 h-full object-cover rounded-lg shadow-lg' 
          />
        </div>

        <div className='w-10/12 px-0 lg:w-8/12 space-y-2 lg:px-4 pt-10 tracking-wide'>
          <DescriptionSection
            title='Serviços'
            subtitle='O que fazemos?' 
          />

          <ServiceSection />
        </div>

        <div className='w-10/12 px-0 lg:w-8/12 space-y-2 lg:px-4 pt-14 tracking-wide'>
          <DescriptionSection
            title='Endereço'
            subtitle='Mapa' 
          />          

          <Maps />
        </div>

        <div className='w-10/12 lg:w-8/12 my-28'>
          <div className='mb-5'>
            <h2 className='text-5xl text-amber-600 font-bold tracking-widest'>
              O Luthier
            </h2>
          </div>

          <div className='flex flex-col space-x-0 space-y-6 
                          lg:flex-row lg:space-x-20 lg:space-y-0 leading-7 tracking-wide'>
            <p className='text-zinc-400'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nihil eius, labore corporis quidem ipsa sint officia exercitationem atque earum, quae non consectetur veniam blanditiis ratione eos quam vero incidunt.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nihil eius, labore corporis quidem ipsa sint officia exercitationem atque earum, quae non consectetur veniam blanditiis ratione eos quam vero incidunt.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nihil eius, labore corporis quidem ipsa sint officia exercitationem atque earum, quae non consectetur veniam blanditiis ratione eos quam vero incidunt.
            </p>
            <Image
              alt=''
              src={ImageGrid3} 
              className='w-full h-96 object-cover rounded-lg shadow-xl lg:w-96 lg:h-auto'
            />
          </div>
        </div>
      </main>
    </TemplateDefault>
  );
}

export default Home;
