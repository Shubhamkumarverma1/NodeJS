const express = require("express");
const mongoose=require("mongoose");
const User=require("./models/user");
const userRouter=require("./route/user")
const {logReqRes} =require("./middleware/index")

const app=express();

app.use(express.urlencoded({extended : true}));

main()
.then(()=>{
    console.log("Database Connected");
})
.catch((err)=>console.log(err));

async function main(){
   await mongoose.connect( "mongodb://127.0.0.1:27017/S-1");
}

app.use(logReqRes("log.txt"))
app.use("/api/users" , userRouter);

app.listen(8080,()=>{
    console.log("Listing at port 8080")
})
