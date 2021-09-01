const Course = require('../models/Course');

class SiteController {
    // [GET] / home
    index(req, res) {

        Course.find({}, function (err, course) {
            if (!err) {
                res.json(course);
            } 
            else {
                res.status(400).json({ error: 'ERROR!!!' });
            }
        });
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
