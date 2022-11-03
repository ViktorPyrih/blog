function contains(string, searchString) {
    return string.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
}

function equals(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

function substringAfter(string, searchString) {
    if (string.endsWith(searchString)) {
        return "";
    }
    const index = string.indexOf(searchString);

    return index === -1 ? "" : string.substring(index + 1);
}

export {contains, equals, substringAfter};
