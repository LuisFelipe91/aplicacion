var express = requiere('express');
var path = requiere('path');
var app = express();
var PORT = 3000;

app.use(express.static(path.join(_dirname+'/public')));
app.get('/',function(req,res){
    res.sendFile(path.join(_dirname+'/index.html'));