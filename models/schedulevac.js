const mongoose = require('mongoose');

const schedulevacschema = mongoose.Schema({
    email: String,
    vaccinename: String,
    schdate: String
})

exports.Schedulevac = mongoose.model('Schedulevac', schedulevacschema)