import './SortSelect.css';
import {ASC, DESC} from "../data/Constants";
import {Listbox} from "@headlessui/react";
import {Fragment} from "react";

const OPTIONS = {
    desc: {
        value: DESC,
        label: "🠗 Newest first"
    },
    asc: {
        value: ASC,
        label: "🠕 Oldest first"
    }
};

function SortSelect({sort, onChange}) {
    return (
        <Listbox value={sort} onChange={onChange} className="sort-select" as="div">
            <Listbox.Button className="sort-select__btn">{sort.label}</Listbox.Button>
            <Listbox.Options className="sort-select__items">
                {
                    Object.values(OPTIONS).map((option, i) => (
                        <Listbox.Option
                            key={i}
                            value={option}
                            as={Fragment}
                        >
                            {
                                ({active}) => (
                                    <li className={`sort-select__item ${active && "sort-select__item_active"}`}>
                                        {option.label}
                                    </li>
                                )
                            }
                        </Listbox.Option>
                    ))
                }
            </Listbox.Options>
        </Listbox>
    );
}

export default SortSelect;
export {OPTIONS};
