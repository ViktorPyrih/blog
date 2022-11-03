import * as StringUtils from "./StringUtils";
import * as ArrayUtils from "./ArrayUtils";

function containsText(object, fields, text) {
    if (typeof object === 'string') {
        return StringUtils.contains(object, text);
    }
    if (typeof object instanceof Array) {
        return ArrayUtils.contains(object, text);
    }

    return Object.keys(object)
        .filter(key => ArrayUtils.contains(fields, key))
        .map(key => object[key])
        .some(value => containsText(value, fields, text));
}

export {containsText};
