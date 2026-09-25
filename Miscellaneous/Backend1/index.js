const express=require("express");
const app=express();

const port =8080;
 app.use(express.urlencoded({extended:true}));    // parse the data so that express can understand data (for post request)

app.listen(port,()=>{
    console.log("listening at port: 8080");
});

app.get("/register", (req, res)=>{
    
    console.log(req.query);
let {username, password}=req.query;
    res.send(`Standard GET request! Welcome ${username}`);
});

app.post("/register", (req, res)=>{
    console.log(req.body);
    let {username}=req.body;
    res.send(`Post request! Welcome ${username }`);
});