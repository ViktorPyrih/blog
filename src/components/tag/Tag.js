import './Tag.css';
import ScrollableLink from "../ScrollableLink";

function Tag({children}) {
    return (
        <li className="tags-list__item">
            <ScrollableLink to={`/resources?category=${children.toLowerCase()}`} className="tag">
                {children}
            </ScrollableLink>
        </li>
    );
}

export default Tag;
