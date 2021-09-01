var express = require('express');
var shortid = require('shortid');
var db = require('../db');
var router = express.Router();
//  đầu tiên chạy terminal trước 
// tiếp theo search  localhost:3000  
router.get('/', function(req, res) {
    res.render('users/index', {  // muốn render ra thì phải dùng vòng lặp
    users: db.get('users').value()
    });
});


router.get('/search', function(req, res) {
    var q = req.query.q;
    var matchedUsers = users.filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;    // toLowerCase(): dùng để chuyển chữ hoa thành chữ thường 
    });
    res.render('users/index', {
        users: matchedUsers
    });
});

router.get('/create', function(req, res) {
    res.render('users/create');
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    // console.log(typeof id); // xem thử có phải String hay không
    var user = db.get('users').find({ id: id }).value();


    res.render('users/view', {
        user: user
    });
});


router.post('/create', function(req, res) {
   req.body.id = shortid.generate();
   db.get('users').push(req.body)  // ghi lại vào file db.json
     .write();
   res.redirect('/users');


});

module.exports = router;

