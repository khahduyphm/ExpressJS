// npm install express --save
// để reload lại nhấn ctrl + c
var express = require('express');
var app = express();

var port = 3000;


app.set('view engine', 'pug');
app.set('views', './views');


//  đầu tiên chạy terminal trước 
// tiếp theo search  localhost:3000  
app.get('/', function(req, res) {   // (request, response)
    res.render('index',  // past
    {name: 'AAA'}
    );  // methor send: trả về 1 string 
});   


//  đầu tiên chạy terminal trước 
// tiếp theo search  localhost:3000  
app.get('/users', function(req, res) {
    res.render('users/index', {  // muốn render ra thì phải dùng vòng lặp
    users: [
        { id: 1, name: 'thinh'},
        { id: 2, name: 'tan'},
        { id: 3, name: 'hao'}
    ]     
    });
});



// terminal
app.listen(port, function() {
    console.log('server listening on port ' + port);
});