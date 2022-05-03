const {Schedulevac} = require('../models/schedulevac');
const express = require('express');
const router = express.Router();


router.get(`/` , async (req, res) => {
    const productList = await Schedulevac.find();

    if(!productList) {
        res.status(500).json({success: false})
    }
    res.send(productList);
})


router.post(`/` , (req, res) => {
    const schedulevac = new Schedulevac({
        email: req.body.email,
        vaccinename: req.body.vaccinename,
        schdate: req.body.schdate
    })

    schedulevac.save().then((createdschedule=> {
        res.status(201).json(createdschedule)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports = router;