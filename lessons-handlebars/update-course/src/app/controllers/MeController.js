const Course = require('../models/Course');
const { mutipMongooseToObject } = require('../../util/mongoose');


class MeController {
    // [GET] / me /stored/courses
  
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: mutipMongooseToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeController();