const express = require('express'); // file tuyến đường nào chúng ta cũng sẽ làm như này
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// gọi tắt là tuyến đường, nó sẽ chọc từ trên xuống
router.use('/:slug', newsController.show); // bên trong tuyến đường news sẽ có gì
router.use('/', newsController.index); // news

module.exports = router;
