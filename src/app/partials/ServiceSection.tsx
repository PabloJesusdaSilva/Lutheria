const ServiceSection = () => {
   return(
      <article className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full tracking-wider leading-7'>
         <div className='flex flex-col items-center py-6 px-4 w-full h-52 rounded-lg shadow-lg transition-all duration-300 bg-zinc-700 hover:scale-105'>
            <h2 className='my-2 text-xl text-zinc-300 font-semibold'>
               Fabricação de instrumentos musicais
            </h2>

            <p className='text-zinc-400'>
               Fabricamos instrumentos desde a planta. Nossos instrumentos são construidos com as melhores madeiras.
            </p>
         </div>

         <div className='flex flex-col items-center py-6 px-4 w-full h-52 rounded-lg shadow-lg transition-all duration-300 bg-zinc-700 hover:scale-105'>
            <h2 className='my-2 text-xl text-zinc-300 font-semibold'>
               Ajuste de instrumentos de cordas
            </h2>

            <p className='text-zinc-400'>
               Venha até nós para fazer os ajustes e reparos em seu violino, viola ou violoncelo.
            </p>
         </div>

         <div className='flex flex-col items-center py-6 px-4 w-full h-52 rounded-lg shadow-lg transition-all duration-300 bg-zinc-700 hover:scale-105'>
            <h2 className='my-2 text-xl text-zinc-300 font-semibold'>
               Restauração de instrumentos de cordas
            </h2>

            <p className='text-zinc-400'>
               Os instrumentos construídos com madeira mostram maior sensibilidade ao tempo, e as diversas temperaturas climáticas.
            </p>
         </div>

         <div className='flex flex-col items-center py-6 px-4 w-full h-52 rounded-lg shadow-lg transition-all duration-300 bg-zinc-700 hover:scale-105'>
            <h2 className='my-2 text-xl text-zinc-300 font-semibold'>
               Construção de instrumentos profissionais
            </h2>

            <p className='text-zinc-400'>
               Você que precisa de um instrumento melhor para tocar em orquestra, aqui você encontrará!
            </p>
         </div>
      </article>
   );
}

export default ServiceSection;