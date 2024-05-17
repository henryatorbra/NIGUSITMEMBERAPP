

import createaffiliatedbusinessesModel from "../../../models/createaffiliatedbusinessesModel/createaffiliatedbusinessesModel.js";

function individualbusinessController(req, res){
    const businessname = req.query.businessname
    console.log("individual business controller was hit, this is the businessname. " + businessname );
        createaffiliatedbusinessesModel.findOne({businessname: businessname}).then((data)=>{
            console.log(data)
            res.status(200).render("Business Page 1",{
                businessname: data.businessname,
                description: data.description,
                contact: data.contact,
                address: data.address,
            });
        }).catch((e)=> {
            console.log(e);
            res.status(401).json({message: "there was an error."})
        })

        //res.send("individual businesses are working");
}

export default individualbusinessController;

// {
//     name: body.name,
//     description: body.description,
//     address: body.address,
//     contact: body.contact,
//     userId: userId,

// }