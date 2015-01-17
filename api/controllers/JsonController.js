var request = require('request');
module.exports = {
    get: function (req, res) {
        var uri = req.param('uri');
        var callbackName = req.param('callbackName');
        request({
            uri : uri,
            timeout : 30 * 1000
        }, function (error, response, body) {

            var rule = UriResolver(url);
            if (rule) {
                var extractor = new JsonExtractor(body);
                var result = extractor.extract(rule);
                if (callbackName) {
                    return  res.send(callbackName + '(' + JSON.stringify(result) + ')');
                }
                return res.json(result);
            }
            res.send('Cannot Parse URL, No corresponding parsing rule found', 500);
        })
    },
    time: function (req, res) {
        res.send(new Date().toString());
    }

};
