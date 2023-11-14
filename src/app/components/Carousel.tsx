'use client'
;
import React from 'react';

import { useState, useEffect, useRef } from 'react';

import Image from '@/app/assets/violin2.jpg';
import { motion } from 'framer-motion';

import InstrumentCard from './InstrumentCard';

interface ICarousel {
   test: React.ReactNode;
}

const Carousel = ({ test }: ICarousel) => {
   const carousel = React.useRef<HTMLDivElement> (null);
   const [width, setWidth] = useState(0);
   
   useEffect(() => {
      const widthReference: number | undefined = (carousel.current?.scrollWidth, carousel.current?.offsetWidth); 

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
            {test}
         </motion.div>
      </motion.div>
   );
}

export default Carousel