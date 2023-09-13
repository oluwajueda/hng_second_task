const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name must be provided'],
        trim: true,
        maxLength: [20, 'name can not be more than 20 characters']
    }
})

module.exports = mongoose.model('Person', personSchema)