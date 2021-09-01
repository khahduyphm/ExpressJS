const express = require('express'); // file tuyến đường nào chúng ta cũng sẽ làm như này
const router = express.Router();

const courseController = require('../app/controllers/CourseController');
// tính chất của route chỉ mes từ trên xuống
router.get('/create', courseController.create); 
router.post('/store', courseController.store); 
router.get('/:slug', courseController.show); //  bên trong tuyến đường news sẽ có gì

module.exports = router;
