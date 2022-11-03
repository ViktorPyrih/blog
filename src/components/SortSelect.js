import './SortSelect.css';
import {ASC, DESC} from "../data/Constants";

function SortSelect({sort, onChange}) {
    return (
        <select value={sort} className="sort-select" onChange={onChange}>
            <option value={DESC}>
                🠗 Newest first
            </option>
            <option value={ASC}>
                🠕 Oldest first
            </option>
        </select>
    );
}

export default SortSelect;
