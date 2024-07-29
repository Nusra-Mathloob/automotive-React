import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>

<Header/>

<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/services' element={<Services/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>

</BrowserRouter>

<Footer/>
    </React.Fragment>
  )
}

export default App