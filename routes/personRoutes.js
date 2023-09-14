const express = require('express');
const router = express.Router();

const {
    createPerson,
    getSinglePerson,
    updatePerson,
    deletePerson
} = require('../controllers/personController');

//create route

router.post('/', createPerson);


//get route
router.get('/:user_id', getSinglePerson);

//update route
router.put('/:user_id', updatePerson);

//Delete Person
router.delete('/:user_id', deletePerson)

module.exports = router;



