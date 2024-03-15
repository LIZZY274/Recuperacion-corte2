import React from 'react'

function Filtrar() {
  return (
    <>
        <div className='flex w-full gap-2 justify-end my-4 pr-4 items-center'>
            <p>Filtrar por: </p>
            <button className='p-2 px-2 rounded-full text-gray-500 bg-[#C5C5C5] text-xs text-black flex gap-2 items-center'>Catergorías: eventos</button>
            <button className='p-2 px-2 rounded-full bg-[#C5C5C5] text-xs text-black flex gap-2 items-center text-gray-500'>Etiquetas: ciclo 2023-2024</button>
        </div>
    </>
  )
}

export default Filtrar