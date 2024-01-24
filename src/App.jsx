// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom';
import './App.css'
import Button from './components/Button/button.jsx';
import Navbar from './components/Navbar/NavBar.jsx';
import Astros from './components/Astros/Astros.jsx';
import BottomNav from './components/BottomNav/BottomNav.jsx';
import About from './components/About/About.jsx';

function App() {

  const btnText = 'Login';

  const links = [
    {id:1, name: 'Home', href: '/'},
    {id:2, name: 'About', href: '/about'},
    {id:3, name: 'Astros', href: '/astros'},
  ]

  return(
    <>
    <Navbar links= {links} />
    <Routes>
      <Route 
       path = '/'
       element={<Button name ={btnText} />}
      />
      {/* <Route 
      path ='/about'
      element ={<BottomNav />}
      /> */}
      <Route
      element={<About/>}
      path='/about'
      />
       <Route 
      path ='/astros'
      element ={<Astros />}
      />
    </Routes>
    </>
  )

}

export default App
