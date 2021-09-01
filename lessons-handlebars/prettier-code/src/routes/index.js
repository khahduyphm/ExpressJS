const newRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newRouter); // mỗi khi truy cập vào website có cái path là '/news' như này
    // là nó sẽ chọc vào thằng newRouter này

    app.use('/', siteRouter);
}

module.exports = route;
