const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
  name: {type: String, required: true},
  grade: {type: Number, required: true}
})

module.exports = mongoose.model('Student', studentSchema)
