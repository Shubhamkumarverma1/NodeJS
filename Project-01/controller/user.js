const { get } = require("mongoose");
const User=require("../models/user");

async function handlegetAllUser(req,res){
   const users= await User.find({});
   return res.send(users);
}

async function handleGetUserById(req,res){
    let {id}=req.params;     // const id=Number(req.params.id)          //
    const result = await User.findById(id);
    if(!result){
        return res.status(400).send("User not found!")
    }
    res.send(result);

}

async function handleCreateUser (req,res){
    const body=req.body;

   const result=  await User.create({
        firstName:body.firstName,
        lastName:body.lastName,
        email:body.email,
        gender:body.gender

    })

    res.status(201).send("created ")
    

}

async function handleUpdateById (req,res){
    const {id}=req.params;

    const updatedUser = await User.findByIdAndUpdate(id,req.body,{new:true});

    if(!updatedUser){
        return res.status(400).json({
            message:"USer not found"
        });
    }

    return res.status(200).send("updated successfully" , updatedUser)

     

}


async function handleDeleteById(req,res){
   await User.findByIdAndDelete(req.params.id);

   return res.send("Dleted successfully");
    
}



module.exports={
    handlegetAllUser,
    handleGetUserById,
    handleCreateUser,
    handleUpdateById,
    handleDeleteById
    

}