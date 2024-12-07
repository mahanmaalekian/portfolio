import { Link } from "react-router-dom"
import './NavBar.css';
function NavBar(){
    return (
        <div>
            <nav>
                <div>
                <Link to="/home">Home</Link>
                </div>
                <div>
                <Link>Home</Link>
                <Link>Home</Link>
                </div>
            </nav>

        </div>
    )
}
export default NavBar;