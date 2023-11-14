'use client'

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Maps = () => {
   const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: 'AIzaSyCTsf12Tb1drshnI6IVDjeK8njz2ZuHyCA'
    })

    const position = {
      lat: -23.391527202381265,
      lng: -46.7108296335793
     }

   return(
      <div className='w-full h-96'>
         {
            isLoaded ? (
               <GoogleMap
                 mapContainerStyle={{width: '100%', height: '100%', borderRadius: '14px'}}
                 center={position}
                 zoom={15}
               >
                  <Marker 
                     position={position}
                     options={{
                        label: {
                           text: 'Roger Silva Lutheria',
                           className: '-mt-11 font-medium tracking-wider'
                        }
                     }} 
                  />
               </GoogleMap>
           ) : <></>
         }
      </div>
   );
}

export default Maps;