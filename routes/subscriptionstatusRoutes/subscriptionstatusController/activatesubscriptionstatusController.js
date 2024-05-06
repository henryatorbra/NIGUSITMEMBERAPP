import signupUserModel from "../../../models/signupmodels/signupmodels.js";
import userTransactionModel from "../../../models/transactionmodels/transactionschema.js";
import sessionStateModifier from "../../../functionutilities/sessionstate.js";


async function activatesubscriptionstausController (req, res){

    // here, we will connect our payments function

  // before that, say we have successfully completed payments.
  // we can now update the transactions db and the user subscribedAt field and active field

  
  var email = req.session.email;
  try {
      // probably do some other things
      // maybe reset the subscribedAt timer.
      // also, record this deactivation in the transaction history.

      // Things to update
      // 1. req.sessions.subscribedAt
      // 2. subscribedAt inside the database.
     var activated =  await signupUserModel.findOneAndUpdate({email: email}, {active: true,  subscribedAt: Date.now()}, {new:true});

     var newTransactionDetails = {
          userId: activated._id,
          date: Date.now(),
          transactionType: "activate/renew",
          active: activated.active
     }

     var newTransaction = await userTransactionModel.create(newTransactionDetails)
     req.session.subscribedAt = Date.now()
     res.status(200).json({message: "activate successful"})
     

  } catch (error) {
    res.status(400).json({message: "There was an error"});

      console.log(error);

  }
  console.log("activate was hit");
}

export default activatesubscriptionstausController;