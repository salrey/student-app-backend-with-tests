// allows us to create backend server whenever we need it we npm install, then we have a dependency list, the next this is package.lock it's built on a bunch of other things, express has whole arreay of dependencies and set them to certain versions. then we have node modules directory, these are all the 
// import code for express
const express = require('express');
const cors = require('cors')

//initialize app
const app = express();

const studentController = require('./controllers/studentsController')
const namesController = require('./controllers/namesController')


app.use('/students', studentController);
app.use('/names', namesController);

app.use(cors())

//route
app.get('/', (request, response) => {
    response.send('Hello World!');
});

//export app
module.exports = app; 