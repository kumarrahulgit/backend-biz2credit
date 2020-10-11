const jwt = require('jsonwebtoken');

const tokenSecret = process.env.USER;

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, tokenSecret, (err, user) => {
            if (err) {
                console.log(err);
                return res.sendStatus(403);
            }

            console.log(user);

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(403);
    }
};

module.exports = authenticateJWT;