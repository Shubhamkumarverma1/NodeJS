const express=require("express");
const app=express();
const path=require("path");

const port=8080;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));

app.set("view engine", "ejs");
app.set("views" ,path.join(__dirname,"/views")); 

app.listen(port,()=>{
    console.log(`Listening at port${port}`);
});

app.get("/home",(req,res)=>{
    res.send("this is root");
});

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/rolldice",(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceval: diceval});
});

// app.get("/ig/:username",(req,res)=>{
//     let {username}=req.params;
//     res.render("instagram.ejs",{username});
// });

// app.get("/ig/:username",(req,res)=>{
//     let {username}=req.params;
//     let followers=["suraj","nikhil","arpan","avisha"];
//     res.render("instagram.ejs",{username,followers});
// });


app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
   
    const instadata=require("./data.json");
    let data =instadata[username];
    console.log(data);
   if(data){
    res.render("instagram.ejs",{ data });
   }else{
    res.render("error");
   }
    
});