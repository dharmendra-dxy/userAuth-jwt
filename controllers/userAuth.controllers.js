// handleUserSignup:
function handleGetUserSignup(req, res){
    return res.render("signup");
}

// handleGetUserLogin:
function handleGetUserLogin(req, res){
    return res.render("login");
}


// handlePostUserSignup:
function handlePostUserSignup(req, res){
    //
}


// handlePostUserLogin:
function handlePostUserLogin(req, res){
}


module.exports = {
    handleGetUserSignup,
    handlePostUserSignup,
    handleGetUserLogin,
    handlePostUserLogin,
}