const express = require("express");
const { handlegetAllUser,handleGetUserById,handleCreateUser,handleUpdateById,handleDeleteById } = require("../controller/user");


const router=express.Router();

// app.get("/users", async (req,res)=>{
//      const users= await User.find({});
//     const html=`<ul>
//     ${users.map((user)=>`<li>${user.firstName} - ${user.email}</li>`).join("")}
//     </ul>`
//     return res.send(html);
// })


router.get("/" ,handlegetAllUser);

router.get("/:id", handleGetUserById);

router.post("/" ,handleCreateUser);

router.patch("/:id" ,handleUpdateById)

router.delete("/:id" , handleDeleteById)

module.exports= router;
