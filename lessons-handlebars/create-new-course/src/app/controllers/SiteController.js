const Course = require('../models/Course');
const { mutipMongooseToObject } = require('../../util/mongoose');


class SiteController {
    // [GET] / home//
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: mutipMongooseToObject(courses)
                 })
            }) 
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
