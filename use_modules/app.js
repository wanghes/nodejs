var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request,response){
    //response.writeHead(200,{"Content-Type":"image/jpeg"});
    //response.write('<h1>hello world</h1>');
    //response.end();
    fs.readFile("./files/01.jpg","binary",function(error,file){
        if(error){
            response.writeHead(500,{"Content-Type":"text/plain"});
            response.write(error+"\n");
            response.end();
        }else{
            response.writeHead(200,{"Content-Type":"image/jpg"});
            response.write(file,"binary");
            response.end();
        }
    });
});

server.listen(3000);
