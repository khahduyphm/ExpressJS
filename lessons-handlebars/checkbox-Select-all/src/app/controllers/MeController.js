const Course = require('../models/Course');
const { mutipMongooseToObject } = require('../../util/mongoose');


class MeController {

    // [GET] / me /stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()]) // lời hứa
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount, 
                    courses: mutipMongooseToObject(courses), 
                })
            )
            .catch(next);

        // Course.countDocumentsDelete() // hứa hẹn đếm xong thì sẽ trả lời
        //     .then((deletedCount) => {   // thành công
        //           console.log(deletedCount);
        //     })
        //     .catch(() => {});            // thất bại

        // Course.find({})            
        //     .then(courses => 
        //         res.render('me/stored-courses', {
        //             courses: mutipMongooseToObject(courses)
        //         })
        //     )
        //     .catch(next);
    }





    // [GET] / me /trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses', {
                courses: mutipMongooseToObject(courses)
            }))
            .catch(next);
    }

}

module.exports = new MeController();
