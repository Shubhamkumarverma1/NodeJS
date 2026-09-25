const fs=require("fs");

//fs.writeFileSync("./test.txt", "Hi there");
  

// Async --call back required
// fs.writeFile("./test.txt", "Hi there 1  " ,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file saved")
//     }
// });


// fs.writeFileSync("./contact.txt", "Name-Shubham Verma");

// const result=fs.readFileSync("./contact.txt","utf-8");
// console.log(result);

//fs.appendFileSync("./contact.txt","insta: shubhamverma.01")


// Async -read

fs.readFile("./contact.txt","utf-8",(err,result)=>{
    if(err){
       console.log(err);
    }else{
        console.log(result);
    }
})

fs.writeFile("./text.txt"," hi i am Shubham" ,(err)=>{
    if(err){
        console.log(err);
    }
})
