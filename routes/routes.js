const express = require('express');
const router = express.Router();
const Nameschema = require('../models/profile');


router.post('/api/persons', async(req, res) => {
    try {
        const {name} = req.body
        
        let person = new Nameschema({
            name
        });

        let createdName = await person.save()

        res.status(201).json({
            status : 'Success',
            data : {
                createdName
            }
        })

        

    } catch (err) {
        res.status(400).json({error: err.message})
    }
})

module.exports = router;