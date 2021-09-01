// module.exports = {
//     a: 1,
//     b: 2
// }
// module.exports.a = 1;
// module.exports.b = 2;


var db = require('../db');
var shortid = require('shortid');
module.exports.index = function(req, res) {
    res.render('users/index', {  // muốn render ra thì phải dùng vòng lặp
    users: db.get('users').value()
    });
};
module.exports.search = function(req, res) {
    var q = req.query.q;
    var matchedUsers = db.get('users').value().filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;    // toLowerCase(): dùng để chuyển chữ hoa thành chữ thường 
    });
    res.render('users/index', {
        users: matchedUsers
    });
};

module.exports.create = function(req, res) {
    res.render('users/create');
};

module.exports.get = function(req, res) {
    var id = req.params.id;
    // console.log(typeof id); // xem thử có phải String hay không
    var user = db.get('users').find({ id: id }).value();

    res.render('users/view', {
        user: user
    });
};

module.exports.postCreate = function(req, res) {
    req.body.id = shortid.generate();
    var errors = [];

    if (!req.body.name) {
        errors.push('name is require.');
    }
    if (!req.body.phone) {
        errors.push('phone is require.');
    }
    if (errors.length) {
        res.render('users/create', {
            errors: errors,
            values: req.body
        });
        return;
    }

    db.get('users').push(req.body)  // ghi lại vào file db.json
      .write();
    res.redirect('/users');
};


