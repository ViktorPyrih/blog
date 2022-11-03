import './Search.css';
import magnifierImg from "../assets/loupe.svg";

function Search({onKeyUp}) {
    return (
        <div className="search">
            <img src={magnifierImg} alt="" className="search__img"/>
            <input type="text" placeholder="Search" onKeyUp={onKeyUp}
                   className="search__field"/>
        </div>
    );
}

export default Search;
