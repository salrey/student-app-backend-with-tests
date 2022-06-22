const express = require('express');
const req = require('express/lib/request');

//Router is capitalized since it's a constructor object
const controller = express.Router();

const studentData = require('../studentData.json');
// for every request there's a response 
controller.get('/', (request, response) => {
    response.json(studentData)
})

controller.get('/:id', (request, response) => {
    response.json(studentData.students.find((student) => student?.id === request.params.id))
})

//send the controller to app.js 
module.exports = controller;