//import express from "express";
const express=require("express");
const app=express();
const path=require("path");

const port=8080;
app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public")));

 app.set("view engine" , "ejs");
 app.set("views",path.join(__dirname,"/views"))


app.get("/",(req,res)=>{
    res.render("Home.ejs");
})

app.get("/rolldice",(req,res)=>{
    let num=Math.floor(Math.random()*6)+1 ;
    res.render("rolldice.ejs",{num});
})

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instadata = require("../../EJSDir/data.json");
    let data=instadata[username];
    console.log(data);


    res.render("instagram.ejs",{data});
})
app.listen(port,()=>{
    console.log(`App is listening at port ${port}`);
});





