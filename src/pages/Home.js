import './Home.css';
import blogs from '../data/blogs.json';
import Blog from "../components/Blog";
import Pagination from "../components/pagination/Pagination";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {useMemo, useState} from "react";
import * as ObjectUtils from "../utils/ObjectUtils";
import Search from "../components/Search";
import SortSelect, {OPTIONS} from "../components/SortSelect";

const BLOG_FIELDS = ['type', 'title', 'description', 'author'];

function Home() {
    const [search, setSearch] = useState(undefined);
    const [sort, setSort] = useState(OPTIONS.desc);
    const searchedBlogs = useMemo(() => {
        let searchedBlogs = blogs.sort((blog1, blog2) => sort.value * (new Date(blog1.created_at) - new Date(blog2.created_at)));
        if (search) {
            searchedBlogs = blogs.filter(blog => ObjectUtils.containsText(blog, BLOG_FIELDS, search));
        }
        return searchedBlogs;
    }, [search, sort])

    return (
        <>
            <Header/>
            <div className="home-container wrapper">
                <div className="home-container-heading">
                    <Search onInput={e => setSearch(e.target.value)}/>
                    <SortSelect sort={sort} onChange={setSort}/>
                </div>
                <Pagination items={searchedBlogs} renderItem={(blog, i) => <Blog blog={blog} key={i}/>}/>
            </div>
            <Footer/>
        </>
    );
}

export default Home;
