const {Childdata} = require('../models/childdata');
const express = require('express');
const router = express.Router();


router.get(`/` , async (req, res) => {
    const productList = await Childdata.find();

    if(!productList) {
        res.status(500).json({success: false})
    }
    res.send(productList);
})


router.post(`/` , (req, res) => {
    const childdata = new Childdata({
        email: req.body.email,
        name: req.body.name,
        date: req.body.date,
        gender: req.body.gender,
        momname: req.body.momname,
        fathname: req.body.fathname,
        contact: req.body.contact,
        address: req.body.address,
        bloodgrp: req.body.bloodgrp,
        birthweight: req.body.birthweight,
        birthtime: req.body.birthtime,
        birthplace: req.body.birthplace,
        defaultcenter: req.body.defaultcenter        

    })

    childdata.save().then((createdChild=> {
        res.status(201).json(createdChild)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports = router;