const express = require("express")

const app = express();

app.get("/api/main",(req,res)=>{
    res.send("<html><body><h2>Express.js </h2><p>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.</p></body></html>");
})

const middleware1 = (req,res,next) => {
    console.log("middleware1");
    next();
}

app.use(middleware1);

const middleware2 = (req,res, next) => {
    console.log("middleware2");
    next();
}

app.get("/login",(req,res)=>{res.send("hello")})
app.get("/signup",(req,res)=>{res.send("hello")})
app.get("/home",middleware2,(req,res)=>{res.send("hello")})
app.get("/about",middleware2,(req,res)=>{res.send("hii")})


app.listen(4001, ()=>{
    console.log("server is running");
})