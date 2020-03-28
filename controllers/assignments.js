const express = require('express')
const assignments = express.Router()
const Assignment = require('../models/assignment.js')

//Create Route
assignments.post('/', async (req, res) => {
  Assignment.create(req.body, (error, createdAssignment) => {
    if (error) {
      res.status(400).json({ error: error.message })
    }
    res.status(200).send(createdAssignment) 
  })
})

assignments.get('/', (req, res) => {
  Assignment.find({}, (err, foundAssignments) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(foundAssignments)
  })
})

//DELETE ROUTE
assignments.delete('/:id', (req, res) => {
  Assignment.findByIdAndRemove(req.params.id, (err, deletedAssignment) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(deletedAssignment)
  })
})

//UPDATE ROUTE
assignments.put('/:id', (req, res) => {
  Assignment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedAssignment) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(updatedAssignment)
  })
})

module.exports = assignments