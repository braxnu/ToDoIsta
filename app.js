var express = require('express');
var app = express();
app.use('/', express.static('src'));
//app.use(express.static('src'));  

app.listen(3000, function (err) {
    if(err){
        console.log(err);
    } else {
        console.log('Example app listening on port 3000!'); 
    }
});