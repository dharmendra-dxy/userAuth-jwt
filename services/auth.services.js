const jwt = require("jsonwebtoken");

// createToken:
function createToken(id){
    const payload = {
        id,
    };

    return jwt.sign(payload, "secret-key");
}

module.exports = {
    createToken,
}