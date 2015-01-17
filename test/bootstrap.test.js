var Sails = require('sails'),
    sails;

before(function(done) {
    Sails.lift({
                   "environment" : "development",
                   "port" : 1338
               }, function(err, server) {
        sails = server;
        if (err) return done(err);
        // here you can load fixtures, etc.
        done(err, sails);
    });
});

after(function(done) {
    // here you can clear fixtures, etc.
    sails.lower(done);
});