import { 
   InstagramIcon,
   FacebookIcon,
   YoutubeIcon
} from 'lucide-react';

const Footer = () => {
   return(
      <footer className='w-full p-8 bg-zinc-900'>
         <div className='flex justify-around w-full space-x-8 pb-8 border-b-2 border-zinc-700'>
            <article className='w-1/4 tracking-wider text-zinc-400'>
               <h2 className='mb-2 text-xl text-zinc-300 font-medium'>
                  Contato
               </h2>

               <p className='mb-1'>(11)97411-8228</p>
               <p>lutheria120576@gmail.com</p>

               <div className='flex mt-12 space-x-6'>
                  <InstagramIcon className='cursor-pointer' />
                  <FacebookIcon className='cursor-pointer' />
                  <YoutubeIcon className='cursor-pointer' />
               </div>
            </article>

            <article className='w-1/4 tracking-wider text-zinc-400'>
               <h2 className='mb-2 text-xl text-zinc-300 font-medium'>
                  Endereço
               </h2>

               <p>
                  Alameda dos Pessegueiros, 30 - Vila Industrial Caieiras - SP 07700-000
               </p>
            </article>

            <article className='w-1/4 tracking-wider text-zinc-400'>
               <h2 className='mb-2 text-xl text-zinc-300 font-medium'>
                  Roger Siva Lutheria
               </h2>

               <p className='leading-7'>
                  Confira alguns de nossos instrumentos, para ter uma opção de escolha para a construção do seu instrumento – Violino / Viola / Violoncelo
               </p>
            </article>
         </div>

         <div className='w-full flex justify-center pt-8'>
            <h2 className='text-lg text-zinc-400 tracking-wider'>
               Developed by Pablo Silva
            </h2>
         </div>
      </footer>
   );
}

export default Footer;