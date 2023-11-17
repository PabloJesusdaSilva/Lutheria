import { motion } from 'framer-motion'

const ToastConfirm = () => {

   return(
      <motion.div 
         className='absolute top-full left-10 px-6 py-3 rounded-lg bg-green-500 shadow-md shadow-green-700 lg:left-16'
         initial={{ left: -100 }}
         animate={{ left: 100 }}
      >
         <p className='text-lg text-zinc-300 tracking-widest font-medium'>
            Email Enviado!
         </p>
      </motion.div>
   );
}

export default ToastConfirm;