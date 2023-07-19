import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        min: 1000000000,
        max: 9999999999

    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    }
});

const User = mongoose.model("User", userSchema);
export default User;