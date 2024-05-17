

import mongoose from "mongoose";

const createaffiliatedbusinessesSchema = new mongoose.Schema({
   businessname: {type: String, unique: true},
   description: String,
   address: String,
   contact: String,
   userId: mongoose.ObjectId,//might cause an error. 


})

const createaffiliatedbusinessesModel = mongoose.model('affiliatedbusiness', createaffiliatedbusinessesSchema);

export default createaffiliatedbusinessesModel;