const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const {connectDatabase} = require("./connection");

const userRoutes = require("./routes/userAuth.routes");

const app = express();
const PORT = 8000;

// ejs:
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


// database connection: 
connectDatabase("mongodb://localhost:27017/userAuth-jwt");


// middlewares:
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cookieParser());


// routes:
app.get("/", (req,res) => res.render("home"));
app.get("/blogs", (req,res) => res.render("blogs"));
app.use("/user",userRoutes);




app.listen(PORT , ()=> console.log(`Server is running at http://localhost:${PORT}`));