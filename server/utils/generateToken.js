const jwt = require('jsonwebtoken')

exports.generateToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role,
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'})
    return token;
}