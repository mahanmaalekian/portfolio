import './_Projects.css'
import React from 'react'

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
           <a href="#">Demo</a>
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
            <img src="../images/blocks.png" alt="" />
        </div>
        <div className="project-card-text">
            <h3>title</h3>
            <p>descriptionfhlffffffffffffffffffffffffffffff fffffffffffffffffffffff ffffffffffff fffffffffffff</p>
            <ProjectSkills skills={skills}/>
            <ProjectLinks links={links}/>
        </div>
    </div>
    )
}



export default function Projects() {
    return (
        <>
            <div className="projects-container">
                <ProjectCard skills={skills} links={links}/>
            </div>
        </>
    )
}