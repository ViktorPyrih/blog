import './Blog.css';
import ScrollableLink from "./ScrollableLink";

function Blog({blog}) {
    const style = {
        background: `url(${blog.image})`
    }
    return (
        <li className="blog">
            <div className="blog-heading" style={style}>
                <div className="blog-heading-details-container">
                    <div className="blog-heading-details">
                        <p className="paragraph blog-heading-details__author">
                            {blog.author}
                        </p>
                        <p className="paragraph blog-heading-details__created-at">
                            {new Date(blog.created_at).toDateString()}
                        </p>
                    </div>
                    <p className="paragraph blog-heading-details-container__type">
                        {blog.type}
                    </p>
                </div>
            </div>
            <div className="blog-description">
                <h3 className="title-secondary blog-description__title">{blog.title}</h3>
                <p className="blog-description__desc">
                    {blog.description}
                </p>
                <ScrollableLink to={`/resources/${blog.id}`} className="blog-description__link">
                    Read post ↗
                </ScrollableLink>
            </div>
        </li>
    );
}

export default Blog;
