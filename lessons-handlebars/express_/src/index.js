const express = require('express'); // gọi thằng express ra từ thằng node_modules
const morgan = require('morgan');

const app = express();  // 1 function được xây dựng sẵn
const port = 3000;  // cổng


app.use(morgan('combined'));
// Template engine
// route: được hiểu như là tuyến đường
// app.get('/', function(req, res) {
//   return res.send('Hello World!');
// });
// cách viết gọn hơn
app.get('/', (req, res) => {
  res.send('123');
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});