const mongoose = require('mongoose')

const assignmentSchema = mongoose.Schema({
  date: {type: String, required: true},
  name: {type: String, required: true},
  grade: {type: String, required: false}
})

module.exports = mongoose.model('Assignment', assignmentSchema)