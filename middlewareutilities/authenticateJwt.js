import jwt from 'jsonwebtoken';
const accessTokenSecret = process.env.JWT_SECRET_ACCESS;
const refreshTokenSecret = process.env.JWT_SECRET_REFRESH;

function authenticateJwt (req, res, next){
    console.log('jwt authenticator ran.');
    const rawAccessToken = req.headers.authorization;
    const rawRefreshCookieObject = req.cookies;
    const rawRefreshCookie = rawRefreshCookieObject._refresh_token;

    if (rawAccessToken && rawRefreshCookie){
       
        const accessToken = rawAccessToken.split(' ')[1].split('"')[1];
        const refreshToken = rawRefreshCookie.split(' ')[1];
       // console.log(rawAccessToken);
        //console.log(accessToken);

       const decodedAccessToken = jwt.verify(accessToken, accessTokenSecret);
       const decodedRefreshToken = jwt.verify(refreshToken, refreshTokenSecret);

       if (decodedAccessToken && decodedRefreshToken){
            console.log("authenticated");
            next()
       }
       
    } else {
        res.status(401).json({error: 'not authorized'});
        
    }
}

export default authenticateJwt;