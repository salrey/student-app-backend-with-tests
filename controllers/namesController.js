const express = require('express');

const controller = express.Router();
const { repeatNTimesWithSpace, capitalizeFirstLetter } = require('../utils/stringUtils')

//use this controller first or else will get error on the next route which is looking for name and times vs. 'capitalizeNames' and name
controller.get('/capitalizeName/:name', (request, response) => {
    try {
        //get name 
        const name = request.params.name

        //call repeatNTimesWithSpace() and get the result
        const capitalizeName = capitalizeFirstLetter(name);

        //send string response of result
        response.send(capitalizeName);

    } catch (err) {
        response.send("There was an error.")
    }
})

controller.get('/:name/:times', (request, response) => {
    try {
        //get name 
        const name = request.params.name

        //get times
        const times = request.params.times

        //call repeatNTimesWithSpace() and get the result
        const repeatedNames = repeatNTimesWithSpace(name, times);

        //send string response of result
        response.send(repeatedNames);

    } catch (err) {
        response.send("There was an error.")
    }
})



module.exports = controller;