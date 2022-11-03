import './TagContainer.css';
import Tag from "./Tag";

function TagContainer({tags, time}) {
    return (
        <ul className="tags-list">
            {
                tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)
            }
            <p className="tag tag-container__time">{time} min read</p>
        </ul>
    );
}

export default TagContainer;
