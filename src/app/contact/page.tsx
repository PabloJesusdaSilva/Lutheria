'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

import TemplateDefault from '../template/Default';

const Contact = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [message, setMessage] = useState('');

   const sendEmail = (e: any) => {
      e.preventDefault();

      const templateParams = {
         from_name: name,
         message: message,
         email: email,
         phone: phone
      }

      emailjs.send('service_iaa399s', 'template_afnu03e', templateParams, 'sc392kkY-hhraF3HP')
         .then((response) => {
            console.log('Email enviado', response.status, response.text);
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
         }, (err) => {
            console.log('Failed: ', err);
         })
   }

   return(
      <TemplateDefault>
         <main className='flex justify-center py-16 w-full h-auto bg-zinc-800'>
            <div className='w-5/12'>
               <form 
                  className='flex flex-col space-y-8'
                  onSubmit={sendEmail}
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

                  <div className='w-full flex justify-end'>
                     <button
                        className='w-40 p-2 text-xl text-zinc-500 font-semibold rounded-md tracking-widest transition-all duration-200 bg-zinc-950 hover:text-zinc-300'
                        type='submit'
                        value='Enviar'
                     >
                        Enviar
                     </button>
                  </div>

               </form>
            </div>
         </main>
      </TemplateDefault>
   );
}

export default Contact;