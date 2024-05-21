import React from 'react' 
import { FaLinkedin} from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa'; 
import { FaInstagram } from 'react-icons/fa';   
import { IoLogoGoogle } from 'react-icons/io5';
//React icons library used to import react icons. 

const icons = [
  {icon: <IoLogoGoogle/>, link: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'},
  {icon: <FaLinkedin/>, link: 'https://www.linkedin.com/in/harshit-verma-a22b64255/'},
  {icon: <FaGithub/>, link: 'https://github.com/Ha3561'},
  {icon: <FaInstagram/>, link: 'https://www.instagram.com/harshit_v247/'}
]

function NavBar() {
  return (
    <div>
      <nav className=' inset-0 -z-10 h-full w-full items-center px-5 py-6 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100% flex flex-row  justify-between hover:bg-gradient-to-b from-pink-700 to-slate-1000 '>  
       
        <div className='flex flex-shrink-0 mr-1 items-center' > 
            <img src="/images/Logo.png" alt='logo' className='h-14 w-14 mx-2  '/>  
        </div> 
        <div className='flex items-center justify-center gap-4 text-2xl'> 

            {icons.map((icon, index) => (<a key={index} className='hover:bg-slate-500 hover:text-slate-200' href={icon.link} target='_blank' rel='noopener noreferrer'>{icon.icon}</a>))}
            
              
        </div> 
      </nav> 
      <hr className='border-purple-800 ' />
    </div>
  );
}

export default NavBar;
