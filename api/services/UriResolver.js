var mapping = {
    'BooksComTw': /http:\/\/www.books.com.tw\/products\/.+/
};

module.exports = function (url) {
    for (rule in mapping) {
        if (url.match(mapping[rule])) {
            return require("../rules/" + rule );
        }
    }
    return null;
}