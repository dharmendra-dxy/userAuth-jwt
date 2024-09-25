const User = require("../models/user.model");

const {createToken} = require("../services/auth.services");

// handle Errors:
function handleError(err){
    console.log(err.message, err.code);
    let error = {email : "", password: ""};

    // incorrect email:
    if(err.message === "Incorrect email"){
        error.email = "Email is not registed";
    }

    // incorrect password:
    if(err.message === "Incorrect password"){
        error.password = "Password is incorrect";
    }

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



// [GET] handleUserSignup:
function handleGetUserSignup(req, res){
    return res.render("signup");
}

// [GET] handleGetUserLogin:
function handleGetUserLogin(req, res){
    return res.render("login");
}

// [GET] handleGetUserLogout:
function handleGetUserLogout(req,res){
    res.cookie("jwt", "", {maxAge: 1});
    res.redirect("/");
}


// [POST] handlePostUserSignup:
async function handlePostUserSignup(req, res){
    const {name, email, password} = req.body;

    try{
        const user = await User.create({
            name,
            email,
            password,
        });
        // createToken and cookie when user is created:
        const token = createToken(user._id);
        res.cookie("jwt", token);

        res.status(200).redirect("/");
    } 
    catch(err){
        const errors = handleError(err);
        res.status(400).json({errors});
    }

}


// [POST] handlePostUserLogin:
async function handlePostUserLogin(req, res){
    const {email, password} = req.body;

    try{
        const user = await User.loginUser(email, password);

        // createToken and cookie when user is found:
        const token = createToken(user._id);
        res.cookie("jwt", token);

        res.status(200).redirect("/");
    }
    catch(err){
        const errors = handleError(err);
        res.status(400).json({errors});
    }

}


module.exports = {
    handleGetUserSignup,
    handlePostUserSignup,
    handleGetUserLogin,
    handlePostUserLogin,
    handleGetUserLogout,
}