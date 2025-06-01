import { ArrowUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
        <footer className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center'>

            <p className='text-sm text-center text-muted-foreground '>
                 &copy; {new Date().getFullYear()} Tinkesh Deshmukh 

            </p>
                <a href="#hero" className='p-2 bg-primary/10 hover:bg-primary/30 rounded-full text-primary transition-colors ' >
                    <ArrowUp size={35}/>
                </a>
        </footer>
)
}

export default Footer