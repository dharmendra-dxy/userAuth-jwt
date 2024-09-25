const jwt = require("jsonwebtoken");

// createToken:
function createToken(user){
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
    };

    return jwt.sign(payload, "secret-key");
}

module.exports = {
    createToken,
}