const UsersModel = require('../models/Users');

class UsersRepo {
    static async getAllUsers(){
        return UsersModel.find({}).exec();
    }
}

module.exports = UsersRepo;
