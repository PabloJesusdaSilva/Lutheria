'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

import TemplateDefault from '../template/Default';
import DescriptionSection from '../partials/DescriptionSection';
import ToastConfirm from '../components/ToastConfirm';

type IEmailProps = {
   from_name: string;
   message: string;
   email: string;
   phone: string;
}

const Contact = () => {
   const [name, setName] = useState<string>('');
   const [email, setEmail] = useState<string>('');
   const [message, setMessage] = useState<string>('');
   const [phone, setPhone] = useState<string>('');

   const [toastConfirm, setToastConfirm] = useState<boolean>(false);

   const sendEmail = (e: any) => {
      e.preventDefault();

      const templateParams: IEmailProps = {
         from_name: name,
         message: message,
         email: email,
         phone: phone
      }

      emailjs.send('service_iaa399s', 'template_afnu03e', templateParams, 'sc392kkY-hhraF3HP')
         .then((response) => {
            console.log('Email enviado', response.status, response.text);
            setName('');
            setMessage('');
            setEmail('');
            setPhone('');
         }, (err) => {
            console.log('Failed: ', err);
         })
   }

   const handletoastConfirm = () => {
      setToastConfirm(true)

      setTimeout(() =>{
         setToastConfirm(false);
      }, 4000);
   }

   return(
      <TemplateDefault>
         <main className='grid grid-cols-1 justify-items-center pb-20 w-full h-auto bg-zinc-800 lg:grid-cols-2'>
            <div className='w-10/12 mb-12 -ml-8 lg:w-8/12 lg:space-y-2 tracking-wide lg:col-span-2 lg:-ml-56'>
               <DescriptionSection
                  title='Fale Conosco'
                  subtitle='Contato' 
               />
           </div>

            <div className='w-10/12 mb-28 pl-0 tracking-wider lg:w-8/12 lg:mb-0lg:pl-12'>
               <h2 className='mb-2 text-3xl text-zinc-200 font-medium'>
                  Formulario de contato
               </h2>

               <p className='mb-6 text-zinc-400 leading-8'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti doloremque pariatur accusantium, dolo
               </p>

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
                  />

                  <div className='w-full flex justify-end'>
                     <button
                        onClick={handletoastConfirm}
                        className='w-40 p-2 text-xl text-zinc-500 font-semibold rounded-md tracking-widest transition-all duration-200 bg-zinc-950 hover:text-zinc-300'
                        type='submit'
                        value='Enviar'
                     >
                        Enviar
                     </button>
                  </div>
               </form>
            </div>

            <div className='w-10/12 tracking-widest space-y-10 lg:w-8/12'>
               <h2 className='-mb-7 text-3xl text-zinc-200 font-medium'>
                  Atendimento ao cliente
               </h2>

               <article>
                  <h3 className='mb-1 text-xl text-zinc-300 font-medium'>
                     Horário de funcionamento
                  </h3>

                  <p className='text-zinc-400'>
                     Segunda a sexta - das 09:00 às 18:00
                  </p>
                  <p className='text-zinc-400'>
                     Sábado - das 09:00 às 14:00
                  </p>
               </article>
               
               <article>
                  <h3 className='mb-1 text-xl text-zinc-400 font-medium'>
                     Telefone
                  </h3>

                  <p className='text-zinc-400'>(11) 97411-8228</p>
               </article>
               
               <article>
                  <h3 className='mb-1 text-xl text-zinc-400 font-medium'>
                     Email
                  </h3>

                  <p className='text-zinc-400'>
                     contato@rogersilvalutheria.net.br
                  </p>
                  <p className='text-zinc-400'>
                     lutheria120576@gmail.com
                  </p>
               </article>
            </div>

            {
               toastConfirm 
                  ?  <ToastConfirm />
                  : ''
            }
         </main>
      </TemplateDefault>
   );
}

export default Contact;