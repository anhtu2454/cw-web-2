const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); 

const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET || 'fallback_secret', {
        expiresIn: '1d',
    });
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body; 

    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            role: user.role,
            token: generateToken(user._id, user.role),
        });
    } else {
        res.status(401).json({ message: 'Wrong username or password' });
    }
};
