// 13 đưa dữ liệu lên server  ->  http://localhost:3000

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { query } = require('express');
const app = express();
const port = 3000;
const route = require('./routes');

const db = require('./config/db');
// connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public'))); // 4

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// app.use(morgan('combined'));
// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); // path sẽ tự điền dấu gạch chéo / vô giữa 'resources', 'views' cho chúng ta

// Route init : khởi tạo tuyến đường
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
