import './Article.css';
import TagContainer from "../tag/TagContainer";
import {Link} from "react-router-dom";
import ScrollableLink from "../ScrollableLink";

function Article({article, className, imgClassName, detailsClassName = "width_100", link = false}) {
    return (
        <div className={`article ${className}`}>
            <img src={article.image} alt="Article" className={`article__img ${imgClassName}`}/>
            <div className={`article-details ${detailsClassName}`}>
                <TagContainer tags={article.tags} time={article.time}/>
                <div className="article-title-container">
                    <ScrollableLink to={`/resources/${article.id}`} className="article-title__link">
                        <h2 className="title title-primary article__title">{article.title}</h2>
                    </ScrollableLink>
                    {
                        link && <Link to={`/resources/${article.id}`} className="arrow article__link">↗</Link>
                    }
                </div>
                <p className="article__desc">
                    {article.description}
                </p>
                <div className="article-author">
                    <img src={article.author.image} alt="" className="article-author__img"/>
                    <div className="article-author-details">
                        <p className="paragraph paragraph_font-weight_600 article-author-details__name">
                            {article.author.name}
                        </p>
                        <p className="paragraph paragraph_color_gray article-author-details__created-at">
                            {article.created_at}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;
