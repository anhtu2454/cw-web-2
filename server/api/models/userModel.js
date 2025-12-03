const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, 
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'admin',
    },
}, {
    timestamps: true
});

userSchema.methods.matchPassword = async function(enteredPassword) {

    return enteredPassword === this.password; 
};

const User = mongoose.model('User', userSchema);
module.exports = User;