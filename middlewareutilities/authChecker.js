
import dotenv from "dotenv";
dotenv.config();

const IP_ADDRESS = process.env.IP_ADDRESS;
const domain = process.env.HOST_NAME;



function authChecker (req, res, next){

    //console.log(req.session.isAuth);

    if (req.session.isAuth) {
        next()
   
    }else {
        req.session.destinationurl = req.originalUrl;
        console.log(`This is the request url`+req.originalUrl + `from auth checker`)
        res.redirect(`${process.env.HOST_NAME}/`);
        return;
    }

};

export default authChecker;




//console.log(`This is the request url ${req.url}`)
//    // if you are coming from finishing logging in 
//    // after being redirected when you tried to visit userfromqrcodepage
//    // without being authenticated 
//     if(req.session.qrcode && req.isAuth && req.url.includes("/profilepage")){
//         // you set req.session.qrcode to false, 
//         // because there are other requests coming in from profile route
//         // with isAuth true and the request url for the profile route
//         // if you dont set it to false. anyone coming from profile route 
//         // to any other page will trigger a true in the condition of this if 
//         // statement and will always redirect them to the userfrom login qrcode
//         // therefore, when you're done taking advantage of the req.session.qrcode,
//         // set it to false so that the above condition will not be met and 
//         // it would take you to the userfromqrcode route always.
//         req.session.qrcode = false;
//         res.redirect(`http://${IP_ADDRESS}:9000/userfromqrcode`)
//         return;
//     }


//     // if you are coming directly from the camera scan to access 
//     // the userfromqrcode page
//     if (req.url.includes("/userfromqrcode")){
//         if(req.session.isAuth){
//             next()
//         }else{
//            // res.redirect to login page

//            res.status(400).redirect(`http://${IP_ADDRESS}:9000/`)// this is the url of the onboarding page which is the login page
//          return;
//         }
//         console.log("yes")
//     }