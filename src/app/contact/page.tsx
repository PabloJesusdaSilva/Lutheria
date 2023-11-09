'use client';

import { useState } from 'react';

import TemplateDefault from '../template/Default';

const Contact = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [message, setMessage] = useState('');

   return(
      <TemplateDefault>
         <main className='flex justify-center py-16 w-full h-auto bg-zinc-800'>
            <div className='w-5/12'>
               <form 
                  className='flex flex-col space-y-8'
                  onSubmit={() => {}}
               >
                  <input 
                     className='p-3 rounded-md shadow-md tracking-wider text-zinc-400 bg-zinc-900'
                     type='text'
                     placeholder='Digite o seu nome'
                     onChange={(e) => setName(e.target.value)}
                     value={name}
                  />
                  <input 
                     className='p-3 rounded-md shadow-md tracking-wider text-zinc-400 bg-zinc-900'
                     type='text'
                     placeholder='Digite o seu email'
                     onChange={(e) => setEmail(e.target.value)}
                     value={email}
                  />
                  <input
                     className='p-3 rounded-md shadow-md tracking-wider text-zinc-400 bg-zinc-900' 
                     type='tel' 
                     placeholder='Digite o seu número de telefone'
                     onChange={(e) => setPhone(e.target.value)}
                     value={phone}
                  />
                  <textarea 
                     className='h-36 p-3 rounded-md shadow-md tracking-wider text-zinc-400 bg-zinc-900 resize-none'
                     placeholder='Digite a sua mensagem'
                     onChange={(e) => setMessage(e.target.value)}
                     value={message}
                  >

                  </textarea>

                  <button
                     className='relative left-[71%] w-40 p-2 text-xl text-zinc-500 font-semibold rounded-md tracking-widest bg-zinc-950'
                     type='submit'
                     value='Enviar'
                  >
                     Enviar
                  </button>
               </form>
            </div>
         </main>
      </TemplateDefault>
   );
}

export default Contact;