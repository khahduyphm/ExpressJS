const express = require('express'); // file tuyến đường nào chúng ta cũng sẽ làm như này
const router = express.Router();

const newsController = require('../app/controllers/NewsController');


// vì lúc này chúng ta đang định nghĩa cụ thể 1 tuyến đường nên sẽ sử dụng get
router.use('/:slug', newsController.show); // bên trong tuyến đường news sẽ có gì
router.use('/', newsController.index); // news

module.exports = router;
