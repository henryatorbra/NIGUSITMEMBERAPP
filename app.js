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
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";
import mongoose from "mongoose";
import MongodbSession from "connect-mongodb-session";
dotenv.config();

const app = express();
var mongooseUrl = process.env.DATABASE_URL;

const PORT = process.env.PORT || 9000;
const MongoDBSession = MongodbSession(session);
const store = new MongoDBSession({
    uri: mongooseUrl,
    collection: 'mySessions',

})

app.use(session({
    secret: 'tesing secret',
    resave: false,
    saveUninitialized: false,
    store: store,
}))
//app.use(cookieParser());
app.use("/signup", signupRouter);
app.use("/onboarding",onboardingRouter);
app.use("/subscriptionstatus", subscriptionstatusRouter);
app.use("/qrcode", qrcodeRouter);
app.use("/purchases", purchasesRouter);
app.use("/resetpassword", passwordRouter);
app.use("/logout", logoutRouter);
app.use("/affiliatedbusinesses", affiliatedbusinessesRouter);
app.use("/profilepage", profileRouter );

app.get('/', (req, res) => {
    console.log(`home route was hit`);
    res.send('working')
})


 mongoose.connect(mongooseUrl).then(()=> {
    app.listen(PORT, ()=> {
        console.log(`server listening on ${PORT}`);
    })
 }).catch((e)=> {
    console.log
 });

