function sessionStateModifier (req, loggedinUser){
    req.session.isAuth = true;
    req.session.email = loggedinUser.email; 
    req.session.firstname = loggedinUser.firstname;
    req.session.lastname = loggedinUser.lastname;
    req.session.isActive = loggedinUser.active;
    req.session.subscribedAt = loggedinUser.subscribedAt;
    req.session.userId = loggedinUser._id;
    

    console.log("user id ia " + loggedinUser._id)


    return req.session;
}


export default sessionStateModifier;