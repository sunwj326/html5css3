var zlib = require("zlib");
var gzip = zlib.createGzip();
var fs = require('fs');
var inFile = fs.createReadStream('example.txt');
var outGzip = fs.createWriteStream('example.gz');
//inFile - Readable
//gzip - Transform(Readable && Writable)
//outFile - Writable
inFile.pipe(gzip).pipe(outGzip);

setTimeout(function(){
  var gunzip = zlib.createUnzip({flush: zlib.Z_FULL_FLUSH});
  var inGzip = fs.createReadStream('example.gz');
  var outFile = fs.createWriteStream('example.unzipped');
  inGzip.pipe(gunzip).pipe(outFile);
}, 5000);