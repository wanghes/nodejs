/**
 * Created by G7_user on 2015/9/8.
 */
var readChunk = require('read-chunk');
var http = require('http');

/**********异步方式********/
var aa = readChunk('files/a.txt',1,3,function(error,buffer){
    console.log(buffer);
});


var server = http.createServer(function(request,response){

    //var aa = readChunk('files/a.txt',0,4,function(error,buffer){
    //    //console.log(buffer);
    //    response.writeHead(200,{"Content-Type":"text/plain"});
    //    response.write(buffer,"binary");
    //    response.end();
    //});

    var outPut = readChunk.sync('files/a.txt',1,3);
   // console.log(outPut);
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.charset = 'utf-8';
    response.write(outPut,"binary");
    response.end();
});



/**********同步方式********/


server.listen(3000);

