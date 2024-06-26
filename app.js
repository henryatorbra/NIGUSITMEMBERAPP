import  express from "express";
import signupRouter from "./routes/signupRoutes/signupRoutes.js";
import onboardingRouter from "./routes/onboardingpageRoutes/onboardingpageRoutes.js";
import subscriptionstatusRouter from "./routes/subscriptionstatusRoutes/subscriptionstatusRouter.js";
import qrcodeRouter from "./routes/qrcodeRoutes/qrcodeRouter.js";
import purchasesRouter from "./routes/purchasesRoutes/purchasesRouter.js";
import passwordRouter from "./routes/passwordRoutes/passwordRouter.js"
import logoutRouter from "./routes/logoutRoutes/logoutRouter.js"
import affiliatedbusinessesRouter from "./routes/affiliatedbusinessesRoutes/affilitatedbusinessesRouter.js" ;
import profileRouter from "./routes/profileRoutes/profileRouter.js"
import googleusercreatepasswordRouter from "./routes/googleusercreatepasswordRoute/googleusercreatepasswordRoute.js"
import resetpasswordRouter from "./routes/resetpasswordRoutes/resetpasswordRouter.js"
import createaffiliatedbusinessRouter from "./routes/createaffiliatedbusinessRoutes/createaffiliatedbusinessRouter.js"
import getaffiliatedbusinessesRouter from "./routes/getaffiliatedbusinessesRoutes/getaffiliatedbusinessesRouter.js"
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";
import mongoose from "mongoose";
import MongodbSession from "connect-mongodb-session";
dotenv.config();
const PORT = process.env.PORT || 9000;

const app = express();
var mongooseUrl = process.env.DATABASE_URL;


const MongoDBSession = MongodbSession(session);
const store = new MongoDBSession({
    uri: mongooseUrl,
    collection: 'mySessions',

})

// https://nigusitmemberapp.onrender.com/

// https://nigusitmemberapp.onrender.com/

// // register view engines.
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.set('views', 'public'); // set views to public

app.use(session({
    secret: 'tesing secret',
    resave: false,
    saveUninitialized: false,
    store: store,
    maxAge: 15 * 60 * 1000
}))
app.use(cookieParser());
app.use("/signup", signupRouter);
app.use("/",onboardingRouter);// this
app.use("/subscriptionstatus", subscriptionstatusRouter);
app.use("/qrcode", qrcodeRouter);
app.use("/purchases", purchasesRouter);
app.use("/resetpassword", resetpasswordRouter);
app.use("/logout", logoutRouter);
app.use("/affiliatedbusinesses", affiliatedbusinessesRouter);
app.use("/profilepage", profileRouter );
app.use("/googleusercreatepassword",googleusercreatepasswordRouter )


// affiliated buisnesses routers

app.use("/createaffliatedbusiness", createaffiliatedbusinessRouter);
app.use("/getaffiliatedbusinesses",getaffiliatedbusinessesRouter );

// testing ejs routes
app.get("/ejs", (req,res)=>{
    res.render('views', {title: 'This is ejs test'});
})


// the google sign in button in the login page and sign up page share the same end point.

// app.get('/', (req, res) => {
//     console.log(`home route was hit`);
//     res.send('working')
// })


 mongoose.connect(mongooseUrl).then(()=> {
    app.listen(PORT, ()=> {
        console.log(mongooseUrl)
        console.log(`server listening on ${PORT}`);
    })
 }).catch((e)=> {
    console.log(e)
 });

