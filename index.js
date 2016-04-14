var express = require('express');
var app = express();
var path = require('path');
var rootPath = path.normalize(__dirname);
var nodePort = 1999;

app.use(express.static(rootPath));

app.listen(nodePort);

console.log(new Date() + ':listening on port: ' + nodePort);


