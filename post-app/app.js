const express = require('express'); // khai báo thư viện express
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser'); // đọc dữ liệu gửi từ phía client || khởi động middleware để chạy
const methodOverride = require('method-override');
const connectDB = require('./config/db'); // lấy file db.js ra sử dụng

// Nhap khau routes
const posts = require('./routes/posts');

// khởi động app
const app = express();

// khởi động Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// khởi động bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// khởi động methodOverride middleware
app.use(methodOverride('_method'));

// khởi động express middleware
app.use(express.json());

// kết nói cơ sở dữ liệu
connectDB()

// Mot so routes co ban, co the dua vao file rieng trong thu muc routes
app.get('/', (req, res) => res.render('index'))
app.get('/about', (req, res) => res.render('about'))

// Mang routes vao de su dung
app.use('/posts', posts)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server da khoi dong tai port ${PORT}`))
