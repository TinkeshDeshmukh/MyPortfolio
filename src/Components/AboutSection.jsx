import { ChartBar, Code, Rocket } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Add this

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>Passionate Software Engineer & Lifelong Learner</h3>
            <p className='text-muted-foreground'>
              I'm a passionate Computer Science student and frontend developer who thrives on turning ideas into visually appealing, interactive websites. With a strong grip on HTML, CSS, JavaScript, and the MERN stack, I enjoy crafting digital experiences that are both functional and user-centric.
            </p>
            <p className='text-muted-foreground'>
              Beyond coding, I love exploring data analytics and participating in hackathons to solve real-world problems creatively. Whether it's building a portfolio site or a smart IoT solution, I’m always eager to learn, collaborate, and innovate in the tech space.
            </p>
            <div className='flex flex-col justify-center items-center sm:flex-row gap-4'>
              {/* ✅ Use <Link> instead of <a> for routing */}
              <Link to="/contact" className='cosmic-button'>Get In Touch</Link>
              <a 
                href="/MyPortfolio/RenderCV_EngineeringResumes_Theme__1_ (1).pdf" 
                download="Tinkesh_Resume.pdf" 
                className='px-6 py-2 border-2 border-primary rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300'
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Web Development</h4>
                  <p className='text-muted-foreground'>Turning clean code into captivating interfaces, where design meets performance on the modern web.</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <ChartBar className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Data Analytics</h4>
                  <p className='text-muted-foreground'>Extracting actionable insights from raw data using Python, Pandas, and visual storytelling techniques</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Rocket className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Projects</h4>
                  <p className='text-muted-foreground'>Hands-on projects that highlight my journey, skills, and ability to turn ideas into working solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
