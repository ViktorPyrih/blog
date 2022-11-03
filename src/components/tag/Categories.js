import './Categories.css';
import Category from "./Category";
import {distinct} from "../../utils/ArrayUtils";
import {ANY} from "../../data/Constants";
import {equals} from "../../utils/StringUtils";

const ALL = "View all";

function Categories({categories, children, activeCategory}) {
    return (
        <div className="categories-container">
            {children}
            <h3 className="categories-container__title">Blog categories</h3>
            <ul className="categories-list">
                {
                    [ANY, ...distinct(categories)]
                        .map(category => {
                            return {
                                name: category === ANY ? ALL : category,
                                original: category.toLowerCase()
                            }
                        })
                        .map((category, i) =>
                            <Category category={category} isActive={equals(category.original, activeCategory)} key={i}/>)
                }
            </ul>
        </div>
    );
}

export default Categories;
