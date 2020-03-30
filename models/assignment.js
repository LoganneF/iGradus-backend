const mongoose = require('mongoose')

const assignmentSchema = mongoose.Schema({
  date: {type: String, required: false},
  name: {type: String, required: true},
  grade: {type: String, required: true}
})

module.exports = mongoose.model('Assignment', assignmentSchema)