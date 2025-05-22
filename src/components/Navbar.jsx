import { Link } from 'react-router-dom'
import '/src/assets/styles/Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/auth">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
