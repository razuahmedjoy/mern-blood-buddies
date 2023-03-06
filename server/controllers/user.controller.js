const UserModel = require("../models/User.model");
const { signUpService } = require("../services/user.service");

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

