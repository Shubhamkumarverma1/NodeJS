const express = require("express");
const app = express();

// console.dir(app);   --app -object 
let port =3000;

app.listen(port,()=>{
    console.log(`app is listning ${port}`)   //this will continue of listning server to stop ctrl + c
});

// app.use(( req ,res) =>{
//     //console.log(req);
//      //let code= "<h1>Fruits<ul><li>Apple</li><li>mango</li></ul></h1>"
//       console.log("request received");
//       //res.send("This is my response")
//            res.send({
//             name:"apple",
//             color:"red"
//            })
//       res.send(code);
// })


// app.get("/",(req,res)=>{
//     res.send("You contacted root path");
// });
// app.get("/apple",(req,res)=>{
//     res.send("You contacted apple path");
// });
// app.get("/orange",(req,res)=>{
//     res.send("You contacted orange path");
// });
// // app.get("*",(req,res)=>{
// //     res.send("You contacted wrong path");
// // });

// app.post("/",(req,res)=>{
//     res.send("You contacted post root path1");
// });

       // ------------------------path parameter --------------------------------------------------


//        app.get("/:username/:id",(req,res)=>{                  
//     console.log(req.params);
//     let{username,id}=req.params;
//     // let htmlstr=<h1>Hello i am ${username} and id is ${id}</h1>;
//     res.send(`<h1>Hello i am ${username} and id is ${id}</h1>`);
// });
  
//----------query string-------------------

 app.get("/search",(req,res)=>{                  
   
    console.log(req);
 console.log(req.query);
let{q}=req.query;
    if(!q){
        res.send("nothing searched");
    }
    
    res.send(`you search for query ${q}`);
});
