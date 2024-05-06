
import signupUserModel from "../../../models/signupmodels/signupmodels.js";
import userTransactionModel from "../../../models/transactionmodels/transactionschema.js";
 
async function subscriptionstatusController (req, res, next){
    var email = req.session.email;
    try {
        // probably do some other things
        // maybe reset the subscribedAt timer.
        // also, record this deactivation in the transaction history.
       var deactivated =  await signupUserModel.findOneAndUpdate({email: email}, {active: false, subscribedAt: null}, {new:true});

       var newTransactionDetails = {
            userId: deactivated._id,
            date: Date.now(),
            transactionType: "deactivate",
            active: deactivated.active
       }
       // Things to update
      // 1. req.sessions.subscribedAt
      // 2. subscribedAt inside the database.

       var newTransaction = await userTransactionModel.create(newTransactionDetails)
         req.session.subscribedAt = null;
        res.status(200).json({message: "deactivate successful"})

    } catch (error) {
        console.log(error);
        res.status(400).json({message: "There was an error"});
    }
    console.log("deactivate was hit");
};

export default subscriptionstatusController;