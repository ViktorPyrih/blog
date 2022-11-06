import './NavLink.css';
import {Link} from "react-router-dom";

function NavLink({to, children, className = ""}) {
    return (
        <li className="nav-bar__item">
            <Link to={to} className={`nav-bar__link ${className}`}>
                {children}
            </Link>
        </li>
    );
}

export default NavLink;
