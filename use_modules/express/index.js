var express = require('express');
var app = express();

app.use('/',express.static('./'));
app.use('/images',express.static('./images'));

app.use('/lib', express.static( './public/lib'));
app.use('/js', express.static( './public/js'));

app.get('/',function(req,res){
    res.sendFile('index.html');
});
app.listen(5000);
