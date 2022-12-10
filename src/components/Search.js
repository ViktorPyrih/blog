import './Search.css';
import magnifierImg from "../assets/loupe.svg";

function Search({onInput}) {
    return (
        <div className="search">
            <img src={magnifierImg} alt="" className="search__img"/>
            <input type="text" placeholder="Search" onInput={onInput}
                   className="search__field"/>
        </div>
    );
}

export default Search;
