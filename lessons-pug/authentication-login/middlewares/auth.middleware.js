var db = require('../db');

module.exports.requireAuth = function(req, res, next) {
  if (!req.cookies.userId) {
    res.redirect('/auth/login');
    return;
  }

  var user = db.get('users').find({ id: req.cookies.userId }).value();

  if (!user) { // nếu không có thì vô trang này
    res.redirect('/auth/login');
    return;
  } 

  next(); // nếu không thì next
};