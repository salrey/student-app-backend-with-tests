const express = require('express');

//Router is capitalized since it's a constructor object
const controller = express.Router();

const studentData = require('../studentData.json');
// for every request there's a response 
controller.get('/', (request, response) => {
    response.json(studentData)
})

controller.get('/:id', (request, response) => {
    const singleStudent = studentData.students.find((student) => student?.id === request.params.id)
    
    if (singleStudent) {
        response.json(studentData.students.find((student) => student?.id === request.params.id))
    } else {
        response.send('Student not found')
    }
})

//send the controller to app.js 
module.exports = controller;