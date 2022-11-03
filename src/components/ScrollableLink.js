import {Link} from "react-router-dom";
import {ROOT} from "../data/Constants";

function ScrollableLink({to, className, children}) {
    return (
        <Link to={to} className={className} onClick={() => document.getElementById(ROOT).scrollIntoView()}>
            {children}
        </Link>
    )
}

export default ScrollableLink;
