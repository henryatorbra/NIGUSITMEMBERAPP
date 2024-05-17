

import mongoose, { isObjectIdOrHexString } from "mongoose";

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
    active: {type: Boolean, default: true},
    googlesignedin : {type: Boolean, default: false},
    subscribedAt: {type: Date, default: null},
    
})

const signupUserModel = mongoose.model('User', signupuserSchema);

export default signupUserModel;