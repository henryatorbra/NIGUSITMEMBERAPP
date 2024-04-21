
import bcrypt from "bcrypt";
import signupUserModel from "../../../models/signupmodels/signupmodels.js";

async function resetpasswordController (req,res){
    console.log("reset password controller hit");

    const newpassword = req.body.newpassword;
    const oldpassword = req.body.oldpassword;

    const email = req.session.email;

    //console.log(` This is the new password  `+ newpassword, `this is the old password `+oldpassword);
    
    try{
        var userFromDb = await signupUserModel.findOne({email: email});
        var passwordHashFromDb = userFromDb.password;
        console.log(`This is the password of the user: ${passwordHashFromDb}`)


    }catch (error){
        console.log(error)
    }

    if(userFromDb){

        try {

            var saltanother =  await bcrypt.genSalt(10);
            var oldpasswordhash = await bcrypt.hash(oldpassword, saltanother);
       
            var data = await bcrypt.compare(oldpassword, passwordHashFromDb); 
            
          //  console.log(`old password ${oldpasswordhash}`);
        } catch (error) {
            console.error(error);
        }

        if(data){
            // hash password and save to db;

            var salt =  await bcrypt.genSalt(10);
            var hash = await bcrypt.hash(newpassword, salt);

           

        

            try {
                const updatedUser = await signupUserModel.findOneAndUpdate({email: email},{password: hash},{new: true});
                console.log(updatedUser.password)

               // console.log(updatedUser)
                res.status(200).json({message: "password updated successfully"});
            } catch (error) {
                console.log(error);
            }

            


        }else{
            res.status(400).json({error: "invalid passwords"})
        }
    } else {
        // deny all premissions. Th 
        res.status(400).json({error: "invalid user"});
    }

 

  

}

export default resetpasswordController