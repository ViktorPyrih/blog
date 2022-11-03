import './Resource.css';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {useLoaderData} from "react-router";
import {useMemo} from "react";
import Pagination from "../components/pagination/Pagination";
import Article from "../components/article/Article";

function Resource({allArticles}) {
    const id = useLoaderData();
    const targetArticles = useMemo(() => allArticles.filter(article => String(article.id) === id), [allArticles, id]);
    const otherArticles = useMemo(() => allArticles.filter(article => String(article.id) !== id), [allArticles, id]);
    return (
        <>
            <Header/>
            <div className="resources-container wrapper">
                {
                    <Article article={targetArticles[0]} className="resources-container_article_primary" imgClassName="resources_img_primary" link={true}/>
                }
                <Pagination items={otherArticles}
                            itemsOnPage={6}
                            renderItem={(article, i) => (
                                <Article article={article} className="resources-container_article_secondary" imgClassName="resources_img_secondary" detailsClassName="resources-details" link={true} key={i}/>
                            )
                }/>
            </div>
            <Footer/>
        </>
    );
}

export default Resource;
