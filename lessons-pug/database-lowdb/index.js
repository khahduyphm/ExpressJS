// npm install express --save
// để reload lại nhấn ctrl + c
var express = require('express');
var app = express();

// npm install body-parser --save
var bodyParser = require('body-parser');


var low = require('lowdb');

var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');

db = low(adapter);

// set some defaults (require if your JSON file is empty)
db.defaults({ users: [] })
  .write();

var port = 3000;


app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded




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
    users: db.get('users').value()
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

app.get('/users/create', function(req, res) {
    res.render('users/create');
});

app.post('/users/create', function(req, res) {
   db.get('users').push(req.body)  // ghi lại vào file db.json
     .write();
   res.redirect('/users');


});
// terminal
app.listen(port, function() {
    console.log('server listening on port ' + port); 
});