const express = require('express');

//Router is capitalized since it's a constructor object
const controller = express.Router();

const studentData = require('../studentData.json');
// for every request there's a response 
controller.get('/', (request, response) => {
    //how do I handle query string? 
    //can set default for limit if there's no query
    let {limit=25} = request.query; //> 10

    limit = Number(limit)
    //How do I change the student data according to the limit

    // studentData.student = [25 items]

    let result = {...studentData}
    result.students = result.students.slice(0, limit)

    response.json(result)
})

controller.get('/:id', (request, response) => {

    try {

        if (!/[0-9]/.test(request.params.id))
        // if (typeof request.params.id !== 'Number')
        {
            response.send( "Student id must be a number");
            return;
        }

        const singleStudent = studentData.students.find((student) => student?.id === request.params.id)
        if (singleStudent) {
            response.json(studentData.students.find((student) => student?.id === request.params.id))
        } else {
            response.send('Student not found')
        }
        } catch (err) {
            response.status(500).send('An error occurred')
        }
    }
)

//send the controller to app.js 
module.exports = controller;