import { ReactTerminal } from "react-terminal";

export default function Terminal() {
    const welcomeMessage = (
        <span>
        Welcome to Mahan Maalekian's portfolio website! <br />
        Type "help" for all available commands. <br />
      </span>
    );
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
        <span
        style={{cursor:"pointer", color:"#747fe0"}}
        onClick={() => window.open("https://www.google.com", "_blank")}>
            mahan_maalekian.pdf
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
            <span style={{cursor:"pointer", color:"#747fe0"}}
            onClick={() => window.open("https://www.google.com", "_blank")}>
                maaalekianmahan@gmail.com
            </span>", "
           <span
           style={{cursor:"pointer", color:"#747fe0"}}
        onClick={() => window.open("https://www.google.com", "_blank")}>
            LinkedIn
            </span>", "
            <span
            style={{cursor:"pointer", color:"#747fe0"}}
            onClick={() => window.open("https://www.google.com", "_blank")}>
                GitHub
            </span>"]
        </span>
        
      ),

      "Mahan.projects" : (
                <span>
            ["
            <span style={{cursor:"pointer", color:"#747fe0"}}
            onClick={() => window.open("https://www.google.com", "_blank")}>
                Vanier Exam Scheduler
            </span>", "
           <span
           style={{cursor:"pointer", color:"#747fe0"}}
        onClick={() => window.open("https://www.google.com", "_blank")}>
            LinkedIn
            </span>", "
            <span
            style={{cursor:"pointer", color:"#747fe0"}}
            onClick={() => window.open("https://www.google.com", "_blank")}>
                GitHub
            </span>"]
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

