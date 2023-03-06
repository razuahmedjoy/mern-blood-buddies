const UserModel = require("../models/User.model");
const { signUpService, loginService } = require("../services/user.service");
const { generateToken } = require("../utils/generateToken");

exports.signup = async (req, res, next) => {

    const { email, password, bloodGroup} = req.body;
    if(!email || !password || !bloodGroup){
        return next(new Error("Email Password and BloodGroup are required"));
    }
    try {
        const user = await signUpService({email, password, bloodGroup});
        
        res.status(201).json({
            success: true,
            data: {
                _id: user._id,
            },
            message: "User created successfully",
        });
       
    } catch (error) {
        next(error);
    }
}

exports.login = async (req, res, next) => {

    try{
        const user = await loginService(req.body);
        
        const isPasswordValid = user.comparePassword(req.body.password, user.password);
        if(!isPasswordValid){
            return next(new Error("Invalid Credentials"));
        }
        const token = generateToken(user);

        const { password, ...userWithoutPassword } = user.toObject();

        res.status(200).json({
            success: true,
            data: {
                user:userWithoutPassword,
                token,
            },
            message: "User logged in successfully",
        });
    }
    catch(error){
        next(error);
    }
}