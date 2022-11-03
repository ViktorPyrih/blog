import './Articles.css';
import {useLoaderData} from "react-router";
import {isNotEmpty} from "../../utils/ArrayUtils";
import Article from "./Article";
import Pagination from "../pagination/Pagination";
import Categories from "../tag/Categories";
import Search from "../Search";
import {useState} from "react";
import * as ObjectUtils from "../../utils/ObjectUtils";
import DeviceAware from "../DeviceAware";

const ARTICLE_FIELDS = ['title', 'description', 'author', 'name', 'tags'];

function Articles({allArticles}) {
    const [search, setSearch] = useState(undefined);
    let {articles, activeCategory} = useLoaderData();
    if (search) {
        articles = articles.filter(article => ObjectUtils.containsText(article, ARTICLE_FIELDS, search));
    }

    const standardContent = (
        <div className="articles-container-content">
            <Article article={articles[0]} className="articles-container_article_primary" imgClassName="articles_img_primary" detailsClassName="width_280px"/>
            <Pagination items={articles.slice(1)}
                        renderItem={(article, i) =>
                            <Article article={article} className="articles-container_article_secondary" imgClassName="articles_img_secondary" detailsClassName="articles-details" link={true} key={i}/>
                        }/>
        </div>
    );
    const mobileContent = (
        <Pagination items={articles}
                    renderItem={(article, i) =>
                        <Article article={article} className="articles-container_article_secondary" imgClassName="articles_img_secondary" detailsClassName="articles-details" link={true} key={i}/>
                    }/>
    );

    return (
        <div className="articles-container wrapper">
            <Categories categories={allArticles.flatMap(article => article.tags)} activeCategory={activeCategory}>
                <Search onKeyUp={e => setSearch(e.target.value)}/>
            </Categories>
            {
                isNotEmpty(articles) && (
                    <DeviceAware standard={standardContent} mobile={mobileContent}/>
                )
            }
        </div>
    );
}

export default Articles;
