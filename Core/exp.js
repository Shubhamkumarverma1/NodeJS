const express=require("express");

const app=express();

app.get("/" ,(req,res)=>{
    res.send("Home page");
})

app.get("/instagram/:username/:id" ,(req,res)=>{
    let {username,id}=req.params;
    res.send(`Hi welocme ${username} to your account ${id}`);
})

app.listen(8080,()=>{
    console.log("listing at port 8080");
})