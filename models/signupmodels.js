import mongoose from "mongoose";

const signupuserSchema = new mongoose.Schema({
    username: String,
    password: String,
})

const signupUserModel = mongoose.model('User', signupuserSchema);

export default signupUserModel;