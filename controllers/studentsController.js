const express = require('express');

//Router is capitalized since it's a constructor object
const controller = express.Router();

const studentData = require('../studentData.json');
// for every request there's a response 
controller.get('/', (request, response) => {
    response.json(studentData)
})

//send the controller to app.js 
module.exports = controller;