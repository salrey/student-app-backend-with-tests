const express = require('express');

//Router is capitalized since it's a constructor object
const controller = express.Router();

// for every request there's a response 
controller.get('/', (request, response) => {
    response.send('Hello from the students controller!')
})

//send the controller to app.js 
module.exports = controller;