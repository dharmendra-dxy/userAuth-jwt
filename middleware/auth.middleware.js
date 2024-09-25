const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

// requireAuthentication:
function requireAuthentication(req,res, next){
    const token = req.cookies.jwt;

    // check jwt token exist and verify:
    if(token){
        jwt.verify(token, "secret-key", (err, decodedToken) => {
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


// checkCurrentUser:
function checkCurrentUser(req, res, next){
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, "secret-key", async (err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.locals.user = null;
                next();
            }
            else{
                console.log("decodedToken ", decodedToken);
                let user = await User.findById(decodedToken.id);

                res.locals.user = user;
                next();
            }
        });
    }
    else{
        res.locals.user = null;
        next();
    }
}

module.exports = {
    requireAuthentication,
    checkCurrentUser,
}