exports.findLength = function(data) {
    if(Array.isArray(data) || typeof data == "string") {
        return data.length;
    }

    if(typeof data == "object") {
        return Object.keys(data).length;
    }
}