
var express = require('express');
var path = require('path');
var open = require('./openUrl');
var getIp = require('./getIp');

var app = express();
var hostName = getIp();
var port = '3000';
var url = `http://${hostName}:${port}`;

app.use(express.static(path.join(__dirname,'../docs')))

app.listen(port,hostName,function(){
    console.log(`Server is Running on ${url}..`);
})
open(url); // 自动打开浏览器