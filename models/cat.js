const mongoose = require('mongoose')
const Schema = mongoose.Schema

const catSchema = new Schema ({
    name: {type: String, required: true},
    fur: {type: String, default: 'Floofy'},
    age: {type: Number, default: 4000}
})

module.exports = mongoose.model('Cat', catSchema);