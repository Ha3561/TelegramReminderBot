 import React from 'react'
 
 const About = () => {
   return (
    <div className='border-b border-neutral-900 py-4'> 
    <h2 className='my-20 text-center text-4xl'><span className='bg-gradient-to-r from-blue-400  to-purple-500 bg-clip-text tracking-tight text-transparent'>About Me</span></h2>
    
        <div className="flex flex-wrap ">
            <div className="w-full flex items-center justify-center gap-8"> 
                <img src="/images/pic.png" alt="Harshit Verma" className=" ml-5 h-60 w-60 rounded-full" />
                <p className="font-light tracking-tighter">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, corrupti quam sint ipsum quidem quas tempora odio illo quia dolorum doloremque quisquam earum architecto maiores dolor placeat ex dignissimos? Ut?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rerum quis minima quasi dignissimos qui, distinctio veniam neque ipsum hic sit beatae ea voluptatem accusamus ut? Minima maxime suscipit vero.
                </p>
                
            </div>
        </div>
    </div>
  
 

        

      
   )
 }
 
 export default About
 