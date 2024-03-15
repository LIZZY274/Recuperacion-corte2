import React from 'react'
import Links from '../UI/Links'
import Input from '../UI/Input'
import LinkImg from '../UI/LinkImg'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo2.jpg'

function Header() {
  return (

    <>
        <header className='flex gap-2 p-4 bg-[#D9D9D9] w-full h-[64px] justify-between'>
            <div className='flex items-center gap-2'>
                <div className='w-[144px] h-[44px] items-center flex justify-center'>
                    <img className=' w-full h-full object-cover' src={logo} alt="logo" />
                </div>
                <div className='w-[350px]'>
                    <Input placeholder="Buscar......"/>
                </div>
                <nav className=' relative flex gap-1 flex-row'>
                    <Links msn='Inicio'/>
                   <Links msn='Grupos'/>
                   <Links msn='Articulos'/>
                   <Link to="/"><Links msn='Comunicados'/></Link>
                </nav>
            </div>
            <nav className='flex gap-2 items-center'>
               <Link to="/perfil"> <Links msn='Mi Perfil'/></Link>
                <LinkImg/>
            </nav>
        </header>
    </>
  )
}

export default Header