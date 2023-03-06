const UserModel = require("../models/User.model");

exports.signUpService = async (data) => {
   
    const user = await UserModel.create(data);   
    return user;
}