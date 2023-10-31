interface ITitleDescription {
   title: string;
   subtitle: string;
}

const HeaderSection = ({
   title,
   subtitle
}: ITitleDescription) => {
   return(
      <div className='w-7/12 space-y-2 mb-6 px-4 pt-14 tracking-widest'>
         <h2 className='text-3xl text-purple-500 font-medium'>
            {title} 
         </h2>

         <h1 className='text-4xl text-zinc-200 font-semibold'>
            {subtitle}
         </h1>
      </div>
   );
}

export default HeaderSection;