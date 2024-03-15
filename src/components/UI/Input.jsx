import React from 'react'

function Input({placeholder}) {
  return (
    <>
        <input className='p-2 rounded-lg w-full outline-none' type="text" placeholder={placeholder} />
    </>
  )
}

export default Input
