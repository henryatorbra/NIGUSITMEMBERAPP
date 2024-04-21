
import dotenv from "dotenv";
dotenv.config();


const hostname = process.env.HOST_NAME;
const loginUrl = `${hostname}/onboarding`;

function logoutController (req,res){
// you will send back a cookie set to nothing. set the max age to immediate by setting the expiry to zero.^



req.session.destroy(()=>{
    console.log("destroyed session");
    res.status(200).send('logged out');
})


}


export default logoutController;