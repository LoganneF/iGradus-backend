const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
  name: {type: String, required: true},
  studentImage: {type: String, default: "https://cdn.clipart.email/38ee7d3fbd4d64f0a95f3dc280ccecb0_gender-partitioned-babe_396-355.png"},
  passing: {type: Boolean, default: true}
})

module.exports = mongoose.model('Student', studentSchema)
