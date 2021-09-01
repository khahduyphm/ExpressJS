const express = require('express'); // file tuyến đường nào chúng ta cũng sẽ làm như này
const router = express.Router();

const courseController = require('../app/controllers/CourseController');
// tính chất của route chỉ mes từ trên xuống
router.get('/create', courseController.create);  // thêm
router.post('/store', courseController.store);   // sửa
router.get('/:id/edit', courseController.edit);   
router.put('/:id', courseController.update);    // lấy ra
router.patch('/:id/restore', courseController.restore);    // lấy ra
router.delete('/:id', courseController.destroy);  // xóa
router.delete('/:id/force', courseController.forceDestroy);  // xóa
router.get('/:slug', courseController.show); 


module.exports = router;
