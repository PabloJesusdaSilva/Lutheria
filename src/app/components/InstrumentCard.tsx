import Image from 'next/image';

import { BookmarkCheckIcon } from 'lucide-react';
import { url } from 'inspector';

interface ICard {
   image: any;
   title: string;
   description: string;
}

const InstrumentCard = ({
   image,
   title,
   description
}: ICard) => {
   return(
      <article className='w-72 h-72 mb-56'>
         <Image 
            alt=''
            src={image}
            className='w-full h-full object-cover rounded-t-xl'
         />

         <div className='p-4 rounded-b-xl shadow-lg bg-zinc-900'>
            <h4 className='mb-1 text-xl text-zinc-300 font-semibold'>
               {title}
            </h4>

            <p className='text-zinc-400 text-sm tracking-wider leading-7'>
               {description}
            </p>

            <button className='mt-4 px-4 py-2 text-lg text-purple-700 font-bold tracking-widex rounded-lg bg-zinc-400'>
               Contato
            </button>
         </div>

         <div className='relative flex -top-[450px] -left-8 space-x-2 w-32 px-3 py-2 rounded-xl cursor-pointer bg-zinc-300'>
            <BookmarkCheckIcon color='#7e22ce' />
            <span className='text-purple-700 font-semibold tracking-wider'>
               Ajustado
            </span>
         </div>
      </article>
   );
}

export default InstrumentCard;