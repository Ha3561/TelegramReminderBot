import React from 'react';

const workExperiences = [
  {
    company: "Enactus",
    years: "2024-Present",
    description: [
      {
        role: "lorem",
        work:  "Worked on developing innovative sustainable solutions to solve the problems of farmers in Jhabua, Madhya Pradesh. The project was aimed at providing a sustainable source of income to the farmers by providing them with a platform to sell their products directly to the consumers.",
        start: "2024",
        end: "Present",
        
      }
    ],
    url: "https://www.enactus-iitd.com/", // Replace with actual path 
    skills: ["Entrepreneurship", "Leadership", "Teamwork"]
 , // Replace with actual path
  },
  {
    company: "Another Company",
    years: "2023-2024",
    description: [
      {
        role: "Developer",
        work: "Worked on various development projects.",
        start: "2024",
        end: "Present", 
        
      }
    ],
    url: "https://www.enactus-iitd.com/", // Replace with actual path
    skills: ["Entrepreneurship", "Leadership", "Teamwork"]
    // Replace with actual path
  },
  {
    // Example with no description to trigger the check
    company: "Company Without Description",
    years: "2022-2023", 
    description: [
      {
        role: "Developer",
        work: "Worked on various development projects.",
        start: "2024",
        end: "Present",
        
      } ],
      url: "https://www.enactus-iitd.com/", // Replace with actual path 
      skills: ["Entrepreneurship", "Leadership", "Teamwork"], // Add actual skills
  },
];

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 '> 
      <br />
      <h2 className='my-20 text-center text-4xl'>
        <span className='bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text tracking-tight text-transparent'>Experience</span>
      </h2>

      {workExperiences.map((experience, index) => ( 
        
        <div key={index} className="flex flex-wrap items-center justify-center gap-8 my-10">  
          <br />
          
          <div className='w-full lg:w-1/4'>
            <p className='text-xl font-thin text-neutral-400 '>{experience.years}</p>
          </div>
          <div className='w-full max-w-xl lg:w-3/4'>
            <a href={experience.url} target='blank' className='mb-2 font-semibold text-neutral-400 '>
              <span className='text-lg text-purple-400 hover:text-pink-500 hover:bg-slate-400'>{experience.company}</span>
            </a> 
            <br />
            {experience.description && Array.isArray(experience.description) && experience.description.map((desc, descIndex) => (
              <div key={descIndex}>
                <p className='font-light tracking-tighter'><span className='font-light font-sans text-tight text-pink-200'>Role: {desc.role} ({desc.start} to {desc.end})</span></p>
                 
                <p className='font-light tracking-tighter flex flex-row gap-8'>{desc.work}</p> 
                <br />
                {experience.skills.map((skill, skillIndex) => (<span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{skill}</span>))}
              </div>
            ))} 
            <p></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
