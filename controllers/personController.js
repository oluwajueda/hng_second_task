const Person = require('../models/Person');

//Create

const createPerson = async (req, res) => {
    try {
        const {name} = req.body;
        if(!name || typeof name !== 'string'){
            return res.status(400).json({error: 'Please provide a valid name'})
        } 
       
        const person = new Person({name});
        await person.save();
        res.status(201).json(person);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'An error ocurred'
        })
    }
}
