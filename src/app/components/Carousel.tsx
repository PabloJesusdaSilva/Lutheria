import React, { SetStateAction, use } from 'react';

import { useState, useEffect, useRef, HTMLAttributes } from 'react';

import Image from '@/app/assets/violin2.jpg';
import { motion } from 'framer-motion';

import InstrumentCard from './InstrumentCard';

import ImageProduct from '@/app/assets/violins.jpg';

const data = [
   {
      image: {ImageProduct},
      title: 'Violoncelo Modelo Strad',
      description: 'Acompanha capa, arco e já ajustado pelo luthier Roger Silva.'
   },
   {
      image: {ImageProduct},
      title: 'Violoncelo Modelo Strad',
      description: 'Acompanha capa, arco e já ajustado pelo luthier Roger Silva.'
   },
   {
      image: {ImageProduct},
      title: 'Violoncelo Modelo Strad',
      description: 'Acompanha capa, arco e já ajustado pelo luthier Roger Silva.'
   },
   {
      image: {ImageProduct},
      title: 'Violoncelo Modelo Strad',
      description: 'Acompanha capa, arco e já ajustado pelo luthier Roger Silva.'
   },
   {
      image: {ImageProduct},
      title: 'Violoncelo Modelo Strad',
      description: 'Acompanha capa, arco e já ajustado pelo luthier Roger Silva.'
   },
   {
      image: {ImageProduct},
      title: 'Violoncelo Modelo Strad',
      description: 'Acompanha capa, arco e já ajustado pelo luthier Roger Silva.'
   },
]

const Carousel = () => {
   const carousel = React.useRef<HTMLDivElement> (null);
   const [width, setWidth] = useState(0);

   
   useEffect(() => {
      const widthReference: number | undefined = (carousel.current?.scrollWidth, carousel.current?.offsetWidth); 

      console.log(widthReference);

      setWidth(widthReference);
   }, [])

  return (
      <motion.div 
         ref={carousel}
         className='w-full cursor-grab' 
         whileTap={{ cursor: 'grabbing' }}
      >
         <motion.div 
            className='flex space-x-14'
            drag='x'
            dragConstraints={{ right: 0, left: -width}}
         >
         {
            data.map((item) => (
               <InstrumentCard
                  key={item.title}
                  image={item.image}
                  title={item.title}
                  description={item.description} 
               />
            ))
                     }
         </motion.div>
      </motion.div>
   );
}

export default Carousel