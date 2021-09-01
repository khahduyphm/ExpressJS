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
             //  .catch(error => {next(error);});  // có thể viết tắc kiểu như này
    }

    // index(req, res, next) {
    //     Course.find({})
    //         .then(courses =>  {
    //             courses = courses.map(course => course.toObject())
    //             res.render('home', { courses })
    //         }) 
    //         .catch(next);
    //          //  .catch(error => {next(error);});  // có thể viết tắc kiểu như này
    // }


    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
