
//import signupmodels from "..../models/signupmodels.js"
import signupUserModel from "../../../models/signupmodels/signupmodels.js";
import dotenv from "dotenv"
import bcrypt from "bcrypt";

dotenv.config();

const jwtsecretAccess = process.env.JWT_SECRET_ACCESS;
const jwtsecretRefresh = process.env.JWT_SECRET_REFRESH;
const expiresInVariable = 2 * 60 * 60 *  24 ;// 8days I think



async function signupController (req, res){
  // Mongoose connection has already been made in app.js
  // It seems moongoose operates with the singleton pattern, 
  // hence, one connection is enough because all constructors return the same 
  // instance of moongoose.



      // grab the user details from the request body
         const userDetails = req.body;
         console.log(userDetails);
         const password = req.body.password;

         bcrypt.genSalt(10, function (err,salt){
         bcrypt.hash(password, salt, async function(err, hash){
            
            
        const otherFields = {
            password: hash,
            active: true,
        };
            
            try {
                var createdUser =  await signupUserModel.create({...userDetails, ...otherFields});
                console.log(createdUser);

                // implement sessions style authentication.

                
              res.status(200).json({message: 'you have signed up successfully'});
              // In the frontend, we need to check the status code and trigger a redirect from there.
            
              
            } catch (e) {
                console.log(e.message)
                res.status(400).json({
                    message: (e.name == 'MongoServerError' && e.code == 11000) ? 'email already exists' : 'there was a server error'
                })
            }
            // console.log(createdUser, "  signup user was created after password hashing.");
            // res.json(createdUser);

        })
     });
  
    
     return

}

export default signupController;