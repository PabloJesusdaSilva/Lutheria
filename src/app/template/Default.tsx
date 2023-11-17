import Header from '../partials/Header'
import Footer from '../partials/Footer'

type Props = {
   children: string | JSX.Element | JSX.Element[];
}

 const Default = ({ children }: Props) => {
   return(
      <>
         <Header />
            {children}
         <Footer />
      </>
   );
 }

 export default Default;