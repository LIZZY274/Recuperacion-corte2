import React from 'react'
import Header from './components/pages/Header'
import Profile from './components/UI/post/atoms/Profile'
import HeroLayaout from './components/pages/HeroLayaout'
import Cominicados from './components/pages/Cominicados'


function App() {
  return (
    <div>
      <Header/>
      {/* <HeroLayaout/> */}
      <Cominicados/>
    </div>
  )
}

export default App
