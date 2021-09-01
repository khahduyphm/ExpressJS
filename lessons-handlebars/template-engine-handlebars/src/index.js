const path = require('path'); // thư viện có sẵn của nodejs
const express = require('express'); // gọi thằng express ra từ thằng node_modules
const morgan = require('morgan');
const handlebars =  require('express-handlebars');
const app = express();  // 1 function được xây dựng sẵn
const port = 3000;  // cổng


app.use(morgan('combined'));
// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
})); // định nghĩa 'handlebars' bằng handlebars() function này
app.set('view engine', 'hbs');  // set thằng view engine bằng cái 'handlebars' này
app.set('views', path.join(__dirname, 'resources', 'views'));


// route: được hiểu như là tuyến đường
// app.get('/', function(req, res) {
//   return res.send('Hello World!');
// });
// cách viết gọn hơn
app.get('/', (req, res) => {
  res.render('home'); // nó sẽ lấy file này ở file home.handlebars (có nghĩa là mỗi lần render() trang nào thì nó sẽ hiển thị ra trang đó trong thằng body)
});

app.get('/news', (req, res) => {
  res.render('news'); 
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});