// import figlet from "figlet";

// async function doStuff() {
//   const text = await figlet.text("Shubham")
//   console.log(text);
// }

// doStuff();

import express from 'express'

const app = express();
const port=8080;
app.listen(port,()=>{
    console.log("Request is listening");
})

// app.use((req,res)=>{
//     console.log("Request Received");
//     res.send({
//         name:"apple",
//         coloe:"lal"
//     })
// })

// app.get("/", (req,res)=>{
//     res.send("You are at home page");
// });
// app.get("/apple",(req,res)=>{
//     res.send("You are at apple");
// })
// app.get("/mango",(req,res)=>{
//     res.send("You are at mango ");
// })
// app.get("/grapes",(req,res)=>{
//     res.send("You are at grapes ");
// })

// // app.get("*",(req,res)=>{
// //     res.send("You contacted wrong path")   // in express v5 its not working ...
// // })

// app.use((req,res)=>{
//     res.status(404).send("You contacted wrong path")
// })


app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    let htmlresponse=`Welcome to profile ${username}`
    res.send(htmlresponse);
})

app.get("/search",(req,res)=>{
    let{q}=req.query;
    if(!q){
        res.send("nothing searched")

    }else{
        res.send(`you searched ${q}`)
    }
    
})