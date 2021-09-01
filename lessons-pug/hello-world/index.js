
// npm install express --save
var express = require('express');
var app = express();

var port = 3000;



//  đầu tiên chạy terminal trước 
// tiếp theo search  localhost:3000  
app.get('/', function(request, response) {
    response.send('<h1>hello world</h1><a href="/user">User list</a>');
});   


//  đầu tiên chạy terminal trước 
// tiếp theo search  localhost:3000  
app.get('/users', function(request, response) {
    response.send('user list');
});



// terminal
app.listen(port, function() {
    console.log('server listening on port ' + port);
});