const express=require("express");
const app=express();
const ExpressErr=require("./ExpressError.js")


// app.use((req,res)=>{
//     console.log("I am middleware");
//     res.send("I am Middleware")
// });

// app.use((req,res,next)=>{
//     console.log("I am middleware 1");
//     next();
// });


// app.use((req,res,next)=>{
//     console.log("I am middleware 2");
//     next();
// });


//-----------------Logger-------------

// app.use((req,res,next)=>{
//     //console.log(req);
//     req.responseTime=new Date(Date.now()).toLocaleString();
//     console.log( "Method - ",req.method , "Path-" ,req.path, req.responseTime,req.hostname)
//     next();
// })


app.use("/random",(req,res,next)=>{
    console.log("I am middleware for random");
    next();
});

//-------Api token query string------------------
app.use("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    res.send("ACCESS DENIED!");
});

// const checkToken=(req,res,next)=>{
//     let {token}=req.query;
//     if(token==="giveaccess"){
//         next();
//     }
//     // res.send("ACCESS DENIED!");

//     throw new ExpressErr(401,"ACCESS DENIED!");
// };

app.get("/api",(req,res)=>{
    res.send("Data");
})



app.get("/",(req,res)=>{
    res.send("I am root");
})

app.get("/random",(req,res)=>{
    res.send(" I Am random path");
})

// app.get("/err",(req,res)=>{
//     abcd=abcd;
// })

// app.use((err,req,res,next)=>{
//     console.log("---------Error-----");
//     next(err);

    
// })


//  app.use((err,req,res,next)=>{
// let {status=500,message="Something went wrong"}=err;
// res.status(status).send(message);
    
// })

//page not found for wrong path--this middleware work 
app.use((req,res)=>{
   res.send("page not found");
    
});

app.listen(3000,()=>{
    console.log("listing at port 8080");
})