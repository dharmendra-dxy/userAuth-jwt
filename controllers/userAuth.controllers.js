const User = require("../models/user.model");

// handle Errors:
function handleError(err){
    console.log(err.message, err.code);
    let error = {email : "", password: ""};

    // duplicate error code:
    if(err.code===11000){
        error.email = "This email is already registered";
        return error;
    }

    // validation errors:
    if(err.message.includes("user validation failed")){

        Object.values(err.errors).forEach(({properties}) => {
            error[properties.path] = properties.message;
        });
    }
    return error;
}

// handleUserSignup:
function handleGetUserSignup(req, res){
    return res.render("signup");
}

// handleGetUserLogin:
function handleGetUserLogin(req, res){
    return res.render("login");
}


// handlePostUserSignup:
async function handlePostUserSignup(req, res){
    const {name, email, password} = req.body;

    try{
        const user = await User.create({
            name,
            email,
            password,
        });

        res.status(200).redirect("/");
    } 
    catch(err){
        const errors = handleError(err);
        res.status(400).json({errors});
    }

}


// handlePostUserLogin:
async function handlePostUserLogin(req, res){
    const {name, email, password} = req.body;

    try{
        const user = await User.find({email});

    }
    catch(error){

    }

}


module.exports = {
    handleGetUserSignup,
    handlePostUserSignup,
    handleGetUserLogin,
    handlePostUserLogin,
}