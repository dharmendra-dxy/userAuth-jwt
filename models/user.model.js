const mongoose = require("mongoose");
const {isEmail} = require("validator");
const bcrypt = require("bcrypt");

// userSchema:
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true,
    },
    email : {
        type: String,
        require: [true, "Please enter an email"],
        unique: true,
        lowerchase:true,
        validate: [isEmail, "Please enter a valid email"],
    },
    password : {
        type: String,
        require: [true, "Please enter an password"],
        minlength: [6, "Minimum length of password is 6"],
    },

}, {timestamps: true });


// fire a function after doc saved to db:
// userSchema.post("save", function(doc, next){
//     console.log("new user is created: ", doc);
//     next();
// });

// fire a function before doc saved to db: to hash password
userSchema.pre("save", async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


// user Model:
const User = mongoose.model("user", userSchema);


module.exports = User;