import React from 'react';

const ProjectsArr = [
  {
    type: "Tech",
    title: "Todo App",
    description: " A planner app with a people's page which keeps a track of my contacts,displays Birthdays today, Quotes and lists all the events, deadlines and tasks ",
    skills: ["SQL", "Python", "Flask","HTML,CSS"],
    url: "https://planner2.onrender.com/",
    imageUrl: 'images/ProjectImages/PlannerApp.png' // Replace with actual path
  },
  {
    type: "Tech",
    title: "Spotify Clone",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nisi sit amet nunc.",
    skills: ["NextJS", "Python", "Flask"],
    url: "https://www.example.com",
    imageUrl: "images/ProjectImages/SpotifyLogo.png", // Replace with actual path
  },
  {
    type: "Research",
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nisi sit amet nunc.",
    skills: ["React", "Python", "Flask"],
    url: "https://www.example.com",
    imageUrl: "images/ProjectImages/Sample.png", // Replace with actual path
  },
];

// Extract unique types from projects
const types = [...new Set(ProjectsArr.map(project => project.type))];

// Group projects by type
const SortedProjectsAccToType = types.reduce((acc, type) => {
  acc[type] = ProjectsArr.filter(project => project.type === type);
  return acc;
}, {});

const Projects = () => {
  return (
    <div className='container mx-auto'> 
    <br />  
    <h2 className='my-20 text-center text-4xl'>
        <span className='bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text tracking-tight text-transparent'>Projects</span>
      </h2>
      {Object.entries(SortedProjectsAccToType).map(([type, projects], index) => (
        <div key={index} className='my-8'> 
            <div className='container'>
          <h3 className='text-center font-sans text-2xl font-semibold my-4'> <span className='bg-cyan-600 bg-clip-text'>Type: {type} </span></h3> 
          </div>
          {projects.map((project, innerIndex) => (
            <div key={innerIndex} className='flex flex-row flex-shrink-0 items-center gap-3 my-6 text-neutral-400'>
              <img src={project.imageUrl} alt={project.title} className='h-48 w-48 object-cover' />
              <div className='text-lg font-thin text-neutral-400'>
                <p className='font-bold'>{project.title}</p>
                <p>{project.description}</p>
                <p>
                  <a href={project.url} className='text-blue-500 hover:text-pink-500' target='_blank' rel='noopener noreferrer'>
                    {project.url}
                  </a>
                </p>
                <div className='flex flex-row flex-wrap items-center gap-2'>
                  {project.skills.map((skill, i) => (
                    <span key={i} className='bg-gray-200 rounded-full px-3 py-1 text-lg'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div> 
              
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Projects;
