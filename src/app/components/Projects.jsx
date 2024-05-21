import React from 'react';
 // Adjust the path accordingly

const ProjectsArr = [
  {
    type: "Tech",
    title: "Todo App",
    description: "A planner app with a people's page which keeps track of my contacts, displays Birthdays today, Quotes, and lists all the events, deadlines, and tasks.",
    url: "https://planner2.onrender.com/",
    code: "",
    imageUrl: 'images/ProjectImages/PlannerApp.png', // Replace with actual path
  },
  {
    type: "Tech",
    title: "Spotify Clone",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nisi sit amet nunc.",
    url: "https://www.example.com",
    code: "",
    imageUrl: "images/ProjectImages/SpotifyLogo.png", // Replace with actual path
  },
  {
    type: "Research",
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nisi sit amet nunc.",
    url: "https://www.example.com",
    code: "",
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

const Button = ({ url, label }) => {
  return (
    <button
      className='w-full px-6 py-3 m-4 duration-200 hover:text-white bg-cyan-400 bg-clip-text border-coloor-slate-800'
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className='block w-full h-full text-center'>
        {label}
      </a>
    </button>
  );
};

const Projects = () => {
  return (
    <div className='container mx-auto'>
      <br />
      <h2 className='my-20 text-center text-4xl'>
        <span className='bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text tracking-tight text-transparent'>
          Projects
        </span>
      </h2>
      {Object.entries(SortedProjectsAccToType).map(([type, projects], index) => (
        <div key={index} className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full my-8'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>{type}</p>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8'>
            {projects.map((project, innerIndex) => (
              <div key={innerIndex} className='shadow-md shadow-grey-600 rounded-lg flex flex-col items-center'>
                <img src={project.imageUrl} alt={project.title} className='h-48 w-48 object-cover rounded-t-lg' />
                <div className='p-4 flex flex-col items-center'>
                  <p className='font-bold'>{project.title}</p>
                  <p className='mb-4'>{project.description}</p>
                  <div className='flex items-center justify-center text-neutral-400'>
                    {project.url && <Button url={project.url} label="Visit Site" />}
                    {project.code && <Button url={project.code} label="View Code" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
