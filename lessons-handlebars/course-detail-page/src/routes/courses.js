const express = require('express'); // file tuyến đường nào chúng ta cũng sẽ làm như này
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/', courseController.show); 
// vì lúc này chúng ta đang định nghĩa cụ thể 1 tuyến đường nên sẽ sử dụng get
router.get('/:slug', courseController.show); //  bên trong tuyến đường news sẽ có gì

module.exports = router;
