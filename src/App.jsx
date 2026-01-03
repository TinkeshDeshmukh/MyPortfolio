import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import WhyMe from './components/WhyMe'

const App = () => {
  return (
    <div className='bg-[#202020] text-white relative '>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <WhyMe/>
      
    </div>
  )
}

export default App