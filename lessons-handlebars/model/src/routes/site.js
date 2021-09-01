const express = require('express'); // file tuyến đường nào chúng ta cũng sẽ làm như này
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// vì lúc này chúng ta đang định nghĩa cụ thể 1 tuyến đường nên sẽ sử dụng get
router.use('/:search', siteController.search); // bên trong tuyến đường news sẽ có gì
router.use('/', siteController.index); // news

module.exports = router;
