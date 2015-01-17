var mapping = require('../rules/RuleMapping.js');
module.exports = function (url) {
    for (rule in mapping) {
        if (url.match(mapping[rule])) {
            return require("../rules/" + rule );
        }
    }
    return null;
}