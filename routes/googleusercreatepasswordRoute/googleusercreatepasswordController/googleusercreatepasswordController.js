
import bcrypt from "bcrypt";
import signupUserModel from "../../../models/signupmodels/signupmodels.js";

async function googleCreatePasswordController (req, res, next){
    console.log(" this is the googleCreatePasswordController.")
    const email = req.session.email;
    const firstname = req.session.firstname;
    const lastname = req.session.lastname;


    const password = req.body.password;

    try {

        var salt = await bcrypt.genSalt(10);
        var hash = await bcrypt.hash(password, salt);
    
        var userDetails = {
            email: email,
            firstname: firstname,
            lastname: lastname,
            password: hash
        }


         
        try {
        var createdUser =  await signupUserModel.create(userDetails);
            
        } catch (error) {
            res.status(400).send({message: "There was an error"});
        }
        req.session.isAuth = true;
        req.session.active = createdUser.active;
        req.session.subscribedAt = createdUser.subscribedAt;
        req.session.userId = createdUser._id;
        

        //console.log("finished creating");

        res.status(200).json({message: "User Logged in successfully"});
        
    } catch (error) {
        console.log(error);
        res.status(400).send({error: 'There was an error'});
    }

   


 

    

    
}

export default googleCreatePasswordController;