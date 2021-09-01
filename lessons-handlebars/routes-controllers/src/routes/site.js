const express = require('express'); // file tuyến đường nào chúng ta cũng sẽ làm như này 
const router = express.Router();


const siteController = require('../app/controllers/SiteController');


// gọi tắt là tuyến đường, nó sẽ chọc từ trên xuống
router.use('/:search', siteController.search); // bên trong tuyến đường news sẽ có gì
router.use('/', siteController.index);  // news


module.exports = router;