// npm install express --save
// để reload lại nhấn ctrl + c
var express = require('express');
var app = express();

var port = 3000;


app.set('view engine', 'pug');
app.set('views', './views');


var users = [
    { id: 1, name: 'Thinh'},
    { id: 2, name: 'Tan'},
    { id: 3, name: 'hao'}, 
    { id: 3, name: 'thien'}
];

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
    users: users   
    });
});


app.get('/users/search', function(req, res) {
    var q = req.query.q;
    var matchedUsers = users.filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;    // toLowerCase(): dùng để chuyển chữ hoa thành chữ thường 
    });
    res.render('users/index', {
        users: matchedUsers
    });
});


// terminal
app.listen(port, function() {
    console.log('server listening on port ' + port); 
});