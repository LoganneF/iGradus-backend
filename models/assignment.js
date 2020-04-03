const mongoose = require('mongoose')

const assignmentSchema = mongoose.Schema({
  name: {type: String, required: true},
  date: {type: String, required: false},
  description: {type: String, required: true},
  avgrade: {type: String, required: true}
})

module.exports = mongoose.model('Assignment', assignmentSchema)