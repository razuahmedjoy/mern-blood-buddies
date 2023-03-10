const UserModel = require("../models/User.model");
const { signUpService, loginService, updateUserService } = require("../services/user.service");
const { generateToken } = require("../utils/generateToken");

exports.signup = async (req, res, next) => {

    const { email, password, bloodGroup } = req.body;
    if (!email || !password || !bloodGroup) {
        return next(new Error("Email Password and BloodGroup are required"));
    }
    try {
        const user = await signUpService({ ...req.body });

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

    try {
        const user = await loginService(req.body);

        const isPasswordValid = user.comparePassword(req.body.password, user.password);
        if (!isPasswordValid) {
            return next(new Error("Invalid Credentials"));
        }
        const token = generateToken(user);

        const { password, ...userWithoutPassword } = user.toObject();

        res.status(200).json({
            success: true,
            data: {
                user: userWithoutPassword,
                token,
            },
            message: "User logged in successfully",
        });
    }
    catch (error) {
        next(error);
    }
}

exports.update = async (req, res, next) => {

    try {

        const { id } = req.params;
        const {password , ...data } = req.body;
        
        if(password){
            return next(new Error("Password cannot be updated"));
        }
        const result = await updateUserService(id, data);

        res.status(200).json({
            success: true,
            message: "User updated successfully",
        });


    }
    catch (error) {
        next(error);
    }
}

exports.getDonors = async (req, res, next) => {
    try {
        const donors = await UserModel.find({ role: 'donor', status: 'active' }).select("-password");
        res.status(200).json({
            success: true,
            data: donors,
            message: "Donors fetched successfully",
        });
    } catch (error) {
        next(error);
    }
}

exports.getDonorById = async (req, res, next) => {
    try {

        const { id } = req.params;
        const data = await UserModel.findById(id).select("-password");
        if (data?._id) {
            res.status(200).json({
                success: true,
                data,
                message: "Donor fetched successfully",
            });
        }
        else {
            throw new Error("Donor not found");
        }

    } catch (error) {
        next(error);
    }

}