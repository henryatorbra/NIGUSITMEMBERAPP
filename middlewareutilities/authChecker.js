function authChecker (req, res, next){
    if ( req.session.isAuth) {
        next()
    }else {
        res.status(400).json({message: 'Not Authorized'})
    }

};

export default authChecker;