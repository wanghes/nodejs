var EventProxy = require('eventproxy');
var fs = require('fs');
var ep = new EventProxy();

ep.all(['one','two','three'],function(one,two,three){
    console.log('1111');
    console.log(one+two+three);
});
ep.fail(function(err){
    console.log(err+'1111');
});

fs.readFile('./number/1.txt','utf-8',function(err,content){
    ep.emit('one',parseInt(content,10));
});

fs.readFile('./number/2.txt','utf-8',function(err,content){
    ep.emit('one',parseInt(content,10));
});

fs.readFile('./number/3.txt','utf-8',function(err,content){
    ep.emit('three',parseInt(content,10));
});