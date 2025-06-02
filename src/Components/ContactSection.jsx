import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '../lib/utils'

const ContactSection = () => {
   const [result, setResult] = useState("");
   const [success, setSuccess] = useState(false);
   

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "af05c260-086a-4162-8094-ca069cd1b082");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setSuccess(true);
        setTimeout(() => {
            setResult("");
            setSuccess(false);
        }, 5000);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
            Get In  
                <span className='text-primary'>
                    Touch
                </span>
            </h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto '>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question, want to collaborate, feel free to reach out!
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 '>
                <div className='space-y-8'>
                    <h3 className='text-2xl font-semibold mb-6'>
                        Contact Inforamation
                    </h3>
                    <div className='space-y-6 justify-center items-center'>
                        {/* Email section */}
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Mail className='h-6 w-6 text-primary'/> 
                            </div>
                            <div>
                                <h4 className='font-medium'>Email</h4>
                                <a href="mailto:anuragdeshmukh108@gmail.com" className='text-muted-foreground hover:text-sky-400 transition-colors'>
                                    anuragdeshmukh108@gmail.com
                                </a>
                            </div>

                        </div>
                        {/* Phone Number Section */}
                        <div className='flex items-start space-x-4 '>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Phone className='h-6 w-6 text-primary'/> 
                            </div>
                            <div className='flex flex-col items-center w-1/2 justify-center'>
                                <h4 className='font-medium text-center'>Phone</h4>
                                <a href="tel:+918421083349" className='text-muted-foreground hover:text-sky-400 transition-colors'>
                                    +91 8421083349
                                </a>
                            </div>

                        </div>
                        {/* Location Section */}
                        <div className='flex items-start space-x-4 '>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <MapPin className='h-6 w-6 text-primary'/> 
                            </div>
                            <div className='flex flex-col items-center w-1/2 justify-center'>
                                <h4 className='font-medium text-center'>Location</h4>
                                <a  className='text-muted-foreground hover:text-sky-400 transition-colors'>
                                    Pune, Maharashtra, India
                                </a>
                            </div>

                        </div>
                        
                    </div>
                    <div className='pt-8 '>
                        <h4 className='font-medium mb-4'>Connect With Me</h4>
                        <div className='flex justify-center space-x-4 '>
                            <a href="https://www.linkedin.com/in/tinkesh-deshmukh-87a704259/" className=' hover:text-sky-400 ' target='_blank'>
                                <Linkedin/>
                            </a>
                            <a href="https://www.instagram.com/anur.ag2025/" target='_blank' className=' hover:text-pink-500'>
                                <Instagram/>
                            </a>
                        </div>
                    </div>

                </div>
                <div className='bg-card p-8 rounded-lg shadow-xs'>
                    <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
                    <form className='space-y-6' action="" onSubmit={onSubmit}>
                        <div>
                            <label className='block text-sm  font-medium mb-2' htmlFor="name">Your Name</label>
                            <input type="text" name='name' id='name' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' 
                            placeholder='Enter Name' />
                        </div>
                          <div>
                            <label className='block text-sm  font-medium mb-2' htmlFor="email">Your Email</label>
                            <input type="email" name='email' id='email' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' 
                            placeholder='Enter email' />
                        </div>
                          <div>
                            <label className='block text-sm  font-medium mb-2' htmlFor="message">Your Message</label>
                            <textarea name='message' id='message' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none h-32s' 
                            placeholder="Hello I'd like to talk about.." />
                        </div>
                        <button
                         type="submit" 
                        className={cn("cosmic-button w-full flex items-center justify-center gap-2",)}>
                            Send Message
                            <Send/>
                        </button>

                        <p className={success?"text-green-500 text-center":"hidden"}>
                            {success?"Thank you for your message! I'll get back to you soon.":" "}
                        </p>

                    </form>

                </div>

            </div>

        </div>
    </section>
  )
}

export default ContactSection