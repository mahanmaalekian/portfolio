import { ReactTerminal } from "react-terminal";
import './_Home.css'
import Terminal from "../components/Terminal";

function Home() {
    
  return (
    <>
    <div className="title-container">
        <h1>&gt; Mahan Maalekian<div className="blinking-cursor"></div></h1>
        <h2 className="title-description">I'm a McGill Software Eng Student</h2>
    </div>
    <Terminal/>
     </>
  )

}
export default Home;