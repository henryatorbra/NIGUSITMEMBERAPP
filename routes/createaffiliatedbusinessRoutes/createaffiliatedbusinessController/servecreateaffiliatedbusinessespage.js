function servecreateaffiliatedbusinessesapage (req,res){
    console.log("serve create affiliated business page was hit");

    res.status(200).render("Createaffiliatedbusiness");
}

export default servecreateaffiliatedbusinessesapage;