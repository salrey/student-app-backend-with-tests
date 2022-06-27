const express = require('express');

//Router is capitalized since it's a constructor object
const controller = express.Router();

const studentData = require('../studentData.json');

// for every request there's a response 
controller.get('/', (request, response) => {
    //how do I handle query string? 
    //set default for limit in deconstruction if there's no query
    let {limit=25} = request.query; //> 10

    limit = Number(limit)
    //How do I change the student data according to the limit

    // studentData.students = [25 items]

    let result = {...studentData}
    result.students = result.students.slice(0, limit)

    response.json(result)

    //if SQL queries
    // let {limit=25, min=0, max=INFINITY} = request.query; 
    //  OR use if else statement 
    // if (!min && !max) {
    //     SELECT *  FROM students LIMIT $1, [limit]
    // }
    // SELECT * FROM students WHERE id >= $1 AND id <= $2 LIMIT $3, [min, max, limit]
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

//EXERCISES 

//In a existing route implement min and max ids to get students

//write a route to get a student by their full name 

//write a route to get the grade average of a student by their id 

//get all students sorted by their last name 



//send the controller to app.js 
module.exports = controller;