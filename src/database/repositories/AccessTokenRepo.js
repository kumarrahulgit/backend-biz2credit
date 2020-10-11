const AccessTokenModel = require('../models/AccessToken');

class AccessTokenRepo {
    static async findUser(user){
        return AccessTokenModel.findOne({account: user}).exec();
    }
    static async findPassword(pwd){
        return AccessTokenModel.findOne({appKey: pwd}).exec();
    }
}

module.exports = AccessTokenRepo;