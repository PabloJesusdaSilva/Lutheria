import Header from '../partials/Header'

type Props = {
   children: string | JSX.Element | JSX.Element[] 
 }

 const Default = ({ children }: Props) => {
   return(
      <>
         <Header />
         {children}
      </>
   )
 }

 export default Default;