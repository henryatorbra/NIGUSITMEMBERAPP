
import createaffiliatedbusinessesModel from "../../../models/createaffiliatedbusinessesModel/createaffiliatedbusinessesModel.js";

function mybusinessController(req, res){
    const body = req.body;
    const userId = req.session.userId;
    console.log("get affiliated business controller was hit");
        createaffiliatedbusinessesModel.find({userId: userId}).then((data)=>{
            console.log(data)
            res.status(200).json(data);
        }).catch(()=> {
            res.status(401).json({message: "there was an error."})
        })
}

export default mybusinessController;

// {
//     name: body.name,
//     description: body.description,
//     address: body.address,
//     contact: body.contact,
//     userId: userId,

// }