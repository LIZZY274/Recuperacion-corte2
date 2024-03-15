import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HeroPerfil from './pages/HeroPerfil.jsx'
import HeroComunicados from './pages/HeroComunicados.jsx'

const rutas = createBrowserRouter([
  {
    path: "/perfil",
    element: <HeroPerfil/>
  },
  {
    path: "/",
    element: <HeroComunicados/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rutas}/>
  </React.StrictMode>,
)
