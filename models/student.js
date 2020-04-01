const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
  name: {type: String, required: true},
  imageUrl: {type: String, default: "https://lh5.ggpht.com/_S0f-AWxKVdM/S5TpU6kRmUI/AAAAAAAAL4Y/wrjx3_23kw4/s72-c/d_silhouette%5B2%5D.jpg?imgmax=800"},
  passing: {type: Boolean, default: true}
})

module.exports = mongoose.model('Student', studentSchema)
