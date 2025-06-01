import { ArrowDown } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <section id='hero' className='relative min-h-screen flex items-center justify-center px-4 '>
      <div className=' container max-w-4xl mx-auto text-center z-10'>
        <div className='space-y-6'>
            <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                <span className='text-primary opacity-0 animate-fade-in-delay-1'> Tinkesh</span>
                <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'> Deshmukh</span>
            </h1>
            <p className='text-lg md:text-xl text-muted-foreground max-2-2xl font-light mx-auto opacity-0 animate-fade-in-delay-3'>
                Blending creativity with code to craft unique digital experiences across web technologies, Java, and Data Analytics.Driven by curiosity, I turn complex problems into elegant, user-focused solutions.
            </p>
            <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                <a href="#projects" className=' cosmic-button '>View My Work</a>
            </div>
        </div>

      </div>
      <div className='absolute bottom-1  transform-translate-x-1/2 flex flex-col items-center animate-bounce justify-center'>
      <span className='text-sm text-muted-foreground mb-1'>Scroll</span>
      <ArrowDown className='h-7 w-5 text-primary'/>
      </div>
    </section>
  )
}

export default HeroSection
