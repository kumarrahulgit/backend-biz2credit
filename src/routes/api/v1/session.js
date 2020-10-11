const express = require('express');
const jwt = require('jsonwebtoken');
const AccessTokenRepo = require('../../database/repositories/AccessTokenRepo');

const router = express.Router();
const tokenSecret = process.env.USER;

router.post(
    '/', 
    async (req, res) => {
        const auth = req.headers.authorization;

        if(auth) {
            const buf = Buffer.from(auth.split(' ')[1], 'base64');
            const credentials = buf.toString('utf-8');
            
            const user = credentials.split(':')[0];
            const pwd = credentials.split(':')[1];

            const userRepo = await AccessTokenRepo.findUser(user);
            
            if(userRepo) {

                const pwdRepo = await AccessTokenRepo.findPassword(pwd);

                if(pwdRepo) {
                    const payload = { account: pwdRepo.account };
                    const token = jwt.sign(payload, tokenSecret, {expiresIn: '60m'});
                    res.json(token);
                }
                else {
                    res.sendStatus(403);
                }
            }
            else {
                res.sendStatus(403);
            }
        }
        else {
            res.sendStatus(403);
        }
    }
);

module.exports = router;