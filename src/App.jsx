import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import projects from './content/projects'
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import experience from './content/experience';
// function Home() {
//   return <div>Welcome to the Home Page</div>;
// }

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Router>
        <div className='container'>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects projects={projects}/>}/> 
            <Route path='/contact' element={<Contact/>}/>
            <Route path="/experience" element={<Experience experiences={experience}/>}/>
          </Routes>
        </div>
      </Router>
    
   </>

  )
}

export default App
