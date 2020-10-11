const express = require('express');
const authenticateJWT = require('../../helpers/jwtVerify');

const router = express.Router();

router.use('/', authenticateJWT);

// router.use('/v1/users', users);

module.exports = router;

