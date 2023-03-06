const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password:{
        type: String,
        required: [true, 'Please provide a password'],
    },
    name:String,
    role:{
        type: String,
        enum: ['donor', 'admin'],
        default: 'donor',
    },
    contactNo:{
        type: String,
        validate:[validator.isMobilePhone, 'Please provide a valid contact number'],
    },
    presentAddress:String,
    permanentAddress:String,
    bloodGroup:{
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    lastDonationDate:{
        type: Date,
    },
    dateOfBirth:{
        type: Date,
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    fbLink:String,
    twitterLink:String,
    linkedinLink:String,
    instagramLink:String,
    profilePic:String,

    
},{timestamps: true});


// Create a pre save hook to hash the password before saving it to the database
UserSchema.pre('save', async function(next){

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Create a method to compare the password entered by the user with the hashed password in the database
UserSchema.methods.comparePassword =  (enteredPassword, hashedPassword) => {
    return bcrypt.compareSync(enteredPassword, hashedPassword);
}

module.exports = mongoose.model('User', UserSchema);
