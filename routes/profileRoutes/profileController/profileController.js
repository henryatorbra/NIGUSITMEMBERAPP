

function profileController (req, res){

   

    
    res.render('Profile Page 1', {
        title:`${req.session.firstname} ${req.session.lastname}`,
        email: `${req.session.email}`
    });
};

export default profileController;