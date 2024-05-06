import mongoose from "mongoose";
//import signupmodels from "..../models/signupmodels.js"
import signupUserModel from "../../../models/signupmodels/signupmodels.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import  Jwt from "jsonwebtoken";
import sessionStateModifier from "../../../functionutilities/sessionstate.js";
dotenv.config();

const jwtsecretAccess = process.env.JWT_SECRET_ACCESS;
const jwtsecretRefresh = process.env.JWT_SECRET_REFRESH;
const expiresInVariable = 2 * 60 * 60 *  24 ;// 8days I think
//const {jwt: sas} = Jwt;

async function loginController (req, res){
   // no mongoose connection. Done it only once for the app at app.js;
   // at least that's the plan. If you encounter any stray connections without
   // good reason for their existence, please do well to remove it. Thanks.

     const userDetails = req.body;
    var loggedinUser =  await signupUserModel.findOne({email: userDetails.email}).select("email password");

    console.log('This is the logged in user  '+ loggedinUser);

    if(!loggedinUser){
       // This will occur if there is no user that matches the email.
        return res.status(401).json({error: 'invalid username or password;'});
    }

    // if user exists, generate json webtoken.



    // We check if the passwords match between the two users, with bcrypt compare.
    // The user that wants to log in and the other that is returned from the database search
    const correctPassword = await bcrypt.compare(userDetails.password, loggedinUser.password);

    if (!correctPassword)  {
        return res.status(401).json({error: 'Incorrect email or password.'});
    }else{
        // Modify Session with helper function;
      const modifiedSession = sessionStateModifier(req, loggedinUser)// a helper function that modifies the session for me.


      // Again, in the frontend, check for a 200 status code and 
    // navigate to whatever protected page you want.
   
    res.status(200).json({message: 'you have logged in successfully'});


    }

   
    
  
     
    

}

export default loginController;