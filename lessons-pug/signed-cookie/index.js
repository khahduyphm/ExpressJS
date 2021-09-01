// 17 tránh người dùng cố tình hack tài khoản


// nội dung chủ yếu là chia nhỏ chương trình ra 
//  tạo ra 1 forder controller mục đích lấy dữ liệu ra và render như thế nào

// npm install express --save
// để reload lại nhấn ctrl + c
var express = require('express');
// npm install body-parser --save
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');

var authMiddleware = require('./middlewares/auth.middleware');

var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser('asdsasafasfas1644aasd'));
app.use(express.static('public'));

//  đầu tiên chạy terminal trước 
// tiếp theo search  localhost:3000  
// Routes
app.get('/', function(req, res) {   // (request, response)
    res.render('index',  // past
    {name: 'AAA'}
    );  // methor send: trả về 1 string 
});   

// truyền ra 1 cái chuỗi (cách này ko được dùng nhiều)

app.get('/styles/custom.css', function(req, res) {
    res.send('abc');
});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
// terminal
app.listen(port, function() {
    console.log('server listening on port ' + port); 
});