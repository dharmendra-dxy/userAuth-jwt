const jwt = require("jsonwebtoken");

// requireAuthentication:
function requireAuthentication(req,res, next){
    const token = req.cookies.jwt;

    // check jwt token exist and verify:
    if(token){
        const verifiedToken = jwt.verify(token, "secret-key", (err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.redirect("/user/login");
            }
            else{
                console.log("decodedToken ", decodedToken);
                next();
            }
        });
    }
    else{
        res.redirect("/user/login");
    }
}

module.exports = {
    requireAuthentication,
}