const express = require('express');
require('dotenv').config();
const app = express();
const routes = require('./routes/');


// middle ware stack stats here
app.use('/api/v1/',routes);



// add error handler
const port = process.env.PORT || 8000
app.listen(port, () =>{
    console.log('listening on port 8080' );
});
 
