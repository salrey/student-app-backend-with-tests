//need a new server to serve the app 

const app = require('./app');

//anything required must be npm i
require('dotenv').config();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Listening to server on ${PORT}`))