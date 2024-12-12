import React, { useState } from "react"
import './_Experience.css'

function ExperienceCard({title, description}) {
    const [clicked, setClicked] = useState(false);
    return (
        <div className="experience-card" onClick={() => setClicked(!clicked)}>
            <h1>title</h1>
            {clicked && <p>Conditional</p>}

        </div>
    )
}

export default function Experience({experience}){
    return (
        <div className="experience-container">
            <ExperienceCard/>
        </div>
    )
}
