var archiver = require('archiver');
var fs = require('fs');
var archiverZip =  archiver('zip');

var files = [
    'files/01.jpg',
    'files/02.jpg'
];

var zipPath= 'files/text.zip';

var outPut = fs.createWriteStream(zipPath);
archiverZip.pipe(outPut);

for(var i=0; i<files.length; i++){
    console.log(files[i]);
    archiverZip.append(fs.createReadStream(files[i]),{'name':files[i]});
}

archiverZip.finalize();

