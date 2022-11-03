import * as StringUtils from './StringUtils';

function contains(array, element) {
    return array
        .some(e => StringUtils.equals(e, element));
}

function isEmpty(array) {
    return array.length === 0;
}

function isNotEmpty(array) {
    return !isEmpty(array);
}

function iterate(from, to) {
    const array = [];
    for (let i = from; i <= to; i++) {
        array.push(i);
    }
    return array;
}

function distinct(array) {
    return [...new Set(array)];
}

export {contains, isEmpty, isNotEmpty, iterate, distinct};
