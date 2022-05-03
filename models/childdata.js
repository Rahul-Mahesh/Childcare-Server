const mongoose = require('mongoose');

const childdataSchema = mongoose.Schema({
    email: String,
    name: String,
    date: String,
    gender: String,
    momname: String,
    fathname: String,        
    contact: Number,
    address: String,
    bloodgrp: String,
    birthweight: Number,
    birthtime: Number,
    birthplace: String,
    defaultcenter: String
})

exports.Childdata = mongoose.model('Childdata', childdataSchema)