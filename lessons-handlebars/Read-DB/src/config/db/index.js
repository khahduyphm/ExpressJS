const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/viec_tu_te_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect successfully!!!');
    } catch (error) {
        console.log('connect failure!!!');
    }
}

module.exports = { connect };
