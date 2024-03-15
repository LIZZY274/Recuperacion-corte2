import React from 'react'
import Usuario from '../UI/post/atoms/Usuario'
import { view, articulos } from '../../data/data.json'
import Articulo from '../UI/post/atoms/Articulo'
import View from '../UI/post/atoms/View'
import CreatePublic from '../UI/post/atoms/CreatePublic'
import Filtrar from '../UI/post/atoms/Filtrar'
import SeePublic from '../UI/post/atoms/SeePublic'
import DescriPublic from '../UI/post/atoms/DescriPublic'

function Cominicados() {
  return (
    <main className='grid grid-cols-7 gap-3 my-4'>
        <section className=' col-span-2 ' >
            <Usuario/>
        </section>

        <section className=' col-span-3'>
          <CreatePublic/>
            <Filtrar/>
            <View views={view}/>
            <DescriPublic/>
            <SeePublic/>
            
        </section>

        <section className=' col-span-2'>
         <Articulo articulos={articulos} />
        </section>
        
    </main>
  )
}

export default Cominicados