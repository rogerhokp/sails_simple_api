var mapping = require('../rules/mapping.js');
module.exports = function (url) {
    for (rule in mapping) {
        if (url.match(mapping[rule])) {
            return require("../rules/" + rule );
        }
    }
    return null;
}