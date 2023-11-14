'use client'
;
import React from 'react';

import { useState, useEffect, useRef } from 'react';

import { motion } from 'framer-motion';

interface ICarousel {
   actions: React.ReactNode;
}

const Carousel = ({ actions }: ICarousel) => {
   const carousel = React.useRef<HTMLDivElement> (null);
   const [width, setWidth] = useState(0);
   
   useEffect(() => {
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
   }, [])

  return (
      <motion.div 
         ref={carousel}
         className='w-full max-w-[900px] cursor-grab' 
         whileTap={{ cursor: 'grabbing' }}
      >
         <motion.div 
            className='flex space-x-12'
            drag='x'
            dragConstraints={{ right: 0, left: -width}}
         >
            {actions}
         </motion.div>
      </motion.div>
   );
}

export default Carousel