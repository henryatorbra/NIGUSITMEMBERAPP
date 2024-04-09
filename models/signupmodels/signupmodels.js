
import mongoose from "mongoose";

const signupuserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        required: true,
        unique: true,
        message: 'invalid email'
    },
    phone: String,
    password: String,
    active: Boolean,
})

const signupUserModel = mongoose.model('User', signupuserSchema);

export default signupUserModel;