import './PageNumber.css';
import {Link} from "react-router-dom";

const GAP_MARKER = -1;

function PageNumber({className, onClick, children}) {
    if (children === GAP_MARKER) {
        return (
            <div className="page-number-container">
                ...
            </div>
        )
    }
    return (
        <li className="page-navigation__item">
            <Link to="#" onClick={onClick} className="page-navigation__link">
                <div className={`page-number-container page-number ${className}`}>
                    {children}
                </div>
            </Link>
        </li>
    );
}

export default PageNumber;
export {GAP_MARKER};
