import './Pagination.css';
import Button from "../Button";
import PageNumber, {GAP_MARKER} from "./PageNumber";
import {useEffect, useState} from "react";
import {iterate} from "../../utils/ArrayUtils";
import {ROOT} from "../../data/Constants";
import DeviceAware from "../DeviceAware";

const ITEMS_ON_PAGE = 8;

function Pagination({items, renderItem, itemsOnPage = ITEMS_ON_PAGE}) {
    const [page, setPage] = useState(1);
    useEffect(() => setPage(1), [items]);
    const pagesCount = calculatePagesCount(items.length);

    const standardPageNavigation = (
        <nav className="page-navigation">
            <Button className="btn-previous" disabled={page === 1}
                    onClick={e => handlePageChange(e, setPage, page - 1)}>
                🠔 Previous
            </Button>
            <ul className="page-navigation-items">
                {
                    resolvePageNumbers(page, pagesCount)
                        .map((pageNumber, i) => (
                            <PageNumber className={pageNumber === page && 'active'} key={i}
                                        onClick={e => handlePageChange(e, setPage, pageNumber)}>
                                {pageNumber}
                            </PageNumber>
                        ))
                }
            </ul>
            <Button className="btn-next" disabled={page >= pagesCount}
                    onClick={e => handlePageChange(e, setPage, page + 1)}>
                Next ⭢
            </Button>
        </nav>
    );

    const mobilePageNavigation = (
        <nav className="page-navigation">
            <Button className="btn-previous" disabled={page === 1}
                    onClick={e => handlePageChange(e, setPage, page - 1)}>
                🠔
            </Button>
            <p className="page-navigation__text">
                Page {page} of {pagesCount}
            </p>
            <Button className="btn-next" disabled={page >= pagesCount}
                    onClick={e => handlePageChange(e, setPage, page + 1)}>
                ⭢
            </Button>
        </nav>
    );

    return (
        <section className="pagination-container">
            <ul className="pagination">
                {
                    items
                        .slice((page - 1) * itemsOnPage, page * itemsOnPage)
                        .map((item, i) => renderItem(item, i))
                }
            </ul>
            <DeviceAware standard={standardPageNavigation} mobile={mobilePageNavigation}/>
        </section>
    );
}

function calculatePagesCount(itemsCount) {
    return Math.ceil(itemsCount * 1.0 / ITEMS_ON_PAGE);
}

function resolvePageNumbers(page, pagesCount) {
    const pagesNumbers = [];
    if (pagesCount <= 6 || (pagesCount <= 9 && pagesCount - page < 5)) {
        pagesNumbers.push(...iterate(1, pagesCount));
    } else if (pagesCount - page >= 5 && page <= 5) {
        pagesNumbers.push(...iterate(1, Math.max(page + 1, 3)));
        pagesNumbers.push(GAP_MARKER);
        pagesNumbers.push(...iterate(pagesCount - 2, pagesCount));
    } else if (pagesCount - page <= 4) {
        pagesNumbers.push(...iterate(1, 3));
        pagesNumbers.push(GAP_MARKER);
        pagesNumbers.push(...iterate(Math.min(pagesCount - 2, page - 1), pagesCount));
    } else {
        pagesNumbers.push(...iterate(1, 3));
        pagesNumbers.push(GAP_MARKER);
        pagesNumbers.push(...iterate(page - 1, page + 1));
        pagesNumbers.push(GAP_MARKER);
        pagesNumbers.push(...iterate(pagesCount - 2, pagesCount));
    }

    return pagesNumbers;
}

function handlePageChange(e, setPage, page) {
    e.preventDefault();
    setPage(page);
    document.getElementById(ROOT).scrollIntoView();
}

export default Pagination;
