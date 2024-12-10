import { ReactTerminal } from "react-terminal";
import './_Terminal.css';
export default function Terminal() {
    const welcomeMessage = (
        <span>
        Welcome to Mahan Maalekian's portfolio website! <br />
        Type "help" for all available commands. <br />
      </span>
    );
    const terminalStyles = {
margin: '0',
  padding: '0',
  boxSizing: 'border-boxm',
  textDecoration: 'none',
  border: 'none',
  outline: 'none',
  fontFamily: 'monaco,Consolas,Lucida Console,monospace',
  textAlign: 'left',
  overflowWrap: 'break-word',
  fontFamily: '"Source Code Pro", monospace',
  fontSize: '18px',
  lineHeight: '22px'
    }
    const themes={
    "my-custom-theme": {
      themeBGColor: "#5a5d7a",
      themeToolbarColor: "#f0f0f0",
      themeColor: "#ffffff",
      themePromptColor: "#FFFFFF"
    }
    }
    const commands = {
      help: (
        <span>
          <strong>clear</strong> - clears the console. <br />
          <strong>Mahan.currentLocation</strong> - Finds where Mahan is currently located at. <br />
          <strong>Mahan.contactInfo</strong> - Gets a list of  links to Mahan's contact info. <br />
          <strong>Mahan.resume</strong> - Gets a link to Mahan's resume. <br />
          <strong>Mahan.projects</strong> - Gets a list of links to Mahans's projects.
        </span>
      ),
      "Mahan.currentLocation": (
        <span>
            "Montreal, QC, Canada"
        </span>
      ),
      "Mahan.resume": (
       <span>
          <a style={{color: "#747fe0"}} href="../../mahan-maalekian-cv.pdf" target="_blank">mahan-maalekian-cv.pdf</a>
       </span>
      ),
      "Mahan.education": (
        <span>
            "B.Eng. Software Engineering - McGill University, Montreal"
        </span>
      ),
      "Mahan.contactInfo": (
        <span>
            ["
            <a style={{color: "#747fe0"}} href="mailto:maalekianmahan@gmail.com">Email</a>", "
          <a style={{color: "#747fe0"}} href="https://www.linkedin.com/in/mahan-maalekian/" target="_blank">LinkedIn</a>
            ", "
           <a style={{color: "#747fe0"}} href="https://github.com/mahanmaalekian" target="_blank">GitHub</a>
           "]
        </span>
      ),

      "Mahan.projects" : (
                <span>
            ["
            <a style={{color: "#747fe0"}} href="https://github.com/mahanmaalekian/vanier-exam-scheduler" target="_blank">Vanier Exam Scheduler (Django, HTML/CSS, JavaScript)</a>", "
           <a style={{color: "#747fe0"}} href="https://github.com/mahanmaalekian/image-filter" target="_blank">Image Filter (C)</a>", "
           <a style={{color: "#747fe0"}} href="https://github.com/mcgill-robotics/rover-2025" target="_blank">McGill Robotics</a>", "
            <a style={{color:"#747fe0"}} href="https://github.com/mahanmaalekian/colorful-block-game" target="_blank">Colorful Block Game (Java)</a>", "
            <a style={{color:"#747fe0"}} href="https://github.com/mahanmaalekian/euro-2024-database" target="_blank">Euro 2024 Database (SQL)</a>", "
            <a style={{color:"#747fe0"}} href="https://github.com/mahanmaalekian" target="_blank">And more ...</a>"
            ]
        </span>
      )
    }

    return (
    <div className="terminal-container">
        <ReactTerminal
        welcomeMessage={welcomeMessage}
        commands={commands}
        themes={themes}
        theme="light"
        />
     </div>
 
    )
}

