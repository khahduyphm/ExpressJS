var express = require('express');
var controller = require('../controller/user.controller');
var validate = require('../validate/user.validate');  
var router = express.Router();
//  đầu tiên chạy terminal trước 
// tiếp theo search  localhost:3000  
router.get('/', controller.index); // router này chỉ định nghĩa cotroller , method thôi

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;

