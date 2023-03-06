const UserModel = require("../models/User.model");

exports.signUpService = async (data) => {
   
    const user = await UserModel.create(data);   
    return user;
}

exports.loginService = async (data) => {
    const { email, password } = data;
    if(!email || !password){
        throw new Error("Email and Password are required");
    }
    const user = await UserModel.findOne({email});
    if(!user){
        throw new Error("User not found with the email provided");
    }
    return user;
}