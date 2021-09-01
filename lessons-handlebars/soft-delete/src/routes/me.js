const express = require('express'); // file tuyến đường nào chúng ta cũng sẽ làm như này
const router = express.Router();

const meController = require('../app/controllers/MeController');
// tính chất của route chỉ mes từ trên xuống
router.get('/stored/courses', meController.storedCourses); 
router.get('/trash/courses', meController.trashCourses); 


module.exports = router;
