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

const getSinglePerson = async (req, res) => {
    try {
        const {user_id} = req.params;
        const person = await Person.findById(user_id);

        if(!person){
            return res.status(404).json({error: 'Person not found'})
        }
        res.json(person);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'An internal error occurred'})
    }
}

//Update Person

const updatePerson = async (req, res) => {
    try {
        const {user_id} = req.params;
        const { name } = re.body;

        if(!name || typeof name !== 'string') {
            return res.status(400).json({error: 'invalid request, please check your input'});
        }

        const person = await Person.findByIdAndUpdate(
            user_id,
            { name },

            {new: true}
        );

        if(!person) {
            return res.status(404).json({error: 'Person not found'});

        }
        res.json(person);
    } catch (error) {
          console.log(error);
          res.status(500).json({error: 'An internal error occurred'});
    }
}

const deletePerson = async (req, res) =>{
    try {
      const {user_id} = req.params;
      
      const person = await Person.findByIdAndRemove(user_id);
      if(!person){
        return res.status(404).json({ error: 'Person not found' });
      }
      res.status(204).json({
        response: 'Person deleted'
      });
    } catch (error) {
        console.error(error);
    res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    createPerson,
    getSinglePerson,
    updatePerson,
    deletePerson
};