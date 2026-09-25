const express = require("express");
let users=require("./MOCK_DATA.json")
const fs=require("fs");


const app=express();

app.use(express.urlencoded({extended : true}));

app.get("/users", (req,res)=>{
    const html=`<ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>`
    return res.send(html);
})


app.get("/api/users" ,(req,res)=>{
    return res.send(users);
});

app.get("/api/users/:id",(req,res)=>{
    let {id}=req.params;     // const id=Number(req.params.id)
    id=Number(id);           //
    const user=users.find((u)=>id===u.id);

    if(!user){
        return res.send("User not found");
    }
    return res.send(user);

});

app.post("/api/users" ,(req,res)=>{
    const body=req.body;
    users.push({...body , id: users.length +1});
    fs.writeFile("./MOCK_DATA.json" , JSON.stringify(users), (err,data)=>{
        res.send(users);
    })

});

app.patch("/api/users/:id" ,(req,res)=>{
    const id=Number(req.params.id);
    // const new_first_name=req.body.first_name;
    // const new_last_name=req.body.last_name;
    // const newEmail=req.body.email;
    // const updateGender=req.body.gender;


    const user=users.find((u)=>id===u.id);

    if(!user){
        return res.status(404).send("User not found");
    }
    // user.first_name=req.body.first_name;
    // user.last_name=req.body.last_name;
    // user.email=req.body.email;
    // user.gender=req.body.gender;


    //partially
    Object.assign(user,req.body);

    fs.writeFile("./MOCK_DATA.json" , JSON.stringify(users), (err)=>{
     if(err){
        return res.status(500).send("error occured")

     }
     return res.json({message :"updated succdessfully",
        user
    })
    });
})

app.delete("/api/users/:id" , (req,res)=>{
    let id=Number(req.params.id);
    users=users.filter((u)=>id !==u.id);
    //console.log(users);
    fs.writeFile("./MOCK_DATA.json" , JSON.stringify(users), (err)=>{
     if(err){
        return res.status(500).send("error occured")

     }
     return res.json({message :"Deleted succdessfully",
        users
    })
    });


})

app.listen(3000,()=>{
    console.log("Listing at port 3000")
})
