import mongoose from "mongoose";
//import signupmodels from "..../models/signupmodels.js"
import signupUserModel from "../../../models/signupmodels.js";
import dotenv from "dotenv"
dotenv.config();
var mongooseUrl = process.env.DATABASE_URL;


async function signupController (req, res){
    console.log(`sign up route was hit, this is from the signup controller`)
    try {
        // don't know if this connection should be here, maybe when the server starts.
       await  mongoose.connect(mongooseUrl);
    } catch (error) {
        // create an error handling function. But for now we will just log it to the console.
        console.log(`there was an error message at signupController. This is the error; ${error.message}`)
     }

     const userDetails = req.body;
    var createdUser =  await signupUserModel.create(userDetails);
     console.log(createdUser)
     //console.log(userDetails);
     console.log(`this is the request body` ,req.body.username);
    res.json(createdUser);


}

export default signupController;