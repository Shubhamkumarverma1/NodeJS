const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,

    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    gender:{
        type:String
    }

},
{timestamps: true}
)

//model

const User=mongoose.model("User",userSchema);

module.exports = User;