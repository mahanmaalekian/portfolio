import React, { useState } from "react"
import './_Experience.css'

function ExperienceCard({title, description, info}) {
    const [clicked, setClicked] = useState(false);
    let color = "orange";
    if (clicked){
        color = "green";
    }
    else {
        color = "red";
    }
    return (
        <div className="experience-card" onClick={() => setClicked(!clicked)}>
            <div className="experience-card-title-container">
            <div className="timeline-marker" style={{backgroundColor:color}}></div>
            <h3>{title}</h3>
            <p className="infox">{info}</p>
            </div>

            {clicked ? ( 
            <div>{description.map((individual) => {
                return <p className="bullet-point"> • {individual}</p>
            })}</div>
            ) : (
                <p className="bullet-point">Click here for more info</p>
            )}
        </div>
    )
}

export default function Experience({experiences}){
    return (
        <div className="experience-container">
            <h1>Experience</h1>
            {experiences.map((experience) => {
                return <ExperienceCard title={experience.title} 
                description={experience.description} info={experience.info}/>
            })}
        </div>
    )
}
