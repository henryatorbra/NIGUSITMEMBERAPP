import mongoose from "mongoose";
//import signupmodels from "..../models/signupmodels.js"
import signupUserModel from "../../../models/signupmodels/signupmodels.js";
import dotenv from "dotenv"
import bcrypt from "bcrypt";
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
     };

      // grab the user details from the request body
      const userDetails = req.body;
      console.log(userDetails);
     const password = req.body.password;

     bcrypt.genSalt(10, function (err,salt){
        bcrypt.hash(password, salt, async function(err, hash){
            
            
        const otherFields = {
            password: hash,
            active: true,
        }
            
            try {
                var createdUser =  await signupUserModel.create({...userDetails, ...otherFields});
                res.send({message: 'You have sucessfully signed up'},)
            } catch (e) {
                //console.log(e.message)
                res.status(400).send({
                    message: (e.name == 'MongoServerError' && e.code == 11000) ? 'email already exists' : 'there was a server error'
                })
            }
            // console.log(createdUser, "  signup user was created after password hashing.");
            // res.json(createdUser);

        })
     });
  
    
     //console.log(userDetails);
     console.log(`this is the request body` ,req.body.firstname);
     return
   














}

export default signupController;