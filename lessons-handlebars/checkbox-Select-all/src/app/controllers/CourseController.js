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

    // [POST] / sourses/store   ->> tạo thêm dữ liệu
    store(req, res, next) {
      req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
      const course = new Course(req.body);
      course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error => {});
    } 

     // [GET] / sourses/:id/edit
    edit(req, res, next) {

        Course.findById(req.params.id)
            .then( course => res.render('courses/edit', { 
                course: mongooseToObject(course) 
            }))
            .catch(next);
     }

      // [PUT] / sourses/:id
     update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))  // trả về lại trang khóa học
            .catch(next);
     }

     // [DELETE] / sourses/:id
     destroy(req, res, next) {
         Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
     }

      // [DELETE] / sourses/:id/force
     forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
           .then(() => res.redirect('back'))
           .catch(next);
    }
      
     // [PATCH] / sourses/:id/restore
     restore(req, res, next) {
        Course.restore({ _id: req.params.id })
           .then(() => res.redirect('back'))
           .catch(next);
    }
}


module.exports = new CourseController();
