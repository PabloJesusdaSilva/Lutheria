import { motion } from 'framer-motion'

const ToastConfirm = () => {

   return(
      <motion.div 
         className='fixed top-12 left-0 px-6 py-3 rounded-lg bg-green-500 shadow-md shadow-green-700 lg:left-16'
         initial={{ left: -100 }}
         animate={{ left: 100 }}
      >
         <p className='text-lg text-zinc-100 tracking-widest font-medium'>
            Email Enviado!
         </p>
      </motion.div>
   );
}

export default ToastConfirm;