# userAuth JWT



## Cookies

First of all download cookie parser: ``` npm i cookie-parser```

``` 
app.get("/set-cookies", (req,res) => {
    // res.setHeader("set-cookie", "newUser-true"); -> without cookieParser
    res.cookie("newUser", false);
    res.cookie("isEmployee", true);

    res.send("You got the cookies");
});

app.get("/read-cookies", (req,res) => {

    const cookies = req.cookies;
    console.log(cookies);

    res.json(cookies);

}); 
```
