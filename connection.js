const mongoose = require("mongoose");

function connectDatabase(url){
    return mongoose.connect(url)
    .then(()=> console.log("Mongo Database connected succefully!!"))
    .catch((err) => console.log("MongoDB error: ", err));
}

module.exports = {
    connectDatabase,
}