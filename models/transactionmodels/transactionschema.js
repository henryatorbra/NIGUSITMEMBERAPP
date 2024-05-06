



import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
   userId: {type: mongoose.Types.ObjectId},
   date: {type: Date},
   transactionType: {type: String},// activate and deactivate
   active: {type: Boolean}

})

const userTransactionModel = mongoose.model('Transaction', transactionSchema);

export default userTransactionModel;