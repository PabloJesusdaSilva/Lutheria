import { motion } from 'framer-motion'

const ToastConfirm = () => {

   return(
      <motion.div 
         className='absolute top-full left-16 px-7 py-3 rounded-lg bg-green-500'
         initial={{ left: -100 }}
         animate={{ left: 100 }}
      >
         <p className='text-zinc-300 tracking-widest font-medium'>
            Email Enviado!
         </p>
      </motion.div>
   );
}

export default ToastConfirm;