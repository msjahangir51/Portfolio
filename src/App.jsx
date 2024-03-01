import React from 'react'
import Home from './assets/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './assets/Pages/About';
import Services from './assets/Pages/Services';
import Protfolio from './assets/Pages/Protfolio';
import Resume from './assets/Pages/Resume';
import Contact from './assets/Pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/service' element={<Services/>}></Route>
          <Route path='/protfolio' element={<Protfolio/>}></Route>
          <Route path='/resume' element={<Resume/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App