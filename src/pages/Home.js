import './Home.css';
import blogs from '../data/blogs.json';
import Blog from "../components/Blog";
import Pagination from "../components/pagination/Pagination";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {useState} from "react";
import * as ObjectUtils from "../utils/ObjectUtils";
import Search from "../components/Search";
import SortSelect from "../components/SortSelect";
import {DESC} from "../data/Constants";

const BLOG_FIELDS = ['type', 'title', 'description', 'author'];

function Home() {
    const [search, setSearch] = useState(undefined);
    const [sort, setSort] = useState(DESC);
    let searchedBlogs = blogs.sort((blog1, blog2) => sort * (new Date(blog1.created_at) - new Date(blog2.created_at)));
    if (search) {
        searchedBlogs = blogs.filter(blog => ObjectUtils.containsText(blog, BLOG_FIELDS, search));
    }
    return (
        <>
            <Header/>
            <div className="home-container wrapper">
                <div className="home-container-heading">
                    <Search onKeyUp={e => setSearch(e.target.value)}/>
                    <SortSelect onChange={e => setSort(e.target.value)}/>
                </div>
                <Pagination items={searchedBlogs} renderItem={(blog, i) => <Blog blog={blog} key={i}/>}/>
            </div>
            <Footer/>
        </>
    );
}

export default Home;
