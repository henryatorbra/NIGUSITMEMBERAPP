import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv";
import signupUserModel from "../../../models/signupmodels/signupmodels.js";
import bcrypt from "bcrypt";
dotenv.config();



const googleClientId = process.env.GOOGLE_CLIENT_TOKEN;
const port = process.env.PORT;
const hostName = process.env.HOST_NAME;
const passwordRedirectUrl = `${hostName}${port}/googleusercreatepassword`;
const profileRedirectUrl = "http://localhost:9000/profilepage";






async function googleLoginController (req, res){
   
   
    // In the google's documentation, we need this checks to mitigate csrf attacks
    // this is the link I got it from 
    //https://developers.google.com/identity/gsi/web/guides/verify-google-id-token#node.js

  

   
    const id_token = req.body.credential;
    //console.log(`this should be the id_token ${id_token}`)

    const csrf_token_cookie = req.cookies.g_csrf_token;

    if (!csrf_token_cookie){
        res.status(400).json({message: " Bad Request"});
    }

    var csrf_token_body = req.body.g_csrf_token;

    if (!csrf_token_body ) {
        res.status(400).json({message: "Bad Request"});
    }

    if( csrf_token_cookie != csrf_token_body){
        res.status(400).json({message: "Bad Request"});
    }

    async function verify() {
        const client = new OAuth2Client();
        const ticket = await client.verifyIdToken({
          idToken: id_token,
          audience: googleClientId,  // Specify the CLIENT_ID of the app that accesses the backend
          // Or, if multiple clients access the backend:
          //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      const userid = payload['sub'];
      // If request specified a G Suite domain:
      // const domain = payload['hd'];

      return payload;
    }
    

    try {
        var userDetailsFromGoogle = await verify()
    } catch (error) {
        res.status(400).send({message:'Something went wrong'})
        return;
        
    }
    
    // get email from the userDetailsFromGoogle and 
    // search database to see if the user email exists
    var emailFromGoogle = userDetailsFromGoogle.email
    var userFromDb = await signupUserModel.findOne({email: emailFromGoogle}).select("email password");

    // If the user does not exist,
    // trigger a redirect through any of the various means,
    // to get him to set a password.
    // We require only password because we have other details from google 
    // Via the google OAuth2Client .
    
    if (!userFromDb){
        // There will probably be another route that will handle the 
        // injection of the user (with password in this time) into the database.
        // By "there will" I mean, I will implement the route.

        // If the user from google does not exist,
        // we create them and set the is google user flag to true.

        // we will use store the email that the password will need in the sessions object
        
        //

   

        console.log(userDetailsFromGoogle);
        req.session.email = userDetailsFromGoogle.email;
        req.session.firstname = userDetailsFromGoogle.given_name;
        req.session.lastname = userDetailsFromGoogle.family_name;



      

       
        res.status(200).redirect(passwordRedirectUrl);
    } else {
        // If the user exists, then the user already has a password.
        // We can decide later to grab some data from the google OAuthClient.
        // But for now, we just mutate the req.sessions object and log him in.

        req.session.isAuth = true;
        req.session.email = userDetailsFromGoogle.email;
        req.session.firstname = userDetailsFromGoogle.given_name;
        req.session.lastname = userDetailsFromGoogle.family_name;
        
        res.status(200).redirect(profileRedirectUrl);
        
    }







}

export default googleLoginController;