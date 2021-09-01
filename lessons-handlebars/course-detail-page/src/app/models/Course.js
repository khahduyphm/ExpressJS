const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    // tạo ra đối tượng của Schema

    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now }, // lưu thời gian bản ghi này được tạo
    updatedAt: { type: Date, default: Date.now }, // lưu thời gian bản ghi này được cập nhập
});

module.exports = mongoose.model('Course', Course);
