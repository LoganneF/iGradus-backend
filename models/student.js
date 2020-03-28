const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
  name: {type: String, required: true},
  passing: {type: Boolean, default: true}
})

module.exports = mongoose.model('Student', studentSchema)
