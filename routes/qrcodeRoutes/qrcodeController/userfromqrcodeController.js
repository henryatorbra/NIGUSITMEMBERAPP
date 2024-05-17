
import signupUserModel from "../../../models/signupmodels/signupmodels.js";
async function userfromqrcodeController (req, res){
    console.log("user from qrcode controller was hit")
    var email = req.query.email;
    console.log(email + "from the userfromqrcode controller and route")

    // search the database.
    try {
        signupUserModel.findOne({email:email}).then((data)=>{
            if (data != null){
               
                res.status(200).render('userprofilepagefromqrcode', {
                    name: data.firstname + data.lastname,
                    isActive : data.active
                })
            }else {
                res.status(400).send("you are not a member");
            }

           
        })
    } catch (error) {
        console.log(error);
    }

    
};

export default userfromqrcodeController;