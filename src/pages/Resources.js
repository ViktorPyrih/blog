import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Articles from "../components/article/Articles";

function Resources({allArticles}) {
    return (
        <>
            <Header/>
            <Articles allArticles={allArticles}/>
            <Footer/>
        </>
    );
}

export default Resources;
