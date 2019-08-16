var express = require('express');
var app = express();
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(3000, function (err) {
    if(err){
        console.log(err);
    } else {
        console.log('Example app listening on port 3000!'); 
    }
});