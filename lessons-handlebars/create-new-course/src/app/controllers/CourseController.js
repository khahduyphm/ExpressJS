const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');


class CourseController {
    // [GET] / sourses/:slug
    show(req, res, next) {
        // res.send('COURSE DETAIL ' + req.params.slug);
        Course.findOne({ slug: req.params.slug })
            .then( course => 
                res.render('courses/show', { course: mongooseToObject(course) })
            )
            .catch(next);
    }


    // [GET] / sourses/create   ->> lấy dữ liệu
    create(req, res, next) {
       res.render('courses/create');
    }

    // [POST] / sourses/post   ->> tạo thêm dữ liệu
    store(req, res, next) {
    
      const formData = req.body;
      formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
      const course = new Course(formData);
      course.save()
          .then(() => res.redirect('/'))
          .catch(error => {

          });
    }
}

module.exports = new CourseController();
