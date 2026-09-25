const http=require("http");
const fs =require("fs");
const url=require("url");
const { CLIENT_RENEG_LIMIT } = require("tls");


const server=http.createServer((req,res)=>{

    if(req.url==='/favicon.ico'){ return res.end()};

    //console.log("New req received");
    const log=`${Date.now()} ${req.url}  New req received\n `;
    const myUrl=url.parse(req.url,true);
    console.log(myUrl);
    //console.log(req);


    fs.appendFile("./log.txt",log ,(err,data)=>{
      
        switch(myUrl.pathname){
            case "/":
                res.end("Home page");
                break;
            case "/about":

            const username=myUrl.query.myname;
            console.log(myUrl.query);
                res.end(`Hi ${username}`) ;
                break;
                
             default:
                res.end("404 not found");
        }
        //  res.end("Hello from server");
    })
   
});

server.listen(3000,()=>{
    console.log("Listing at 3000");
})