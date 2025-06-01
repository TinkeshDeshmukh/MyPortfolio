import React from 'react'
import ThemeToggle from '../Components/ThemeToggle'
import StarBackground from '../Components/StarBackground'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import SkillSection from '../Components/SkillSection'
import ProjectSection from '../Components/ProjectSection'
import ContactSection from '../Components/ContactSection'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* Theme Toggle */}
      <ThemeToggle/>
      {/* Background  */}
      <StarBackground/>
      {/* Navbar */}
      <Navbar/>
      {/* Hero Section */}
      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillSection/>
        <ProjectSection/>
        <ContactSection/>
      </main>
      {/* Footer  */}
      <Footer/>
    </div>
  )
}

export default Home
