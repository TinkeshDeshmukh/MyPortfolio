import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import WhyMe from './components/WhyMe'
import Preloader from './components/Preloader'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // ⏱️ 2 seconds preloader

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="bg-[#202020] text-white relative">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <WhyMe />
        </div>
      )}
    </>
  )
}

export default App
