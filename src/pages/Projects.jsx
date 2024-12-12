import './_Projects.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(fab, faGithub);
const skills = [
    'skill1', 'skill2'
   ];

const links = {
    github: 'https://www.google.com',
    demo: '#'
}


function ProjectLinks({links}) {
    return (
        <div>
           <a href={links.github} target='_blank'><FontAwesomeIcon icon={["fab", "github"]} /> View Source</a>
        </div>
    );
}

function ProjectSkills({skills}){
    return (
    <div className='project-skills'>
        {skills.map((skill) => {
            return <div className='project-skill'>{skill}</div>
            
        })}
    </div>
    );
}

function ProjectCard({image, title, description, skills, links}) {
    return (
    <div className="project-card-container">
        <div className="project-card-image">
            <img src={image} alt="" />
        </div>
        <div className="project-card-text">
            <h3>{title}</h3>
            <p>{description}</p>
            <ProjectSkills skills={skills}/>
            <ProjectLinks links={links}/>
        </div>
    </div>
    )
}



export default function Projects({projects}) {
    return (
        <>
            <div className="projects-container">
                <h1>Projects</h1>
                {projects.map((project) => {
                    return <ProjectCard image={project.image}
                    title={project.title}
                    description={project.description}
                    skills={project.skills}
                    links={project.links}/>
                })}
            </div>
        </>
    )
}