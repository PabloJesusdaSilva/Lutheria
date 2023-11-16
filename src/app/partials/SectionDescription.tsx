interface ISectionDescription {
   title: string;
   subtitle: string;
}

const SectionDescription = ({
   title,
   subtitle
}: ISectionDescription) => {
   return(
      <div className='space-y-2 mb-6 px-4 pt-14 tracking-widest'>
         <h2 className='text-3xl text-amber-600 font-medium'>
            {title} 
         </h2>

         <h1 className='text-4xl text-zinc-200 font-semibold'>
            {subtitle}
         </h1>
      </div>
   );
}

export default SectionDescription;