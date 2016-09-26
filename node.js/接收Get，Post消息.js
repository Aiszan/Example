"use strict";
const Http = require("http");

const server = function(request,response){  
    response.writeHead(200,{"Content-Type":"text/json"});
    if(request.method === "GET"){
        response.write("收到GET请求");
    }
    else{
        let postdata = "";
        request.addListener("data",function(postchunk){
            postdata += postchunk;
        });
        request.addListener("end",function(){
            console.log(postdata);
            response.write("收到了Post请求");
        });
    }
    response.end();
};

Http.createServer(server).listen(3000);  
console.log("正在监听!");  