// userModel.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

    forgotPasswordToken: String,
    forgotPasswordExpire: Date,

    verifyToken: String,
    verifyExpire: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;