import mongoose from "mongoose";
//import signupmodels from "..../models/signupmodels.js"
import signupUserModel from "../../../models/signupmodels.js";
import dotenv from "dotenv"
dotenv.config();
var mongooseUrl = process.env.DATABASE_URL;


async function loginController (req, res){
    console.log(`sign up route was hit, this is from the signup controller`)
    try {
        // don't know if this connection should be here, maybe when the server starts.
       await  mongoose.connect(mongooseUrl);
    } catch (error) {
        // create an error handling function. But for now we will just log it to the console.
        console.log(`there was an error message at signupController. This is the error; ${error.message}`)
     }

     const userDetails = req.body;
    var loggedinUser =  await signupUserModel.findOne(userDetails);

    // if user exists, generate json webtoken.

     console.log( `This is the loggedin  user` + loggedinUser)
     //console.log(userDetails);
     console.log(`this is the request body for login` ,req.body.username);
    res.json(loggedinUser);


}

export default loginController;