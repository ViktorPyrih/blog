import './Category.css';
import {Link} from "react-router-dom";

function Category({category, isActive}) {
    return (
        <li className="categories-list__item">
            <Link to={`/resources?category=${category.original}`} className={`categories-list__link ${isActive ? "active-category" : ""}`}>
                {category.name}
            </Link>
        </li>
    );
}

export default Category;
