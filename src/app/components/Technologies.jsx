import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiFlask, SiDjango, SiPython, SiMysql, SiTensorflow, SiNumpy, SiPandas } from 'react-icons/si';

const technologies = [
  { icon: RiReactjsLine, color: 'text-cyan-400', link: 'https://reactjs.org/' },
  { icon: SiFlask, color: 'text-neutral-400', link: 'https://flask.palletsprojects.com/' },
  { icon: SiDjango, color: 'text-green-700', link: 'https://www.djangoproject.com/' },
  { icon: SiPython, color: 'text-blue-700', link: 'https://www.python.org/' },
  { icon: SiMysql, color: 'text-cyan-400', link: 'https://www.mysql.com/' },
  { icon: SiTensorflow, color: 'text-yellow-400', link: 'https://www.tensorflow.org/' },
  { icon: SiNumpy, color: 'text-cyan-300', link: 'https://numpy.org/' },
  { icon: SiPandas, color: 'text-blue-800', link: 'https://pandas.pydata.org/' },
  { icon: TbBrandNextjs, color: 'text-neutral-500', link: 'https://nextjs.org/' },
];

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'><span className='bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text tracking-tight text-transparent'>Technologies</span></h1>
      <div className='flex flex-wrap items-center justify-center gap-8'>
        {technologies.map((tech, index) => (
          <a
            key={index}
            href={tech.link}
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-2xl border-4 border-neutral-800 p-6 hover:bg-neutral-800 hover:text-white'
          >
            <tech.icon className={`h-16 w-16 text-center ${tech.color}`} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
