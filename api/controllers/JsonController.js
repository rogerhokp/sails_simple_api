var request = require('request');
module.exports = {
    get: function (req, res) {
        var uri = req.param('uri');
        if(!uri){
            return res.badRequest('Missing required param : uri ');
        }

        var callbackName = req.param('callbackName');
        request({
            uri : uri,
            timeout : 30 * 1000
        }, function (error, response, body) {

            var rule = UriResolver(uri);
            if (rule) {
                var extractor = new JsonExtractor(body);
                var result = extractor.extract(rule);
                if (callbackName) {
                    return  res.send(callbackName + '(' + JSON.stringify(result) + ')');
                }
                return res.json(result);
            }
            res.badRequest('Cannot Parse URL, No corresponding parsing rule found');
        })
    },
    time: function (req, res) {
        res.send(new Date().toString());
    }

};
