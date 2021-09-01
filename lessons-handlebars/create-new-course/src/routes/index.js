const newRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newRouter); // mỗi khi truy cập vào website có cái path là '/news' như này là nó sẽ chọc vào thằng newRouter này
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);  // trang chính
}

module.exports = route;
