// nội dung chủ yếu là chia nhỏ chương trình ra 

// npm install express --save
// để reload lại nhấn ctrl + c
var express = require('express');
// npm install body-parser --save
var bodyParser = require('body-parser');

var userRoute = require('./routes/user.route');

var port = 3000;

var app = express();
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

app.use('/users', userRoute);

// terminal
app.listen(port, function() {
    console.log('server listening on port ' + port); 
});