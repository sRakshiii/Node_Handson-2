const express = require("express")

const app = express();

app.get("/api/main",(req,res)=>{
    res.send("<html><body><h2>Express.js </h2><p>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.</p></body></html>");
})


app.listen(4001, ()=>{
    console.log("server is running");
})