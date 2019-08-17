var express = require('express');
var app = express();
var path = require('path');

app.use('/', express.static(path.resolve(__dirname, 'src')));

app.listen(3000, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Example app listening on port 3000!');
    }
});
