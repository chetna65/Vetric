import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Perks from './Perks'
import Companies from './Companies'
import Pricing from './Pricing'
import Bento from './Bento'
import Forms from './Forms'
import Footer from './Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Perks/>
    <Companies/>
    <Pricing/>
    <Bento/>
    <Forms/>
    <Footer/>
    </>
    
  )
}

export default App
