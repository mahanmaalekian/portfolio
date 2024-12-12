import { Link } from "react-router-dom"
import './NavBar.css';
function NavBar(){
    return (
        <div>
            <nav>
                <div>
                <Link to="/">Home</Link>
                </div>
                <div>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/contact">Contact</Link>
                </div>
            </nav>

        </div>
    )
}
export default NavBar;