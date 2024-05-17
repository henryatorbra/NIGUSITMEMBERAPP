
import createaffiliatedbusinessesModel from "../../../models/createaffiliatedbusinessesModel/createaffiliatedbusinessesModel.js";

function createaffiliatedbusinessController(req, res){
    const body = req.body;
    const userId = req.session.userId;

    // uncomment this for production;
    // the if statement below I mean.

    // if (!userId){
    //     res.status(400).json({message: "incomplete credentials"});
    // }

    try  {  createaffiliatedbusinessesModel.create({
            businessname: body.businessname,
            description: body.description,
            address: body.address,
            contact: body.contact,
            userId: userId,

        }).then(()=>{
            console.log(`This is userId ${JSON.stringify(req.session)}`)
            res.status(200).json({message: "new business created successfully"})
        }).catch((error)=> {
            console.log(error)
            res.status(401).json({message: "there was an error."})
        })}
        catch(e){
            console.log(e.message)
        }
}

export default createaffiliatedbusinessController;