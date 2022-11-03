import './NavBar.css';
import NavLink from "./NavLink";

function NavBar() {
    return (
        <nav className="nav">
            <ul className="nav-bar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">Products</NavLink>
                <NavLink to="/resources">Resources</NavLink>
                <NavLink to="/">Pricing</NavLink>
            </ul>
        </nav>
    );
}

export default NavBar;
