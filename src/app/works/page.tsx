import Image from 'next/image';

import Default from '../template/Default';
import HeaderSection from '../partials/SectionDescription';

import ImageProduct from  '@/app/assets/banner-footer.jpg';

const Works = () => {
   return(
      <Default>
         <main className='flex flex-col items-center bg-zinc-800'>
            <div className='w-9/12'>
               <HeaderSection
                  title='Trabalhos'
                  subtitle='Conheça nossos trabalhos' 
               />
            </div>

            <div className='flex flex-col items-center w-9/12 mb-16 space-y-20 my-5'>
               <div className='
                  flex flex-col space-x-0 space-y-8
                  md:flex-row md:space-x-5 md:space-y-0
               '>
                  <p className='p-4 text-zinc-400 tracking-widest leading-7 rounded-xl transition-all duration-300 hover:bg-zinc-900'>
                     A construção de um bom violino requer por parte do construtor muita arte, precisão e persistência, pois o instrumento é inteiramente  feito à mão. Depois de vários processos de labuta, desde a escolha da madeira ao envernizamento, que podem durar vários meses, o produto final surge e o instrumento passa a emitir o som brilhante e cristalino do violino
                  </p>
                  
                  <Image
                     alt=''
                     src={ImageProduct}
                     className='w-full h-80 object-cover rounded-xl shadow-lg' 
                  />
               </div>
               
               <div className='
                  flex flex-col items-center space-x-0 space-y-8
                  md:flex-row md:space-x-5 md:space-y-0
               '>
                  <Image
                     alt=''
                     src={ImageProduct}
                     className='w-full 96 object-cover rounded-xl shadow-lg md:w-96' 
                  />

                  <p className='p-4 text-zinc-400 tracking-widest leading-7 rounded-xl transition-all duration-300 hover:bg-zinc-900'>
                     Escolha dos materiais As madeiras tradicionalmente empregues para a construção do violino são o bordo e o sicômoro. A variedade de bordo usada é o Ácer Pseudoplatanus e o Ácer Platanoides. Os abetos mais utilizados para os tampos superiores dos instrumentos de corda são o Picea abies ou o Picea excelsa, as árvores de natal comuns. Diz-se porém que as melhores madeiras para construir um violino são aquelas que cresceram a grandes altitudes e sofreram ásperas condições metereológicas, vivendo em solo pouco fértil. Normalmente 8 a 10 anos é considerado o período necessário para a madeira se tornar própria para a construção do violino, pois se este período for diminuído consideravelmente, a madeira do instrumento poderá distorcer e rachar com mais facilidade.
                  </p>
               </div>

               <p className='p-4 text-zinc-400 tracking-widest leading-7 rounded-xl transition-all duration-300 hover:bg-zinc-900'>
                  Forma do corpo O contorno dos tampos é então marcado por um escantilhão e é cortado cuidadosamente com uma serra fina. É dada uma primeira forma ao tampo com o formão. Depois o construtor utiliza as plainas (têm o tamanho do polegar!) para aperfeiçoar a forma do corpo do violino. O centro de cada tampo é ligeiramente escavado, tendo pois uma leve inclinação. Esta arte de construir violinos exige muita perícia, já que a menor variação nas dimensões desejadas afectará irreversivelmente o som. Aperfeiçoamento do corpo Após o tampo ficar liso, uma ferramenta cava um pequeno sulco por volta da madeira. São então embutidas as filetes, que além de um elemento decorativo, ajudam a evitar rachas na madeira. Os tampos tem uma grossura mais ou menos uniforme de 3mm. Lhargas As ilhargas separam o tampo superior do inferior. Têm também a função de transmitir as vibrações entre os tampos do instrumento. Auxiliadas por blocos de madeira colocados no interior do instrumento, como estrutura de reforço, as ilhargas (feitas a partir de tiras de ácer ou sicômoro) são aquecidas por um ferro curvo a alta temperatura, de modo a torná-las flexíveis. São então coladas à estrutura do violino, e segue-se o tampo superior.
               </p>

               <div className='
                  flex flex-col space-y-5 space-x-0
                  md:flex-row md:space-x-8 md:space-y-0
               '>
                  <Image
                     alt=''
                     src={ImageProduct}
                     className='w-full object-cover rounded-xl shadow-lg md:w-80' 
                  />

                  <p className='p-4 text-zinc-400 tracking-widest leading-7 rounded-xl transition-all duration-300 hover:bg-zinc-900'>
                     Ouvidos em forma de ‘f’ Os ouvidos têm uma grande influência no timbre do violino. Comunicam o ar e as vibrações dentro do corpo do instrumento para o exterior. Além disso, afectam a flexibilidade do tampo superior e como conseqüência os seus padrões de vibração. São cortados com uma pequena e afiada serra, e depois acabada com navalha pontiaguda como mostra nas imagens abaixo: Acabamento Uma barra de madeira é colada por baixo do tampo superior, ao longo da superfície interior. A barra harmónica tem como principal função transmitir as vibrações a todo o corpo do violino, a partir do cavalete. Ao corpo acabado do instrumento é colado o braço (que é feito de um bloco de ácer esculpido). Envernizamento O processo de envernizamento tem basicamente duas funções: uma delas é permear a madeira com uma substância capaz de protegê-la do suor e sujidade. A outra é simplesmente estética. O verniz é elaborado através de vários pigmentos. Quando o corpo e o braço estão colados, o construtor dá várias demãos em num período de c. 5/6 meses. O instrumento é posto a secar, e só passado certa altura se poderá dar nova demão. Montagem das peças Várias peças são colocadas nesta altura, como o estandarte, o cavalete, o ponto, as cordas, as cravelhas. A alma é colocada meticulosamente entre os dois tampos, de modo a propagar o som e vibrações para as costas. O cavalete, além de suportar as cordas, permite a transmissão do som para o corpo do violino.
                  </p>
               </div>
            </div>
         </main>
      </Default>
   );
}

export default Works;