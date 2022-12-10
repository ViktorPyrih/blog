import './NavBar.css';
import NavLink from "./NavLink";

const NAV_LINKS = [
    {
        to: "/",
        label: "Home",
        path: "/"
    },
    {
        to: "/",
        label: "Products",
        path: "/products"
    },
    {
        to: "/resources",
        label: "Resources",
        path: "/resources"
    },
    {
        to: "/",
        label: "Pricing",
        path: "/pricing"
    },
];

function NavBar() {
    return (
        <nav className="nav">
            <ul className="nav-bar">
                {
                    NAV_LINKS.map((link, i) => (
                        <NavLink to={link.to} key={i}>{link.label}</NavLink>
                    ))
                }
            </ul>
        </nav>
    );
}

export default NavBar;
export {NAV_LINKS};
