const passport = require('passport');
const BearerStrategy = require('passport-http').BearerStrategy;

passport.use(new BearerStrategy(
    function (username, password, done) {

        done(null, {
            user: "xyz"
        });
    }
));
